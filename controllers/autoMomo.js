const MomoService = require('./momo.service');
const Setting = require('../models/Setting')
const Lichsuck = require('../models/LichSuCk')
const Momo = require('../models/momo.model')
const redisCache = require("../redisCache")
const keyMomo = "momoMagd"



var CronJob = require('cron').CronJob;

let cronMonthly = new CronJob('0 0 1 * *', function () {
    console.log("Hello new month~")
    ResetNewMonth()

}, function () {
    /* This function is executed when the job stops */
},
    true, /* Start the job right now */
    'Asia/Ho_Chi_Minh' /* Time zone of this job. */
);
async function ResetNewMonth() {
    await Momo.updateMany({}, { gioihanthang: 0 })
}


async function ResetNewDay() {
    await Momo.updateMany({}, { gioihanngay: 0, solan: 0 })
    await DayTask.updateMany({}, { totalPlay: 0, moc: 5 })
}


checkMagdRedis = async (magd) => {
    const napmomo = await redisCache.get(keyMomo)
    if (!napmomo) {
        redisCache.set(keyMomo, JSON.stringify({}))
        return true
    }
    else {
        let jMomos = JSON.parse(napmomo)
        if (jMomos[magd] != undefined) {
            return false
        }
        else {
            jMomos[magd] = magd
            redisCache.set(keyMomo, JSON.stringify(jMomos))
            return true
        }
    }
}
deleteMagdRedis = async (magd) => {
    const napmomo = await redisCache.get(keyMomo)
    if (!napmomo) {
        redisCache.set(keyMomo, JSON.stringify({}))
        return true
    }
    else {
        let jMomos = JSON.parse(napmomo)
        if (jMomos[magd] != undefined) {
            console.log("firt: ", jMomos.lenth)
            delete jMomos[magd]
            redisCache.set(keyMomo, JSON.stringify(jMomos))
            console.log("last: ", jMomos.lenth)
            return true
        }
        else {
            return false
        }
    }
}


var cronNewDay = new CronJob('00 00 00 * * *', function () {
    console.log("Hello new day~")
    ResetNewDay()

}, function () {
    /* This function is executed when the job stops */
},
    true, /* Start the job right now */
    'Asia/Ho_Chi_Minh' /* Time zone of this job. */
);

async function ResetNewDay() {
    await Momo.updateMany({}, { gioihanngay: 0, solan: 0 })
}

Start()
async function Start() {
    var ccc = await Setting.findOne({})
    if (!ccc) {
        await new Setting({ setting: "Setting" })
    }
}
setInterval(() => {
    AutoGet()
}, 5000)

async function CheckGd(phone, dateString, setting) {
    try {
        var hiss = await MomoService.getTranshis(phone.phone, dateString, dateString, 10)
        var zz = hiss
        hiss = hiss.momoMsg
        if (zz.message == "Giao dịch thành công") {
            for (const element of hiss) {
                const his = element
                const io = his.io
                const transId = his.transId

                const checkGdredis = await checkMagdRedis(transId)

                if (checkGdredis) {
                    console.log("check redis: " + checkGdredis, transId)
                    const postBalance = his.postBalance
                    const checkz = await Lichsuck.findOne({ magd: transId })
                    if (!checkz) {

                        try {

                            const data = await MomoService.getTranId(phone.phone, transId);
                            if (data) {
                                const partnerId = data.partnerId
                                const partnerName = data.partnerName
                                const amount = data.amount
                                var comment = data.comment

                                if (comment == undefined) {
                                    await new Lichsuck({ sdt: phone.phone, sdtchuyen: partnerId, name: partnerName, magd: transId, sotien: amount, io: io, noidung: comment, status: -999 }).save()
                                }
                                else {
                                    await new Lichsuck({ sdt: phone.phone, sdtchuyen: partnerId, name: partnerName, magd: transId, sotien: amount, io: io, noidung: comment, status: 1 }).save()
                                }
                                if (io == 1) {
                                    await Momo.findOneAndUpdate({ sdt: phone.phone }, { sotien: postBalance })
                                }
                            }
                        }
                        catch (ex) {
                            deleteMagdRedis(transId)
                            if (!ex.toString().includes("commentValue")) {
                                if (ex.toString().includes("401")) {
                                    try {
                                        await MomoService.GENERATE_TOKEN(phone, phone.phone)
                                    }
                                    catch { }
                                }
                                console.log("gettranid" + phone.phone + ex)
                            }
                        }
                    }
                }
            }
        }
    } catch (ex) {
        if (!ex.toString().includes("commentValue")) {
            if (ex.toString().includes("401")) {
                try {
                    await MomoService.GENERATE_TOKEN(phone, phone.phone)
                }
                catch { }
            }
        }
        console.log("lsgd" + phone.phone + ex)
    }
}
async function AutoGet() {
    const dateString = new Date().toLocaleDateString()
    const phones = await Momo.find({ status: 1 })
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i]
        CheckGd(phone, dateString)
        console.log(phone.phone)
    }
}

async function AutoFixComment() {
    var cuocsfails = await Lichsuck.find({ status: -999 })

    cuocsfails.forEach(async (element) => {
        try {
            const notis = await MomoService.getNoti(element.sdt, 100000000)
            console.log("get fix nd " + element.sdt)

            console.log(notis)
            if (notis.length == 0) {
                element.noidung = "error"
                element.status = 3
                element.save()
            }
            else {
                var isdone = false
                for (let i = 0; i < notis.length; i++) {
                    const tranId = notis[i].tranId
                    const comment = notis[i].comment
                    if (tranId == element.magd) {
                        element.noidung = comment
                        element.status = 1
                        element.save()
                        console.log("fixcomment: " + tranId, element)
                        isdone = true
                        break
                    }
                }
                if (isdone == false) {
                    element.noidung = "Không thể lấy đc nội dung"
                    element.status = 3
                    element.save()
                }
            }
        }
        catch (ex) {
            console.log(ex)
        }
    })
}
setInterval(() => {
    AutoFixComment()
}, 5000)
