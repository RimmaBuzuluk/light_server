import mongoose from "mongoose";

const CitySchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    population:{
        type:Number,
        require:true,
    },   
    place:{
        type:String,
        require:true,
    },
    wikipedia:{
        type:String,
        require:true,
    }
})


export default mongoose.model('City', CitySchema)