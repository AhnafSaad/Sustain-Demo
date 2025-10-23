// backend/seeder.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { categories, products as productData } from './data/products.js';
import Category from './models/categoryModel.js';
import Product from './models/productModel.js';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await Category.deleteMany();
    await Product.deleteMany();
    console.log('Old data cleared...');

    const createdCategories = await Category.insertMany(categories);
    console.log('Categories imported!');

    const categoryMap = createdCategories.reduce((acc, category) => {
      acc[category.name] = category._id;
      return acc;
    }, {});

    const sampleProducts = productData.map(product => {
      return { ...product, category: categoryMap[product.category] };
    });

    await Product.insertMany(sampleProducts);
    console.log('Products imported!');

    console.log('Data Import Success!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Category.deleteMany();
    await Product.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const run = async () => {
  await connectDB();
  if (process.argv[2] === '-d') {
    await destroyData();
  } else {
    await importData();
  }
};

run();