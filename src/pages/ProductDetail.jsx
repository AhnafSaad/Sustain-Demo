
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, Share2, ArrowLeft, Check, Truck, Shield, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { getProductById } from '@/data/products';
import { toast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <Link to="/products">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Added to cart! 🛒",
      description: `${quantity} x ${product.name} added to your cart.`
    });
  };

  const handleWishlist = () => {
    toast({
      title: "🚧 Wishlist feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleShare = () => {
    toast({
      title: "🚧 Share feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleReview = () => {
    toast({
      title: "🚧 Review feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
        >
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-green-600">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/products">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="relative">
              <img  
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                alt={product.name}
               src="https://images.unsplash.com/photo-1683724709712-b68cbb3f0069" />
              <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                {product.ecoTag}
              </Badge>
              {product.originalPrice > product.price && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                  Sale
                </Badge>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-600' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img  
                    className="w-full h-20 object-cover"
                    alt={`${product.name} view ${index + 1}`}
                   src="https://images.unsplash.com/photo-1589595427524-2ddaf2d43fc9" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="border-green-600 text-green-600">
                  {product.category}
                </Badge>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleWishlist}
                    className="border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
                <button 
                  onClick={handleReview}
                  className="text-green-600 hover:underline text-sm"
                >
                  Write a review
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-green-600">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice > product.price && (
                  <Badge className="bg-red-500 text-white">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                )}
              </div>

              <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Key Features:</h3>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 py-3"
                  size="lg"
                  onClick={() => toast({
                    title: "🚧 Buy Now feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                >
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <Truck className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <Shield className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">30-Day Returns</p>
                  <p className="text-sm text-gray-600">Easy returns policy</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <Recycle className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Eco-Friendly</p>
                  <p className="text-sm text-gray-600">Sustainable materials</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
                <Button 
                  onClick={handleReview}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Write a Review
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Alex Johnson',
                    rating: 5,
                    date: '2 weeks ago',
                    comment: 'Absolutely love this product! The quality is outstanding and I feel good knowing it\'s eco-friendly.',
                    verified: true
                  },
                  {
                    name: 'Maria Garcia',
                    rating: 4,
                    date: '1 month ago',
                    comment: 'Great product, exactly as described. Fast shipping and excellent customer service.',
                    verified: true
                  },
                  {
                    name: 'David Chen',
                    rating: 5,
                    date: '2 months ago',
                    comment: 'Perfect for my needs. The sustainable materials don\'t compromise on performance at all.',
                    verified: true
                  }
                ].map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      {review.verified && (
                        <Badge variant="outline" className="text-xs">
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="font-medium">{review.name}</span>
                      <span>{review.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
