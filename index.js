import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';

mongoose.connect(
    'mongodb+srv://auth:18102000@cluster0.g2sluk8.mongodb.net/?retryWrites=true&w=majority'
).then(()=>{
    console.log("DB ok")
}).catch((err)=>console.log("DB ERR", err))

const app =express();

app.use(express.json())

app.get('/',(req, res)=>{
    res.send("hello jfjfj")
})

app.post('/auth/login',(req,res)=>{
    console.log(req.body)
    const token =jwt.sign(
        {
            email:req.body.email,
            fullName:'Tom Felton'
        },
        'secret123',
    )
    res.json({
        success:true,
        token,
    })
})

app.listen(2000, (err)=>{
    if(err){
        return console.log(err)
    }
    console.log("server ok")
});