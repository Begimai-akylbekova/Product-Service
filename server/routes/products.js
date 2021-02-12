import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.patch('/:id', updateProduct);//by ID
router.delete('/:id', deleteProduct);

export default router; 