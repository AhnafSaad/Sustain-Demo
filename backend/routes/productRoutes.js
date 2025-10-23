// backend/routes/productRoutes.js
import express from 'express';
import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';

const router = express.Router();

// GET /api/products
// Fetches all products from the database
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({}).populate('category'); 
    res.json(products);
  } catch (error) {
  console.error("ERROR FETCHING PRODUCTS:", error); // <-- ADD THIS LINE
  res.status(500).json({ message: 'Server Error' });
}
});

export default router;