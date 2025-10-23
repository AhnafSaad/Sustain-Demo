import express from 'express';
import asyncHandler from 'express-async-handler';
import { protect } from '../middleware/authMiddleware.js';
import Donation from '../models/donationModel.js';

const router = express.Router();

// @desc    Create a new donation request
// @route   POST /api/donations
// @access  Private
router.post('/', protect, asyncHandler(async (req, res) => {
  const { itemName, itemDescription } = req.body;

  const donation = new Donation({
    user: req.user._id,
    itemName,
    itemDescription,
  });

  const createdDonation = await donation.save();
  res.status(201).json(createdDonation);
}));

// @desc    Get logged in user's donations
// @route   GET /api/donations/mydonations
// @access  Private
router.get('/mydonations', protect, asyncHandler(async (req, res) => {
    const donations = await Donation.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(donations);
}));

export default router;
