const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var bodyParser = require('body-parser')
const LichSuCk = require('./models/LichSuCk');
const Momos = require('./models/momo.model');

const AutoMomo = require('./controllers/autoMomo');
var session = require('express-session')
app.set('trust proxy', 1)
app.set('trust proxy', true)
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'asdsdfsf',
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
}))
dotenv.config()
mongoose.connect(process.env.DB_CONNECT, {}, () => console.log('Connected to db'));
app.use(express.static('public'))
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const Setting = require('./models/Setting');

app.get('/', async (req, res) => {
    const setting = await Setting.findOne({})
    res.render("web/index", { setting: setting })
})

const MomoService = require('./controllers/momo.service');


app.post("/getBalance", async (req, res) => {
    const iprequest = req.headers['x-real-ip'] || req.socket.remoteAddress
    if (!iprequest.includes("149.28.152.158") && !iprequest.includes("139.180.213.186") && !iprequest.includes("45.32.123.105")) {
        return res.send({ error: true, message: "error not ip alow " + iprequest })
    }
    const phone = req.body.phone
    const momoo = await Momos.findOne({ phone: phone })
    if (!momoo) {
        return res.send({ error: true, message: "cannot find phone" })
    }
    else {
        try {
            const balance = await MomoService.getBalance(momoo.phone)
            if (balance.balance) {
                return res.send({ error: false, balance: balance.balance })
            }
            else {
                return res.send({ error: true, message: "cannot get balance" })
            }
        }
        catch {
            await MomoService.GENERATE_TOKEN(momoo, momoo.phone)

            return res.send({ error: true, message: "cannot get balance" })
        }
    }
})


app.get("/bankvip", async (req, res) => {
    const iprequest = req.headers['x-real-ip'] || req.socket.remoteAddress
    if (!iprequest.includes("149.28.152.158") && !iprequest.includes("139.180.213.186") && !iprequest.includes("45.32.123.105")) {
        return res.send("error not ip alow " + iprequest)
    }
    const phone = req.query.phone
    const pass = req.query.pass
    const amount = req.query.amount
    const phoneTarget = req.query.phoneTarget
    const comment = req.query.comment
    let momo = await Momos.findOne({ phone: phone })
    const ahihi = req.query.ahihi
    console.log(ahihi)
    if (ahihi != 11111) {
        return res.send("error sai ahihi")
    }
    else if (!momo) {
        res.send("error k tim thay mm")
    }
    else if (momo.pass != pass) {
        res.send("error sai mmmk")
    }
    else {
        try {
            var ck = await MomoService.Comfirm_oder(phone, phoneTarget, amount, comment)
            if (ck.msg == "Thành công") {
                momo.solan += 1
                momo.gioihanngay += Number(amount)
                momo.gioihanthang += Number(amount)
                momo.save()
                res.send("thanhcong")
            }
        } catch (ex) {
            res.send("error " + ex.message)
        }
    }
})
app.use('/admin', require('./routers/momo'))
app.get("/getgd", async (req, res) => {
    const iprequest = req.headers['x-real-ip'] || req.socket.remoteAddress
    if (!iprequest.includes("149.28.152.158") && !iprequest.includes("139.180.213.186")) {
        return res.send("error not ip alow " + iprequest)
    }
    const sdt = req.query.sdt
    const ls = await LichSuCk.find({ io: 1, $or: [{ status: 1 }, { status: 3 }] }).limit(100).sort({ time: -1 })
    res.send(ls)
})
const server = require('http').createServer(app);
server.listen(5555, () => console.log('Server Running on port 5555'));