const Router=require('express');
const transactionRouter=require('../Routes/transactions');
const auth=require('../Routes/Authapi')
const Userapi=require('../Routes/Userapi');
const passport=require('passport');

const authPassport=passport.authenticate('jwt', { session: false });

const router=Router();
router.use('/transactions',authPassport,transactionRouter);
router.use('/auth',auth)
router.use('/user',Userapi)

module.exports=router