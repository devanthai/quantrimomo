const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    sdt: {
        type: String
    },
    sdtchuyen: {
        type: String
    }
    ,
    name: {
        type: String
    }
    ,
    magd: {
        type: String
    }
    ,
    tiencuoc: {
        type: Number
    }
    ,
    tienthang: {
        type: Number
    }
    ,
    status: {
        type: Number
    }
    ,
    sodu: {
        type: Number
    }
    ,
    noidung: {
        type: String
    }
    ,
    time: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Cuoc', userSchema)