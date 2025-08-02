const express = require('express');
const userRouter = express.Router();
const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const {
    JWT_USER_PASSWORD
} = require("../config/config")
userRouter.post('/signup', async function(req, res) {
    try {
        const { email, password, firstName, lastName } = req.body;
        if (!email || !password || !firstName || !lastName) {
            res.status(400).json({
                message: "Missing required fields"
            })
        }
        await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
        res.json({
            message: "Signup done you can login and explore"
        })
    } catch (e) {
        res.status(500).json({
            message: "Error during signup",
            error: e.message
        })
    }

})

userRouter.post('/signin', async function(req, res) {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({
            email: email,
            password: password
        })
        if (user) {
            const token = jwt.sign({
                id: user._id
            }, JWT_USER_PASSWORD);
            res.json({
                token: token
            })
        } else {
            res.json({
                message: "incorrect credentials"
            })
        }
    } catch (e) {
        res.status(500).json({
            message: "error occured while signin",
            error: e.message
        })
    }
})

userRouter.get('/purchases', function(req, res) {
    res.json({
        message: "Purchased Courses"
    })
})

module.exports = userRouter