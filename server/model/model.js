const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type: String,
        required : true,
        unique: true
    },
    mobile : {
        type: String,
        unique: true
    },
    date :{
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    pin_code: {
        type: String,
    }
})

const contact_info = mongoose.model('contact_info', schema);

module.exports = contact_info;