const app = require('express').Router()
const MomoService = require('../controllers/momo.service');
const Setting = require('../models/Setting');
const Momo = require('../models/momo.model');
const Lichsuck = require('../models/LichSuCk');
const checklogin = require('./checklogin')
const login = require('./login')
function numberWithCommas(x) {
    try {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    catch {
        return 0
    }
}
app.use(checklogin)
app.use('/auth', login)
app.get('/', async (req, res) => {
    if (!req.user.isLogin) {
        return res.redirect('/admin/auth/')
    }
    res.render("admin/index", { page: "views/trangchu", data: req.user })
})

app.get('/setting', async (req, res) => {
    setting = await Setting.findOne({})
    if (!setting) {
        await new Setting({ setting: "Setting" }).save()
    }
    res.render("admin/index", { page: "views/setting", data: req.user })
})
app.post('/addsdt2', async (req, res) => {
    const zzz = req.body.textarraymm
    var toarray = JSON.parse(zzz)
    //  console.log(toarray.phone)
    try {
        await new Momo({
            phone: toarray.phone,
            gioihan: toarray.gioihan,
            gioihanngay: toarray.gioihanngay,
            gioihanthang: toarray.gioihanthang,
            imei: toarray.imei,
            name: toarray.name,
            pass: toarray.pass,
            solan: toarray.solan,
            sotien: toarray.sotien,
            status: toarray.status,
            phash: toarray.phash,
            setupKey: toarray.setupKey,
            refresh_token: toarray.refresh_token,
            token: toarray.token
        }).save()
    }
    catch {

    }
    res.send("ok")
})
app.post('/setting', async (req, res) => {
    const { thongbao, huongdan, min, tieude, linkzalo, linklogo, max, chanle, taixiu, chanle2, gap31, gap32, gap33, tong3so1, tong3so2, tong3so3, toptuan1, toptuan2, toptuan3, toptuan4, toptuan5, phan3 } = req.body
    await Setting.findOneAndUpdate({}, {
        thongbao: thongbao,
        tieude: tieude,
        huongdan: huongdan,
        toptuan1: toptuan1,
        toptuan2: toptuan2,
        toptuan3: toptuan3,
        toptuan4: toptuan4,
        toptuan5: toptuan5,
        linkzalo: linkzalo,
        linklogo: linklogo,
        "tile.min": min,
        "tile.max": max,
        "tile.chanle": chanle,
        "tile.taixiu": taixiu,
        "tile.chanle2": chanle2,
        "tile.gap3type1": gap31,
        "tile.gap3type2": gap32,
        "tile.gap3type3": gap33,
        "tile.tong3sotype1": tong3so1,
        "tile.tong3sotype2": tong3so2,
        "tile.tong3sotype3": tong3so3,
        "tile.phan3": phan3,
    })
    res.send("ok")
})


app.post('/chuyentien', async (req, res) => {
    if (!req.user.isLogin) {
        return res.send({
            success: true,
            message: 'Vui lòng đăng nhập lại (F5)'

        })
    }
    var { sdt, id, sotien, noidung, pass } = req.body
    var momo = await Momo.findById(id)
    if (momo) {
        if (momo.pass == pass) {

            try {

                const data = await MomoService.Comfirm_oder(momo.phone, sdt, Number(sotien), noidung);

                momo.solan += 1
                momo.gioihanngay += Number(sotien)
                momo.gioihanthang += Number(sotien)
                momo.save()

                res.send({
                    success: true,
                    message: 'Thành công',
                    data
                })
            }
            catch (e) {
                res.send({
                    success: false,
                    message: e.message
                })
            }
        }
        else {
            res.send({
                success: false,
                message: "Sai Mật khẩu"
            })

        }
    }


})
app.get('/chuyentien', async (req, res) => {
    if (!req.user.isLogin) {
        return res.redirect('/admin/auth/')
    }
    var id = req.query.id
    var momo = await Momo.findById(id)
    if (momo) {




        var html = `  <div class="alert alert-primary" role="alert">
        <label for="">Số diện thoại chuyển: <b style="color:red">`+ momo.phone + " (" + momo.name + ") - " + " Số dư: " + numberWithCommas(momo.sotien) + `</b></label>
                  <br>
                  <label for="">Số diện thoại</label>
                  <input type="text" name="" id="sdt">
                  <br>
                  <label for="">Số tiền</label>
                  <input type="text" name="" id="sotien">
                  <br>
                  <label for="">Nội dung</label>
                  <input type="text" name="" id="noidung">
                  <br>
                  <label for="">Mật khẩu</label>
                  <input type="text" name="" id="pass">
                  <br>
                  <div id="thongbaock"></div>
                  <button class="btn btn-primary" onclick="chuyetien('`+ momo._id + `')">Chuyển ngay</button>
      </div>
            <script>
      function chuyetien(id) {

        $.ajax({
            url: "/admin/chuyentien",
            type: "post",
            data: {
                id:id,
                sdt: $('#sdt').val(),
                sotien: $('#sotien').val(),
                noidung: $('#noidung').val(),
                pass: $('#pass').val()
            },
            success: function (result) {
                if(result.success)
                {
                    $("#thongbaock").html('<div class="alert alert-success" role="alert">'+result.message+'</div>')
                }
                else
                {
                    $("#thongbaock").html('<div class="alert alert-danger" role="alert">'+result.message+'</div>')
                }

            }
        });

    }
    </script>
        `
        return res.render('admin/index2', { page: html })
    }
    res.send("loi khong xac dinh")
})



app.get('/chitietlichsu', async (req, res) => {
    if (!req.user.isLogin) {
        return res.redirect('/auth/')
    }
    const tranId = req.query.tranid
    const phone = req.query.phone
    try {
        const data = await MomoService.getTranId(phone, tranId);

        var html = ""
        if (data.io == -1) {


            html += `<div class="alert alert-danger" role="alert">Số điện thoại: ` + data.phone + `<br>Mã giao dịch: ` + data.transId + "<br>Chuyển tiền cho " + data.targetName + " (" + data.targetId + ")" + "<br>Số tiền: " + numberWithCommas(data.amount) + "<br>Số Dư: " + numberWithCommas(data.postBalance) +

                `<br>Nội dung: ` + data.comment + "<br>Thời gian: " + new Date(data.time).toLocaleString() +
                `  </div>`

        }
        else {
            html += `<div class="alert alert-success" role="alert">Số điện thoại: ` + data.phone + `<br>Mã giao dịch: ` + data.transId + "<br>Nhận tiền từ " + data.partnerName + " (" + data.partnerId + ")" + "<br>Số tiền: " + numberWithCommas(data.amount) + "<br>Số Dư: " + numberWithCommas(data.postBalance) +

                `<br>Nội dung: ` + data.comment + "<br>Thời gian: " + new Date(data.time).toLocaleString() +
                `  </div>`
        }
        html += "<br>" + JSON.stringify(data.serviceData)
        console.log(data)
        res.render("admin/index2", { page: html })

    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }

})
app.get('/lichsu', async (req, res) => {
    if (!req.user.isLogin) {
        return res.redirect('/admin/auth/')
    }
    const id = req.query.id
    var momo = await Momo.findById(id)
    var date = new Date().toLocaleDateString('en-GB').replaceAll('/', '-')

    try {
        const data = await MomoService.getTranshis(momo.phone, date, date, 200);


        var html = ""
        if (data.message == "Giao dịch thành công" && data.momoMsg) {
            //console.log(data.momoMsg)
            data.momoMsg.forEach(async (ls) => {
                if (ls.status == 6) {
                    if (ls.io == -1) {
                        html += `<div class="alert alert-warning" role="alert">Mã giao dịch: ` + ls.transId + `<br>Chuyển tiền cho: ` + ls.targetName + " (" + ls.targetId + ")" + "<br>Số tiền: " + numberWithCommas(ls.totalAmount) +
    
                            `<br><a href="/admin/chitietlichsu?phone=` + momo.phone + `&tranid=` + ls.transId + `" target="_blank">Xem chi tiết</a>` +
                            `  </div>`
                    }
                    else if (ls.io == 1) {
    
                        html += `<div class="alert alert-warning " role="alert">Mã giao dịch: ` + ls.transId + `<br>Nhận tiền từ: ` + ls.sourceName + " (" + ls.sourceId + ")" + "<br>Số tiền: " + numberWithCommas(ls.totalAmount) + `<br><a href="/admin/chitietlichsu?phone=` + momo.phone + `&tranid=` + ls.transId + `" target="_blank">Xem chi tiết</a>` + `  </div>`
                    }
                }
                else if (ls.io == -1) {
                    html += `<div class="alert alert-danger" role="alert">Mã giao dịch: ` + ls.transId + `<br>Chuyển tiền cho: ` + ls.targetName + " (" + ls.targetId + ")" + "<br>Số tiền: " + numberWithCommas(ls.totalAmount) +

                        `<br><a href="/admin/chitietlichsu?phone=` + momo.phone + `&tranid=` + ls.transId + `" target="_blank">Xem chi tiết</a>` +
                        `  </div>`
                }
                else if (ls.io == 1) {

                    html += `<div class="alert alert-success " role="alert">Mã giao dịch: ` + ls.transId + `<br>Nhận tiền từ: ` + ls.sourceName + " (" + ls.sourceId + ")" + "<br>Số tiền: " + numberWithCommas(ls.totalAmount) + `<br><a href="/admin/chitietlichsu?phone=` + momo.phone + `&tranid=` + ls.transId + `" target="_blank">Xem chi tiết</a>` + `  </div>`
                }


               // console.log(ls)
                //   }
            })
        }
        res.render('admin/index2', { page: html })

    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }


})
app.post('/search', async (req, res) => {
    if (!req.user.isLogin) {
        return res.send({ error: 1, message: "Vui long dang nhap" })
    }

    var magd = req.body.magd
    var finddd = await Lichsuck.findOne({ magd: magd })
    if (finddd) {
        var html = `
    <tr>
    <td scope="col">
        `+ new Date(Date.parse(finddd.time)).toLocaleString() + `

    </td>

    <td scope="col">
    `+ finddd.sdtchuyen + `
    </td>
    <td scope="col">
    `+ finddd.magd + `
    </td>
    <td scope="col">
    `+ finddd.name + `
    </td>
    <td scope="col">
    `+ finddd.sdt + `
    </td>
    <td scope="col">
    `+ String(finddd.sotien).replace(/(.)(?=(\d{3})+$)/g, '$1,') + `
    </td>
    <td scope="col">
    `+ finddd.noidung + `
    </td>
    <td scope="col">


        <a href="/admin/chitietlichsu?phone=`+ finddd.sdtchuyen + `&tranid=` + finddd.magd + `"
            target="_blank">Xem chi tiết</a>
    </td>



</tr>
`
        res.send({ error: 0, table: html })

    }
    else {
        res.send({ error: 1, message: "Khoong tim thay" })

    }


})
app.post('/battat', async (req, res) => {
    if (!req.user.isLogin) {
        return res.send("Vui lòng đăng nhập lại")
    }
    var id = req.body.id
    var isbattat = req.body.isbat
    if (isbattat == "Tắt") {

        await Momo.findByIdAndUpdate(id, { status: 0 })
    }
    else {

        await Momo.findByIdAndUpdate(id, { status: 1 })
    }
    res.send('ok')

})
app.post('/xoa', async (req, res) => {
    if (!req.user.isLogin) {
        return res.send("Vui lòng đăng nhập lại")
    }
    var id = req.body.id
    await Momo.deleteOne({ _id: id })
    res.send('ok')
})
app.post('/gentoken', async (req, res) => {
    if (!req.user.isLogin) {
        return res.send("Vui lòng đăng nhập lại")
    }
    var id = req.body.id
    const momo = await Momo.findOne({ _id: id })
    if (momo) {
        const zzz = await MomoService.GENERATE_TOKEN(momo, momo.phone)
        console.log(zzz)
    }
    res.send('ok')
})
app.get('/managerphone', async (req, res) => {
    if (!req.user.isLogin) {
        return res.redirect('/admin/auth/')
    }
    if (req.query.load == true) {
        var zzzzz = await Momo.find({})
        for (let i = 0; i < zzzzz.length; i++) {

            try {
                await MomoService.getBalance(zzzzz[i].phone)

            }
            catch { }
        }

    }

    var momos = await Momo.find({}).sort({ status: -1 })
    var htmlsdt = ""
    for (let i = 0; i < momos.length; i++) {

        htmlsdt += `
        <tr>
                            <td scope="col">
                                `+ i + `
                            </td>
                            <td scope="col">
                                `+ momos[i].name + `
                            </td>
                            <td scope="col">
                            `+ numberWithCommas(momos[i].sotien) + `
                            </td>
                            <td scope="col">
                                `+ momos[i].phone + `
                            </td>
                            <td scope="col">
                                `+ numberWithCommas(momos[i].gioihanngay) + `
                            </td>
                            <td scope="col">
                            `+ numberWithCommas(momos[i].gioihanthang) + `
                        </td>
                            <td scope="col">
                                `+ (momos[i].status == 1 ? "<b style='color:green;'>Đang hoạt động</b>" : "<b>Đang tắt</b>") + `
                            </td>
                            <td scope="col">
                                `+ momos[i].solan + `
                            </td>
                            <td scope="col"> `+ new Date(momos[i].createdAt).toLocaleString() + `</td>
                            <td scope="col"> 
                                <button id="battat" onclick="battat('`+ momos[i]._id + `',this)">` + (momos[i].status == 1 ? "Tắt" : "Bật") + `</button>
                                <button onclick="window.open('/admin/lichsu?id=`+ momos[i]._id + `')">Xem lịch sử</button>
                                <button onclick="window.open('/admin/chuyentien?id=`+ momos[i]._id + `')">Chuyển tiền</button>
                               <button onclick="xoa('`+ momos[i]._id + `')">Xóa</button>
                               <button onclick="gentoken('`+ momos[i]._id + `')">Renew Token</button>
                            </td>
                          
                        </tr>
                        `
    }

    var page = "views/managerphone"
    res.render("admin/index", { page: page, listsdt: htmlsdt })
})
app.get('/lichsuck', async (req, res) => {
    if (!req.user.isLogin) {
        return res.redirect('/admin/auth/')
    }
    var data = await Lichsuck.find({}).sort({ 'time': -1 });
    res.render('admin/index', { page: "views/lichsuchuyentien", data: req.user, products: data })
})

app.post('/api/momo/getUser', async (req, res) => {
    const { phone, password } = req.body;
    try {
        const data = await MomoService.getUser(phone);
        res.send({
            success: true,
            message: 'Thành công',
            data
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }
})
app.post('/api/momo/getOTP', async (req, res) => {
    const { phone, password } = req.body;
    try {
        const data = await MomoService.GET_OTP(phone, password);
        // console.log(data)
        res.send({
            success: true,
            message: 'Thành công',
            data
        })
    }
    catch (e) {

        res.send({
            success: false,
            message: e.message
        })
    }
})
app.post('/api/momo/Relogin', async (req, res) => {
    const { phone, password } = req.body;
    try {
        const data = await MomoService.Re_Login(phone, password);
        // console.log(data)
        res.send({
            success: true,
            message: 'Thành công',
            data
        })
    }
    catch (e) {

        res.send({
            success: false,
            message: e.message
        })
    }
})
app.post('/api/momo/checkOTP', async (req, res) => {
    const { phone, otp } = req.body;
    try {
        const data = await MomoService.Check_OTP(phone, otp);
        res.send({
            success: true,
            message: 'Thành công',
            data
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }
})
app.post('/api/momo/getNoti', async (req, res) => {
    const { phone, begin } = req.body;
    try {
        let day = begin || 86400;
        const data = await MomoService.getNoti(phone, day);
        res.send({
            success: true,
            message: 'Thành công',
            data
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }
})
app.post('/api/momo/checkTranId', async (req, res) => {
    const { phone, tranId } = req.body;
    try {
        const data = await MomoService.getTranId(phone, tranId);
        res.send({
            success: true,
            message: 'Thành công',
            data
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }
})
app.post('/api/momo/getTransactions', async (req, res) => {
    const { phone, begin, end, limit } = req.body;
    try {
        const data = await MomoService.getTranshis(phone, begin, end, limit);
        res.send({
            success: true,
            message: 'Thành công',
            data
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }
})
app.post('/api/momo/getTransp2p', async (req, res) => {
    const { phone, begin, end, limit } = req.body;
    console.log(req.body)
    try {
        const data = await MomoService.Transhis_p2p(phone, begin, end, limit);
        res.send({
            success: true,
            message: 'Thành công',
            data
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }
})
app.post('/api/momo/getBalance', async (req, res) => {
    const { phone } = req.body;
    try {
        const data = await MomoService.getBalance(phone);
        res.send({
            success: true,
            message: 'Thành công',
            data
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }
})
app.post('/api/momo/transfer', async (req, res) => {
    const { phone, sdt, amount, comment } = req.body;
    try {

        const data = await MomoService.Comfirm_oder(phone, sdt, amount, comment);
        res.send({
            success: true,
            message: 'Thành công',
            data
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }
})
app.get('/api/momo/test', async (req, res) => {

    try {

        const data = await MomoService.test();
        res.send({
            success: true,
            message: 'Thành công',
            data
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }
})
module.exports = app