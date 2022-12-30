const mongoose=require('mongoose');

const transSchema=new mongoose.Schema({
    amount:{
        type:String,
    },
    desc:{
        type:String,
    },
    date:{
        type:String,
    },
    user_id:{
        type:mongoose.Types.ObjectId
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

module.exports=mongoose.model('transactions',transSchema);