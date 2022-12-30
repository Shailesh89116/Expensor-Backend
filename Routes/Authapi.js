const Router=require('express');
const router=Router();
const UserController=require('../controller/UserController')

router.post("/register",UserController.register);


  router.post("/login",UserController.login);


module.exports=router;