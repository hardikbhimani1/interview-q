const mongoose = require("mongoose");

const schoolData = new mongoose.Schema({
    firstname :{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    Schoolname:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

const studentData = new mongoose.model("Schooldata",schoolData)

module.exports = studentData;