const express = require("express");
const courseRouter = require("./routes/course");
const userRouter = require("./routes/user")
const adminRouter = require("./routes/admin")
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3001;
const connectDb = require("./config/connectDb");
const { connect } = require("mongoose");

app.use(express.json());
app.use("/course", courseRouter)
app.use("/user", userRouter);
app.use("/admin", adminRouter)

connectDb();

// async function main(){
//     await connectDb();

//     app.listen(PORT,()=>{
//         console.log(`server is listening on ${PORT}`);
//     })
// }
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})

// main();