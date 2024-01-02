import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

import {registerValidator} from './validation/auth.js'
import { validationResult } from 'express-validator';
import UserModel from './models/User.js'

mongoose.connect(
    'mongodb+srv://auth:18102000@cluster0.g2sluk8.mongodb.net/address?retryWrites=true&w=majority'
).then(()=>{
    console.log("DB ok")
}).catch((err)=>console.log("DB ERR", err))

const app =express();

app.use(express.json())


app.post('/auth/register', registerValidator, async(req,res)=>{
    const errors =validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array())
    }
    const password=req.body.password;
    const solt=await bcrypt.genSalt(10)
    const passwordHash=await bcrypt.hash(password,solt)

    const doc=new UserModel({
        email:req.body.email,
        fullName:req.body.fullName,
        passwordHash,
    })

    const user=await doc.save();

    res.json(user)

});

app.listen(2000, (err)=>{
    if(err){
        return console.log(err)
    }
    console.log("server ok")
});