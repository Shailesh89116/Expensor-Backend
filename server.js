const { urlencoded,json, response } = require('express');
const express=require('express');
require('dotenv').config({path:"./config.env"});
const cors=require('cors');
const bodyparser=require('body-parser');
require('./Database/connection')
const Trans=require('./Database/schema');
const passport=require('passport');
const passportConfig=require('./config/passport'); 
const routes=require('./Routes/Routes') 


const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(json());
app.use(urlencoded());
app.use(passport.initialize());
passportConfig(passport);

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Port running on PORT-http://localhost:${PORT}`)
});

app.get('/',(request,response)=>{
    response.send("Home Page");
});

app.use('/',routes);




