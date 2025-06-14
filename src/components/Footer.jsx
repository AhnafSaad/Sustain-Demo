import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Footer = memo(() => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast({
        title: "Thank you for subscribing! 📧",
        description: "You're now in the green loop."
      });
      setEmail('');
    } else {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address."
      });
    }
  };

  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 ${platform} integration isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  return (
    <footer className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
              >
                <Leaf className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold">Sustain Sports</span>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Leading the way in eco-friendly sports equipment. Play green, stay clean, and make a positive impact on our planet.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSocialClick('Facebook')}
                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSocialClick('Twitter')}
                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSocialClick('Instagram')}
                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          <nav className="space-y-4" aria-labelledby="footer-quick-links">
            <span id="footer-quick-links" className="text-lg font-semibold">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-green-100 hover:text-white transition-colors">Home</Link>
              <Link to="/products" className="block text-green-100 hover:text-white transition-colors">Products</Link>
              <Link to="/sustainability" className="flex items-center text-green-100 hover:text-white transition-colors"><Zap className="w-4 h-4 mr-1 text-green-400" /> Sustainability</Link>
              <Link to="/about" className="block text-green-100 hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="block text-green-100 hover:text-white transition-colors">Contact</Link>
              <Link to="/privacy-policy" className="block text-green-100 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </nav>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Contact Info</span>
            <address className="space-y-3 not-italic">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-green-100 text-sm">123 Eco Street, Green City, GC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-green-100 text-sm hover:text-white transition-colors">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="mailto:hello@sustainsports.com" className="text-green-100 text-sm hover:text-white transition-colors">hello@sustainsports.com</a>
              </div>
            </address>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Stay Updated</span>
            <p className="text-green-100 text-sm">
              Subscribe to our newsletter for eco-friendly tips and product updates!
            </p>
            <form onSubmit={handleNewsletterSignup} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-green-800 border-green-700 text-white placeholder:text-green-300 focus:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Newsletter email input"
              />
              <Button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-100 text-sm">
              © {new Date().getFullYear()} Sustain Sports. All rights reserved. Made with 💚 for the planet.
            </p>
            <nav className="flex space-x-6" aria-label="Legal links">
              <Link to="/terms-of-service" className="text-green-100 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/privacy-policy" className="text-green-100 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/cookie-policy" className="text-green-100 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;