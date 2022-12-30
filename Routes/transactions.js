const Router=require('express');
const Trans=require('../Database/schema');
const TransactionController = require('../controller/TransactionController');
const passport=require('passport');
const router=Router();

router.get('/',TransactionController.getTrans);

router.post('/',TransactionController.create);

router.delete('/:id',TransactionController.destroy);

router.patch('/:id',TransactionController.update);
    

module.exports=router;