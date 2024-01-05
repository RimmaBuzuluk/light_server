import mongoose from "mongoose";

const AddressSchema=new mongoose.Schema(
    {
        addressPlace:{
            type:String,
            require:true,
        },
        address:{
            type:String,
            require:true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }, 
        status:{
            type:Boolean,
            default:false
        }
    },
    {
        timeseries:true
    }

)


export default mongoose.model('Address',AddressSchema)