const express = require("express")
const adminRouter = express.Router();
const adminModel = require("../models/admin");
const jwt = require("jsonwebtoken");
const courseModel = require("../models/course");
const {
    JWT_ADMIN_PASSWORD
} = require("../config/config");
const adminMiddleware = require("../middleware/admin");
adminRouter.post("/signup", async function(req, res) {
    try {
        const { email, password, firstName, lastName } = req.body;
        await adminModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
        res.status(201).json({
            message: "admin signup sucessfully"
        })
    } catch (e) {
        res.status(500).json({
            message: "error occurred while signup",
            error: e.message
        })
    }

})
adminRouter.post("/signin", function(req, res) {
    const { email, password } = req.body;
    const admin = adminModel.findOne({
        email: email,
        password: password
    })
    if (admin) {
        const adminToken =
            jwt.sign({
                id: admin._id
            }, JWT_ADMIN_PASSWORD)
        res.status(200).json({
            token: adminToken
        })
    } else {
        res.json({
            message: "Incorrect credentials"
        })
    }
})
adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminId = req.adminId;
    const { title, description, price, imageUrl, creatorId } = req.body;

    if (!title || !description || !price || !imageUrl) {
        return res.status(400).json({
            message: "Fields should not be in empty"
        })
    }
    try {
        const courseNew = await courseModel.create({
            title: title,
            description: description,
            price: price,
            imageUrl: imageUrl,
            creatorid: adminId

        })
        res.json(courseNew);
    } catch (e) {
        res.status(500).json({
            message: "error occurred while creating course",
            error: e.message
        })
    }


})
adminRouter.put("/updation", function(req, res) {
    res.json({
        message: "signup"
    })
})

adminRouter.get("/all/course", async function(req, res) {
    const getAllCourse = await courseModel.find();
    res.json(getAllCourse)
})

module.exports = adminRouter;