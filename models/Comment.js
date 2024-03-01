import mongoose from "mongoose";

//id content data user_id

const CommentSchema=new mongoose.Schema({
    content:{
        type:String,
        require:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }, 

},
{
    timeseries:true
}
)

export default mongoose('Comment', CommentSchema)