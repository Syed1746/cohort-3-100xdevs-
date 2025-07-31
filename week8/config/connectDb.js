const mongoose = require("mongoose");

const connectDb = async()=>{
    await mongoose.connect(process.env.URI)
    .then(()=>console.log("Mongodb Connected..."))
}

module.exports= connectDb;