import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Filter, RefreshCcw, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const initiatives = [
  { title: 'Water-Efficient Dyeing', description: 'Utilizing advanced dyeing techniques that significantly reduce water consumption compared to traditional methods.', icon: Filter, imageAlt: 'Close-up of fabric being dyed with minimal water' },
  { title: 'Rainwater Harvesting', description: 'Implementing systems at manufacturing sites to collect and utilize rainwater for non-potable uses.', icon: Droplets, imageAlt: 'Rainwater harvesting system on a factory roof' },
  { title: 'Wastewater Treatment & Recycling', description: 'Treating wastewater to high standards and recycling it back into production processes where feasible.', icon: RefreshCcw, imageAlt: 'Modern wastewater treatment plant' },
  { title: 'Supporting Water Stewardship Projects', description: 'Partnering with organizations focused on watershed protection and providing clean water access in communities.', icon: Droplets, imageAlt: 'Community members accessing a clean water well' },
];

const WaterConservation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/sustainability">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
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
          <Droplets className="w-20 h-20 text-blue-600 mx-auto float-animation" />
          <h1 className="text-5xl font-bold text-gray-900">Water Conservation</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Water is a precious resource. We are dedicated to minimizing our water footprint in our manufacturing processes and supporting water stewardship globally.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="leaf-shadow border-blue-200">
            <CardHeader>
              <CardTitle className="text-3xl text-blue-700 text-center">Our Commitment to Water Stewardship</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Recognizing the critical importance of water, Sustain Sports is actively implementing strategies to reduce water consumption and improve water quality associated with our operations and supply chain.
              </p>
              <div className="aspect-w-16 aspect-h-9 my-6">
                <img  className="rounded-lg object-cover" alt="Clean water flowing in a natural stream" src="https://images.unsplash.com/photo-1437482078695-7cb6990299e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW4lMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
              </div>
              <p>
                Our approach focuses on efficiency, innovation, and collaboration. We work closely with our suppliers to adopt water-saving technologies and best practices. We also invest in community-based water projects to help ensure access to clean water and protect vital ecosystems.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full leaf-shadow border-blue-200 overflow-hidden">
                <div className="h-48">
                  <img  className="w-full h-full object-cover" alt={initiative.imageAlt} src={`https://images.unsplash.com/photo-1559825481-6d490970e75a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=${80 + index}`} />
                </div>
                <CardHeader className="items-center text-center pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <initiative.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{initiative.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaterConservation;