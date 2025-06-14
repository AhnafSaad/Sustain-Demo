import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, ArrowLeft, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const materials = [
  { name: 'Organic Cotton', description: 'Grown without synthetic pesticides or fertilizers, reducing environmental impact and promoting soil health.', icon: Leaf, imageAlt: 'Soft organic cotton fabric' },
  { name: 'Recycled Polyester (rPET)', description: 'Made from post-consumer plastic bottles, diverting waste from landfills and oceans.', icon: Recycle, imageAlt: 'Colorful recycled plastic pellets' },
  { name: 'Bamboo Lyocell', description: 'A fast-growing, renewable resource processed in a closed-loop system, minimizing water and chemical use.', icon: Zap, imageAlt: 'Smooth bamboo fabric texture' },
  { name: 'Cork', description: 'Harvested sustainably from cork oak trees without harming the tree, offering a durable and biodegradable alternative.', icon: Leaf, imageAlt: 'Natural cork material surface' },
];

const EcoFriendlyMaterials = () => {
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
          <Leaf className="w-20 h-20 text-green-600 mx-auto float-animation" />
          <h1 className="text-5xl font-bold text-gray-900">Eco-Friendly Materials</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The foundation of our sustainable products. We meticulously select materials that are kind to the Earth and high-performing for your activities.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full leaf-shadow overflow-hidden">
                <div className="h-48">
                  <img  className="w-full h-full object-cover" alt={material.imageAlt} src={`https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=${80 + index}`} />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <material.icon className="w-8 h-8 text-green-500 mr-3" />
                    <CardTitle className="text-2xl text-gray-800">{material.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{material.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="leaf-shadow">
            <CardHeader>
              <CardTitle className="text-3xl text-green-700 text-center">Our Material Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Choosing the right materials is a critical step in our design process. We look for options that not only reduce environmental harm but also offer superior performance, durability, and comfort. Our criteria include:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><span className="font-semibold">Renewability:</span> Prioritizing resources that can be replenished naturally.</li>
                <li><span className="font-semibold">Recycled Content:</span> Incorporating post-consumer or post-industrial waste to reduce virgin material use.</li>
                <li><span className="font-semibold">Low Impact Processing:</span> Selecting materials that require less water, energy, and fewer harmful chemicals to produce.</li>
                <li><span className="font-semibold">Biodegradability & Recyclability:</span> Considering the end-of-life of our products from the outset.</li>
                <li><span className="font-semibold">Ethical Sourcing:</span> Ensuring materials are sourced responsibly, respecting ecosystems and communities.</li>
              </ul>
              <p>
                We are continuously researching and investing in innovative new materials that push the boundaries of sustainability and performance in sports apparel and equipment.
              </p>
            </CardContent>
          </Card>
        </motion.section>

      </div>
    </div>
  );
};

export default EcoFriendlyMaterials;