const express = require('express');
const cors=require('cors')
const app=express();
const port = process.env.PORT || 3000;
app.use(cors());
app.get('/check',(req,res)=>{
    const age=parseInt(req.query.age);
    if(age>=18)
    {
        res.send("You are eligible to drive")
    }
    else
    {
        res.send("you are not eligible to drive")
    } 
})
app.listen(port, () => {console.log(`Server is alive`);});


