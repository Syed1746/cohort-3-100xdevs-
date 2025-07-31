const express = require("express");
const app = express();

const Users = [
        {
        name:"Kumar",
        kidneys:[{
            healthy:true
        },
        {
            healthy:true
        }
    ]
    },
    {
        name:"Kokki",
        kidneys:[{
            healthy:true
        }
    ]
    }
    
];

app.get('/',function(req,res){
    const johnKidneys = Users[1].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<numberOfKidneys;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
    // console.log("number of unhealthy kidneys",numberOfHealthyKidneys)
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})
app.post('/',function(req,res){
        
})
app.put('/',function(req,res){

})
app.delete('/',function(req,res){

})
app.listen(3000)

