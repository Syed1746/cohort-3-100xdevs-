const express = require("express")
const adminRouter = express.Router();

adminRouter.post("/sigup",function(req,res){
    res.json({
        message:"signup"
    })
})
adminRouter.post("/sigin",function(req,res){
    res.json({
        message:"signup"
    })
})
adminRouter.post("/course",function(req,res){
    res.json({
        message:"signup"
    })
})
adminRouter.put("/updation",function(req,res){
    res.json({
        message:"signup"
    })
})