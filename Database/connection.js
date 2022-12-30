const mongoose=require('mongoose');

//database connection
mongoose.connect(process.env.MONGO_URL).then(console.log("MongoDB Connected Successfully")).catch((err)=>{console.log(err)})


exports.module=mongoose;