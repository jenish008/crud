const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name:String,
    email:String,
    number:Number
})

module.exports = mongoose.model( 'users',userschema);

