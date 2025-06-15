
import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, RefreshCw, Settings, ArrowLeft, PackageOpen, Cog, Repeat, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const principles = [
  { 
    title: 'Design for Durability & Modularity', 
    description: 'Creating robust products with easily replaceable parts to extend their functional life and reduce waste.', 
    icon: Cog, 
    imageAlt: 'Close-up of a well-designed, durable sports shoe highlighting its construction' 
  },
  { 
    title: 'Advanced Repair Programs', 
    description: 'Offering comprehensive repair services and DIY kits to empower customers to keep their gear in top condition.', 
    icon: Settings, 
    imageAlt: 'Technician skillfully repairing a piece of sports equipment' 
  },
  { 
    title: 'Innovative Take-Back & Renewal', 
    description: 'Implementing efficient systems to collect used products for refurbishment, component harvesting, or high-quality recycling.', 
    icon: Repeat, 
    imageAlt: 'Flowchart showing a product take-back and renewal process' 
  },
  { 
    title: 'Maximized Recycled Content', 
    description: 'Pioneering the use of high-percentage recycled materials without compromising performance and ensuring future recyclability.', 
    icon: CheckCircle, 
    imageAlt: 'Textiles made from recycled plastic bottles being woven' 
  },
];

const CircularEconomySummary = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/sustainability">
            <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-100">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Sustainability Hub
            </Button>
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <Recycle className="w-20 h-20 text-green-600 mx-auto float-animation" />
          <h1 className="text-5xl font-bold text-gray-900">Circular Economy Initiatives</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing the product lifecycle by moving beyond the traditional "take-make-dispose" model. Our goal: a closed-loop system where resources are treasured and waste becomes a new beginning.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="leaf-shadow border-green-200">
            <CardHeader>
              <CardTitle className="text-3xl text-green-800 text-center">Our Vision for Circularity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                A circular economy is about keeping products, components, and materials at their highest utility and value, always. For Sustain Sports, this means a radical rethink of how we design, manufacture, deliver, and manage our products post-use. It's about turning waste streams into value streams.
              </p>
              <div className="aspect-w-16 aspect-h-9 my-6">
                <img loading="lazy" className="rounded-lg object-cover shadow-lg" alt="Vibrant infographic illustrating a holistic circular economy model with interconnected loops" src="https://images.unsplash.com/photo-1633989467830-50df001098a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=70" />
              </div>
              <p>
                Our core strategies are built on: designing for longevity and disassembly, enabling easy repair, championing reuse, and ultimately ensuring our products can be effectively regenerated. We are actively piloting innovative business models such as rental platforms and product-as-a-service subscriptions to amplify circularity and create more value for our customers and the planet.
              </p>
              <div className="text-center mt-6">
                <Link to="/sustainability/circular-economy">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Explore Full Circular Economy Strategy <PackageOpen className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">Key Pillars of Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full leaf-shadow border-green-200 overflow-hidden">
                <div className="h-48 bg-green-50">
                  <img loading="lazy" className="w-full h-full object-cover" alt={principle.imageAlt} src={`https://images.unsplash.com/photo-1587502537815-0c80435e8e8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=${75+index}`} />
                </div>
                <CardHeader className="items-center text-center pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-3 mx-auto shadow-md">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center py-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Close the Loop?</h3>
          <p className="text-lg text-green-50 max-w-xl mx-auto mb-6">
            Our Circular Economy efforts are an ongoing journey. Discover more about our detailed strategies and how you can participate.
          </p>
          <Link to="/sustainability/circular-economy">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-green-50">
              Deep Dive into Circularity <RefreshCw className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.section>

      </div>
    </div>
  );
};

export default CircularEconomySummary;
