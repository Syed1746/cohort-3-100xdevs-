const express = require("express");
const PORT =3000;
const app = express();

function sum(n){
    let ans=0;
    for(let i=0;i<=n;i++){
        ans= ans + i;
    }
    return ans;
}

// app.get("/",function(req,res){
//     res.send("hey there")
// })
app.get("/",function(req,res){
    const n= parseInt(req.query.n);
    // const b= req.query.b;
    const ans= sum(n);
    console.log("you answer"+ans);
    res.send(ans);
})

app.listen(PORT,()=>{
    console.log(`Server: ${PORT}`)
})