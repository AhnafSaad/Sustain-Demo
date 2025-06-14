
import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, RefreshCw, Settings, ArrowLeft, Package, PackageOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const circularStrategies = [
  { title: 'Design for Longevity & Repair', description: 'Creating durable products with modular designs that are easy to repair, extending their lifespan.', icon: Settings, imageAlt: 'Tools and parts laid out for repairing a product' },
  { title: 'Product-as-a-Service Models', description: 'Exploring rental or subscription services to increase product utilization and ensure proper end-of-life management.', icon: RefreshCw, imageAlt: 'Diagram showing a product-as-a-service cycle' },
  { title: 'Closed-Loop Recycling', description: 'Developing systems to take back used products and recycle them into new ones, minimizing waste.', icon: Recycle, imageAlt: 'Recycling bins filled with sorted materials' },
  { title: 'Upcycled Collections', description: 'Transforming waste materials or old products into new items of higher value and quality.', icon: PackageOpen, imageAlt: 'Fashionable items made from upcycled materials' },
];

const CircularEconomyDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/sustainability">
            <Button variant="outline" className="text-cyan-700 border-cyan-700 hover:bg-cyan-100">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Sustainability
            </Button>
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <Package className="w-20 h-20 text-cyan-600 mx-auto float-animation" />
          <h1 className="text-5xl font-bold text-gray-900">Deep Dive: Circular Economy</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are committed to transforming the lifecycle of our products. Our circular economy initiatives aim to eliminate waste and keep materials in use for as long as possible.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="leaf-shadow border-cyan-200">
            <CardHeader>
              <CardTitle className="text-3xl text-cyan-800 text-center">Redefining Product Lifecycles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The traditional linear model of "take-make-dispose" is unsustainable. Sustain Sports is championing a circular approach by designing products that last, facilitating repair and reuse, and ensuring materials are recovered and regenerated at the end of their service life.
              </p>
              <div className="aspect-w-16 aspect-h-9 my-6">
                <img  className="rounded-lg object-cover" alt="Infographic showing a detailed circular economy flow" src="https://images.unsplash.com/photo-1610470000000-d2e2b94a6c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpcmN1bGFyJTIwZWNvbm9teXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
              </div>
              <p>
                Our circular economy strategy involves innovation in materials science, product design, business models, and reverse logistics. We collaborate with partners across our value chain to build a system that is regenerative by design.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {circularStrategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full leaf-shadow border-cyan-200 overflow-hidden">
                <div className="h-48">
                   <img  className="w-full h-full object-cover" alt={strategy.imageAlt} src={`https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=${80 + index}`} />
                </div>
                <CardHeader className="items-center text-center pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <strategy.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{strategy.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircularEconomyDetail;
