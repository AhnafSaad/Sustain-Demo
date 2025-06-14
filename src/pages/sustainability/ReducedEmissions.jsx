import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Factory, Truck, ArrowLeft, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const strategies = [
  { title: 'Renewable Energy in Manufacturing', description: 'Transitioning our partner factories to renewable energy sources like solar and wind.', icon: Factory, imageAlt: 'Factory with solar panels on roof' },
  { title: 'Supply Chain Optimization', description: 'Streamlining logistics to reduce transportation distances and improve efficiency.', icon: Truck, imageAlt: 'Eco-friendly electric delivery truck' },
  { title: 'Energy-Efficient Operations', description: 'Implementing energy-saving measures in our offices, warehouses, and retail spaces.', icon: Wind, imageAlt: 'Modern office with large windows and plants' },
  { title: 'Carbon Offsetting Projects', description: 'Investing in verified carbon offset projects for emissions we cannot yet eliminate.', icon: Leaf, imageAlt: 'Lush forest representing carbon offsetting' },
];

const ReducedEmissions = () => {
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
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
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
          <Wind className="w-20 h-20 text-green-600 mx-auto float-animation" />
          <h1 className="text-5xl font-bold text-gray-900">Reduced Emissions</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Tackling climate change by actively working to minimize our carbon footprint across our entire value chain, from raw materials to your doorstep.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="leaf-shadow">
            <CardHeader>
              <CardTitle className="text-3xl text-green-700 text-center">Our Carbon Reduction Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Reducing greenhouse gas emissions is a core pillar of our sustainability strategy. We are committed to aligning our efforts with climate science and are taking a multi-faceted approach:
              </p>
              <div className="aspect-w-16 aspect-h-9 my-6">
                <img  className="rounded-lg object-cover" alt="Wind turbines against a sunset sky" src="https://images.unsplash.com/photo-1508349049040-588965854013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZCUyMHR1cmJpbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" />
              </div>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><span className="font-semibold">Measuring Our Footprint:</span> Regularly calculating our Scope 1, 2, and 3 emissions to identify hotspots and track progress.</li>
                <li><span className="font-semibold">Setting Ambitious Targets:</span> Establishing science-based targets for emissions reduction.</li>
                <li><span className="font-semibold">Investing in Innovation:</span> Supporting research into low-carbon materials and manufacturing processes.</li>
                <li><span className="font-semibold">Collaboration:</span> Working with suppliers, partners, and industry peers to drive collective action.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full leaf-shadow overflow-hidden">
                 <div className="h-48">
                  <img  className="w-full h-full object-cover" alt={strategy.imageAlt} src={`https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=${80 + index}`} />
                </div>
                <CardHeader className="items-center text-center pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-3 mx-auto">
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

export default ReducedEmissions;