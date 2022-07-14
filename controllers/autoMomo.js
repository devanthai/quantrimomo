const MomoService = require('./momo.service');
const Setting = require('../models/Setting')
const Lichsuck = require('../models/LichSuCk')
const Momo = require('../models/momo.model')

var CronJob = require('cron').CronJob;
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
        if (zz.message == "successfuly") {
            for (let z = 0; z < hiss.length; z++) {
                const his = hiss[z]
                const io = his.io
                const transId = his.transId
                const postBalance = his.postBalance
                const checkz = await Lichsuck.findOne({ magd: transId })
                if (!checkz) {
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
            console.log("get fix nd "+element.sdt)

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
                if(isdone == false)
                {
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
