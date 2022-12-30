const User=require('../Database/user');
require('dotenv').config({path:"./config.env"});
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const categories = [
  { label: "Travel", icon: "user" },
  { label: "Shopping", icon: "user" },
  { label: "Investment", icon: "user" },
  { label: "Bills", icon: "user" },
];

module.exports.register=async(req,res)=>{
    const { email, password, firstName, lastName } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(406).json({ message: "User already exists." });
      return;
    }
  
    // hash the password
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const user = await User({
      email,
      password:hashedPassword,
      firstName,
      lastName,
      categories
    });
  
    await user.save();
    res.status(201).json({ message: "user is created" });
  }


module.exports.login=async(req,res)=>{
    const {email,password}=req.body;
    
    const user=await User.findOne({email});
    if(!user){
        res.status(406).json({message:"Credential not found"});
        return;
    }

    const match=await bcrypt.compare(password,user.password);
    if(!match){
        res.status(406).json({message:"Credential not found"});
        return;
    }
    // res.status(200).json({message:"login"});
//creating JWT
const payload={
    userName:email,
    id:user._id
};
const token=jwt.sign(payload,process.env.JWT_KEY);
res.status(200).json({message:"login",token,user});
  }