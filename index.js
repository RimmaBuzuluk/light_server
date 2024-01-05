import express from 'express'
import mongoose from 'mongoose';
import * as UserControllers from './controllers/UserControllers.js'
import * as AddressController from './controllers/AddressController.js'
import {addressCreateValidation, loginValidation, registerValidator} from './validation.js'
import checkAuth from './utils/checkAuth.js'
import User from './models/User.js';
import Address from './models/Address.js';
import ping from 'ping'

mongoose.connect(
    'mongodb+srv://auth:18102000@cluster0.g2sluk8.mongodb.net/address?retryWrites=true&w=majority'
).then(()=>{
    console.log("DB ok")
}).catch((err)=>console.log("DB ERR", err))

const app =express();

app.use(express.json())

/////
app.get('/checkLight', async(req,res)=>{
    // const routerAddress='192.168.1.142'
    const routerAddress='172.20.10.2'
    // const routerAddress='192.168.0.45'

    try{
        const response=await ping.promise.probe(routerAddress);
        const lightStatus=response.alive;
        console.log(response)

        await Address.findOneAndUpdate(
            {address:routerAddress},
            {$set:{status:lightStatus}},
            {new:true}
        )
        if (response.alive) {
            // Якщо роутер живий (відповідь отримана успішно)
            res.status(200).json({ light: 'Есть свет' }); // Відповідь про наявність світла
        } else {
            // Якщо роутер не відповідає (світла немає)
            res.status(200).json({ light: 'Нет света' }); // Відповідь про відсутність світла
        }
    }catch(error){
        res.status(500).json({error:'помилка при пінгуванні'})
    }
})
////

app.post('/auth/login',loginValidation, UserControllers.login)
app.post('/auth/register', registerValidator, UserControllers.register)
app.get('/auth/me', checkAuth, UserControllers.getMe)

app.post('/address',checkAuth, addressCreateValidation, AddressController.create)
app.get('/address',checkAuth, AddressController.getAll)
app.get('/address/:id', AddressController.getOne)
app.delete('/address/:id', checkAuth, AddressController.remove)
// app.patch('/address', checkAuth, AddressController.update)
app.listen(2000, (err)=>{
    if(err){
        return console.log(err)
    }
    console.log("server ok")
});