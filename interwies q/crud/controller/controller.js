const express = require("express");
const studentData = require("../schema/schema")

exports.insert = ((req,res)=>{
    const data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        Schoolname: req.body.Schoolname,
        city: req.body.city,
    }
    studentData.create(data,(err,result)=>{
        if(err) throw err
        else{
             res.send({status: true, responsecode: 1, massage: "Data Inserted", data: result})
        }
    })
});

exports.find =((req,res)=>{
    studentData.find((err,result)=>{
        if(err) {
            res.send({ massage: "enter valid SchoolName", responsecode: 0, status: false })
        }
        else{
            res.send({status: true, responsecode: 1, massage: "Data Finded", data: result})
        }
    })
})

exports.update = ((req,res)=>{
    studentData.updateOne({"firstname":req.body.firstname},{
        $set:{
            lastname: req.body.lastname,
            Schoolname: req.body.Schoolname,
            city: req.body.city,
        }
    },(err,result)=>{
        if(err) throw err
        else{
            res.json({ "msg": "document updated....",data:result});
        }
    })
})

exports.delete = ((req,res)=>{
    studentData.deleteOne(req.body,(err,result)=>{
        if(err) throw err
        else{
            res.json({ "msg": "document deleted..." });
        }
    })
})