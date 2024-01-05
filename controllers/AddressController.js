import Address from "../models/Address.js"
import { validationResult } from "express-validator"

export const create=async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try{
        const doc=new Address({
            addressPlace:req.body.addressPlace,
            address:req.body.address,
            user:req.userId,

        })
        const address=await doc.save()

        res.json(address)
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message:"не вдалось створити нову адресу"
        })
    }
}

export const remove=async(req,res)=>{}

export const getAll=async(req, res)=>{}

export const getOne=async(req,res)=>{}

export const update=async(req,res)=>{}