const express = require("express");
const PORT = 3001;

const app = express();
app.use(express.json());

const Users = [
    {
        name:"abd",
        kidneys:[{
            healthy:false
        }]
    }
]

app.get('/',function(req,res){
    const abdKidneys= Users[0].kidneys;
    const numberOfKidneys = abdKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<numberOfKidneys; i++){
        if(abdKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys= numberOfKidneys - numberOfHealthyKidneys
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
    // console.log(abdKidneys)
})

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    Users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })
})

app.put('/',function(req,res){
    for(let i=0;i<Users[0].kidneys.length;i++){
       Users[0].kidneys[i].healthy=true; 
    }
    res.json({
        msg:"Updated"
    })
})

app.listen(PORT,()=>{
    console.log(`Server listening on port: ${PORT}`);
})