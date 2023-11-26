const ProductsController=require('../controller/ProductsController')
const express=require('express');
const router=express.Router();

//C=Create

router.post('/CreateStudent',ProductsController.CreateStudent)


//R=Read
router.get('/ReadStudent',ProductsController.ReadStudent)

router.post('/UpdateStudent/:id',ProductsController.UpdateStudent)

//D=Delete
router.get('/DeleteStudent/:id',ProductsController.DeleteStudent)
//API Routing endpoint
module.exports=router;