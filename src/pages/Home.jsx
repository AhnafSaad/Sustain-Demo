
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { getFeaturedProducts } from '@/data/products';
import { useToast } from '@/components/ui/use-toast';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Home = () => {
  const { addToCart } = useCart();
  const featuredProducts = getFeaturedProducts();
  const { toast } = useToast();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: 'Added to cart! 🛒',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleFeatureClick = () => {
    toast({
      title: `🚧 ${feature} `,
    });
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection onFeatureClick={handleFeatureClick} />
      <FeaturedProductsSection products={featuredProducts} onAddToCart={handleAddToCart} />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;
