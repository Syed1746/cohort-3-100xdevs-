const express = require('express');
const courseRouter = express.Router();

courseRouter.post('/purchase', function(req, res) {
    res.json({
        message: "current purchase"
    })
})

courseRouter.get('/', function(req, res) {
    res.json({
        message: "all courses"
    })
})

module.exports = courseRouter;