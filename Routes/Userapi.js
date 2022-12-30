const Router=require('express');
const Trans=require('../Database/schema');
const passport=require('passport');

const router=Router();

router.get('/',passport.authenticate('jwt', { session: false }),(request,response)=>{
    response.status(200).json(request.user);
    console.log(request.user)
});

module.exports=router