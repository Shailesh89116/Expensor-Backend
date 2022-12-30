require('dotenv').config({path:"./config.env"});
const Trans=require('../Database/schema');

module.exports.getTrans=async (request,response)=>{
    const data=await Trans.find({user_id:request.user}).sort({createdAt: -1});
    response.json({data:data});
}

module.exports.create=(request,response)=>{
    const {amount,desc,date}=request.body;
    const newTrans=Trans.create({amount,desc,user_id:request.user._id,date});
    response.json({message:"Transaction Added to your database"});
}

module.exports.destroy=async(request,response)=>{
    await Trans.deleteOne({_id:request.params.id});
    response.status(200).send({message:"Deleted Successfully"})
}

module.exports.update=async(request,response)=>{
    const {amount,desc,date}=request.body;
    await Trans.updateOne({_id:request.params.id},{$set:request.body});
    response.status(200).send({message:"UpdTE Successfully"})
}


