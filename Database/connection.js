const mongoose=require('mongoose');

//database connection
mongoose.connect('mongodb+srv://Shailesh89:7977078364@cluster0.ibnfm.mongodb.net/Expensor?retryWrites=true&w=majority').then(console.log("MongoDB Connected Successfully")).catch((err)=>{console.log(err)})


exports.module=mongoose;