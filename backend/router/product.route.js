import express from 'express';
const router =express.Router();
import {createProduct,deleteProduct,getProducts,UpdateProduct} from '../controller/product.controller.js'

router.post('/',createProduct)
router.put("/:id",UpdateProduct)
router.delete('/:id' ,deleteProduct)
router.get('/',getProducts)
export default router