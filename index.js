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

app.get("/bankAuto", async(req, res) => {
    const phone = req.query.phone
    const pass = req.query.pass
    const amount = req.query.amount
    const phoneTarget = req.query.phoneTarget
    const comment = req.query.comment
    const momo = await Momos.findOne({ phone: phone })
    if (!momo) {
        res.send("error")
    }
    else if (momo.pass != pass) {
        res.send("error")
    }
    else {
        try {
            var ck = await MomoService.Comfirm_oder(phone, phoneTarget, amount, comment)
            if (ck.msg == "Thành công") {
                res.send("thanhcong")
            }
        } catch {
            res.send("error")
        }
    }
})
app.use('/admin', require('./routers/momo'))
app.get("/getgd", async (req, res) => {
    var sdt = req.query.sdt
    var ls = await LichSuCk.find({ sdt: sdt }).limit(100).sort({ time: -1 })
    res.send(ls)
})
const server = require('http').createServer(app);
server.listen(5232, () => console.log('Server Running on port 5232'));