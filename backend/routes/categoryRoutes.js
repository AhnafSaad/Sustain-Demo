// backend/routes/categoryRoutes.js
import express from 'express';
import Category from '../models/categoryModel.js';

const router = express.Router();

// GET /api/categories
// Fetches all categories from the database
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;