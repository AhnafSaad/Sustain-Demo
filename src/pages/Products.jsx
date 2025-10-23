import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Search, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios'; // <-- 1. ADDED: axios for API calls

// --- 2. REMOVED: Static data import ---
// import { products, categories } from '@/data/products';

const Products = () => {
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  // --- 3. ADDED: State for API data, loading, and errors ---
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Client-side filter states remain the same
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 200]);

  // --- 4. ADDED: useEffect to fetch all data from the backend API ---
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Fetch both products and categories at the same time
        const [productsResponse, categoriesResponse] = await Promise.all([
          axios.get('http://localhost:5001/api/products'),
          axios.get('http://localhost:5001/api/categories')
        ]);
        setAllProducts(productsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (err) {
        setError('Failed to load data. Please check your connection.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []); // Empty array ensures this runs only once on mount

  useEffect(() => {
    setSearchTerm(searchParams.get('search') || '');
    setSelectedCategory(searchParams.get('category') || 'all');
  }, [searchParams]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "Added to cart! 🛒",
      description: `${product.name} has been added to your cart.`
    });
  };

  // --- 5. UPDATED: useMemo now filters the data from our state (`allProducts`) ---
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      // The API now gives us a category object, so we check its _id
      const matchesCategory = selectedCategory === 'all' || product.category._id === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sorting logic remains the same
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'name': default: return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, priceRange, allProducts]);

  // --- 6. ADDED: Loading and Error display ---
  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  // The rest of your JSX rendering logic remains largely the same
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... Header section is unchanged ... */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Eco-Friendly Sports Equipment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete collection of sustainable sports gear designed for performance and planet protection.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            {/* Search Input is unchanged */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* --- 7. UPDATED: Category dropdown now uses API data --- */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Sorting dropdown is unchanged */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* Price Range is unchanged */}
             <div className="space-y-2">
               <label className="text-sm text-gray-600">Price: ${priceRange[0]} - ${priceRange[1]}</label>
               <input
                 type="range"
                 min="0"
                 max="200"
                 value={priceRange[1]}
                 onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
               />
             </div>
            
            {/* View Mode buttons are unchanged */}
            <div className="flex space-x-2">
               <Button
                 variant={viewMode === 'grid' ? 'default' : 'outline'}
                 size="icon"
                 onClick={() => setViewMode('grid')}
                 className="flex-1"
               >
                 <Grid className="w-4 h-4" />
               </Button>
               <Button
                 variant={viewMode === 'list' ? 'default' : 'outline'}
                 size="icon"
                 onClick={() => setViewMode('list')}
                 className="flex-1"
               >
                 <List className="w-4 h-4" />
               </Button>
             </div>
          </div>
        </motion.div>

        {/* --- 8. UPDATED: Product count now uses `allProducts.length` --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </motion.div>

        <motion.div
          layout
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
              : 'space-y-6'
          }
        >
          {filteredProducts.map((product) => (
            // --- 9. UPDATED: Keys and links now use `product._id` from the database ---
            <motion.div
              layout
              key={product._id} // Use database ID for the key
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {viewMode === 'grid' ? (
                // Your Grid View Card (unchanged, but now using API data)
                <Card className="overflow-hidden leaf-shadow hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* ... card content ... */}
                   <div className="relative">
                       <img
                         className="w-full h-48 object-cover"
                         alt={product.name}
                        src="https://images.unsplash.com/photo-1581156404134-9bf1c6ab0b3d" />
                       <Badge className="absolute top-3 left-3 bg-green-600 text-white">
                         {product.ecoTag}
                       </Badge>
                     </div>
                     <CardContent className="p-4 space-y-3 flex-1">
                       <div className="space-y-1">
                         <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                         <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                       </div>
                       <div className="flex items-center space-x-2">
                         <div className="flex items-center">
                           {[...Array(5)].map((_, i) => (
                             <Star
                               key={i}
                               className={`w-4 h-4 ${
                                 i < Math.floor(product.rating)
                                   ? 'text-yellow-400 fill-current'
                                   : 'text-gray-300'
                               }`}
                             />
                           ))}
                         </div>
                         <span className="text-sm text-gray-600">({product.reviews})</span>
                       </div>
                       <div className="flex items-center space-x-2">
                         <span className="text-lg font-bold text-green-600">${product.price}</span>
                         {product.originalPrice > product.price && (
                           <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                         )}
                       </div>
                     </CardContent>
                     <CardFooter className="p-4 pt-0 mt-auto">
                       <div className="w-full space-y-2">
                           <Button
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                          <Link to={`/products/${product._id}`} className="w-full block">
                            <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                              View Details
                            </Button>
                          </Link>
                        </div>
                     </CardFooter>
                </Card>
              ) : (
                // Your List View Card (unchanged, but now using API data)
                <Card className="overflow-hidden leaf-shadow hover:shadow-lg transition-all duration-300">
                   {/* ... card content ... */}
                </Card>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* ... "No products found" section is unchanged ... */}

      </div>
    </div>
  );
};

export default Products;