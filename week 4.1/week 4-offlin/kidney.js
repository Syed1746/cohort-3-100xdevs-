const express = require("express");
const app = express();

const Users = [{
    name:"Kumar",
    kidneys:[{
        healthy:false
    }]
}];

app.get('/',function(req,res){
    const johnKidneys = Users[0].healthy;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<numberOfKidneys;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
    console.log("number of unhealthy kidneys",numberOfHealthyKidneys)
})
app.post('/',function(req,res){

})
app.put('/',function(req,res){

})
app.delete('/',function(req,res){

})
app.listen(3000)

