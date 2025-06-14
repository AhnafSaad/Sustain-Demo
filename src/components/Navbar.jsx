import React, { useState, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, User, Menu, X, Leaf, Search, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { categories } from '@/data/products';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { getCartItemsCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully!",
      description: "See you next time! 🌱"
    });
    navigate('/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      if (isOpen) setIsOpen(false);
    } else {
       toast({
        variant: "destructive",
        title: "Empty Search",
        description: "Please enter a term to search for."
      });
    }
  };
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);


  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center"
            >
              <Leaf className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Sustain Sports
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600 transition-colors">Products</Link>
            <Link to="/sustainability" className="text-gray-700 hover:text-green-600 transition-colors flex items-center">
               <Zap className="w-4 h-4 mr-1 text-green-500" /> Sustainability
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                  Categories <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/products">All Categories</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {categories.map(category => (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link to={`/products?category=${category.id}`}>{category.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search eco products..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-48"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search products"
              />
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative" aria-label={`View Cart, ${getCartItemsCount()} items`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </motion.div>
            </Link>

            {user ? (
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-gray-700">Hi, {user.name}!</span>
                <Button variant="outline" size="sm" onClick={handleLogout} className="text-green-600 border-green-600 hover:bg-green-50">Logout</Button>
              </div>
            ) : (
              <Link to="/login" className="hidden md:block">
                <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}

            <button onClick={toggleMenu} className="md:hidden p-2 text-gray-700 hover:text-green-600" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-green-100"
          >
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Products</Link>
              <Link to="/sustainability" className="text-gray-700 hover:text-green-600 transition-colors flex items-center" onClick={closeMenu}>
                <Zap className="w-4 h-4 mr-1 text-green-500" /> Sustainability
              </Link>
              <span className="text-gray-500 text-sm pl-2">Categories:</span>
              {categories.map(category => (
                  <Link key={category.id} to={`/products?category=${category.id}`} className="text-gray-700 hover:text-green-600 transition-colors pl-4" onClick={closeMenu}>{category.name}</Link>
              ))}
              <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Contact</Link>
              
              <div className="pt-4 border-t border-green-100">
                <form onSubmit={handleSearchSubmit} className="relative">
                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search eco products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search products mobile"
                  />
                </form>
              </div>

               <div className="pt-4 border-t border-green-100">
                {user ? (
                   <div className="flex items-center justify-between">
                     <span className="text-sm text-gray-700">Hi, {user.name}!</span>
                     <Button variant="outline" size="sm" onClick={() => { handleLogout(); closeMenu(); }} className="text-green-600 border-green-600 hover:bg-green-50">Logout</Button>
                   </div>
                ) : (
                  <Link to="/login" className="w-full" onClick={closeMenu}>
                    <Button variant="outline" className="w-full text-green-600 border-green-600 hover:bg-green-50">
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                )}
               </div>
            </nav>
          </motion.div>
        )}
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;