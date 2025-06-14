import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Wind, Zap, ArrowLeft, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const energySources = [
  { name: 'Solar Power', description: 'Installing solar panels on our facilities and partnering with suppliers who utilize solar energy.', icon: Sun, imageAlt: 'Solar panels on a factory roof under a blue sky' },
  { name: 'Wind Energy', description: 'Sourcing electricity from wind farms and supporting the development of wind power projects.', icon: Wind, imageAlt: 'Wind turbines on a grassy hill' },
  { name: 'Energy Efficiency', description: 'Implementing measures to reduce overall energy consumption in our operations and supply chain.', icon: Zap, imageAlt: 'Energy efficient light bulbs and smart thermostat' },
  { name: 'Advocacy & Partnerships', description: 'Collaborating with industry groups and policymakers to promote the transition to renewable energy.', icon: Users, imageAlt: 'Diverse group of people in a meeting discussing renewable energy' },
];

const RenewableEnergy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/sustainability">
            <Button variant="outline" className="text-amber-600 border-amber-600 hover:bg-amber-50">
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
          <Sun className="w-20 h-20 text-amber-500 mx-auto float-animation" />
          <h1 className="text-5xl font-bold text-gray-900">Renewable Energy</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Powering our operations with clean energy is crucial for a sustainable future. We are committed to increasing our use of renewable sources and improving energy efficiency.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="leaf-shadow border-amber-200">
            <CardHeader>
              <CardTitle className="text-3xl text-amber-700 text-center">Our Clean Energy Transition</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sustain Sports is actively working to transition towards 100% renewable energy for our owned and operated facilities and to encourage our supply chain partners to do the same. This is a key part of our strategy to reduce greenhouse gas emissions.
              </p>
              <div className="aspect-w-16 aspect-h-9 my-6">
                <img  className="rounded-lg object-cover" alt="Solar panels with a wind turbine in the background" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVuZXdhYmxlJTIwZW5lcmd5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" />
              </div>
              <p>
                Our efforts include direct investment in on-site renewable generation, procurement of renewable energy certificates (RECs), and engaging with suppliers to support their transition to cleaner energy sources. We believe that a collective shift to renewable energy is essential for mitigating climate change.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {energySources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full leaf-shadow border-amber-200 overflow-hidden">
                 <div className="h-48">
                  <img  className="w-full h-full object-cover" alt={source.imageAlt} src={`https://images.unsplash.com/photo-1497435334329-7521454569c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=${80 + index}`} />
                </div>
                <CardHeader className="items-center text-center pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <source.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{source.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{source.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenewableEnergy;
