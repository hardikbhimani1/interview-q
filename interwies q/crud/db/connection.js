const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/school",
{ useNewUrlParser: true } 
,(err,connection)=>{
    if(err) throw err
    else{
        console.log("DB Connection Done")
    }
});

