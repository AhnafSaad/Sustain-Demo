import express from 'express';
const router = express.Router();
import {
  getUsers,
  deleteUser,
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getAppStats,
  // --- 1. IMPORT the new controller functions ---
  getDonations,
  updateDonationStatus,
} from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';
import { admin } from '../middleware/adminMiddleware.js';

// All routes in this file are protected and require admin access
router.use(protect, admin);

// --- User Routes ---
// GET /api/admin/users -> getUsers controller
// DELETE /api/admin/users/:id -> deleteUser controller
router.route('/users').get(getUsers);
router.route('/users/:id').delete(deleteUser);

// --- Product Routes ---
// GET /api/admin/products -> getProducts controller
// POST /api/admin/products -> createProduct controller
router.route('/products').get(getProducts).post(createProduct);

// GET /api/admin/products/:id -> getProductById controller
// PUT /api/admin/products/:id -> updateProduct controller
// DELETE /api/admin/products/:id -> deleteProduct controller
router.route('/products/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

// --- Stats Route ---
// GET /api/admin/stats -> getAppStats controller
router.route('/stats').get(getAppStats);

// --- 2. ADD the new routes for managing donations ---
// GET /api/admin/donations -> getDonations controller
// PUT /api/admin/donations/:id -> updateDonationStatus controller
router.route('/donations').get(getDonations);
router.route('/donations/:id').put(updateDonationStatus);


export default router;

