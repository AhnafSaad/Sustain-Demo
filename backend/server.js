import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
// --- 1. ADD: Import the new donation routes file ---
import donationRoutes from './routes/donationRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// --- API Routes ---
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
// --- 2. ADD: Tell the server to use the donation routes ---
app.use('/api/donations', donationRoutes);

// --- Test Route ---
app.get('/', (req, res) => {
  res.send('Hello from the Sustain-Demo Backend!');
});

// --- Error Handlers (must be last) ---
app.use(notFound);
app.use(errorHandler);

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

