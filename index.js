import express from 'express'
import mongoose from 'mongoose';
import * as UserControllers from './controllers/UserControllers.js'
import {registerValidator} from './validation.js'
import checkAuth from './utils/checkAuth.js'
import User from './models/User.js';

mongoose.connect(
    'mongodb+srv://auth:18102000@cluster0.g2sluk8.mongodb.net/address?retryWrites=true&w=majority'
).then(()=>{
    console.log("DB ok")
}).catch((err)=>console.log("DB ERR", err))

const app =express();

app.use(express.json())

app.post('/auth/login', UserControllers.login)
app.post('/auth/register', registerValidator, UserControllers.register)
app.get('/auth/me', checkAuth, UserControllers.getMe)
app.listen(2000, (err)=>{
    if(err){
        return console.log(err)
    }
    console.log("server ok")
});