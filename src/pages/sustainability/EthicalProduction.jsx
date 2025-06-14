import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const commitments = [
  { title: 'Fair Wages & Working Hours', description: 'Ensuring all workers in our supply chain receive fair compensation and work reasonable hours.', icon: Heart, imageAlt: 'Smiling factory worker holding a product' },
  { title: 'Safe & Healthy Workplaces', description: 'Maintaining high standards for occupational health and safety in all partner factories.', icon: Shield, imageAlt: 'Clean and well-lit factory interior' },
  { title: 'No Child or Forced Labor', description: 'Strictly prohibiting and actively preventing any form of child labor or forced labor.', icon: Users, imageAlt: 'Symbolic image of hands breaking chains' },
  { title: 'Empowering Workers', description: 'Supporting programs that provide workers with skills training, education, and representation.', icon: Users, imageAlt: 'Group of workers participating in a training session' },
];

const EthicalProduction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/sustainability">
            <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
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
          <Heart className="w-20 h-20 text-purple-600 mx-auto float-animation" />
          <h1 className="text-5xl font-bold text-gray-900">Ethical Production</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We believe that sustainable products must be made by people who are treated with dignity and respect. Our commitment to ethical production is unwavering.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="leaf-shadow border-purple-200">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-700 text-center">Our Human Rights Commitment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Sustain Sports, ethical production means ensuring that every person involved in making our products works in safe conditions, is treated fairly, and earns a living wage. We hold ourselves and our suppliers to high standards.
              </p>
              <div className="aspect-w-16 aspect-h-9 my-6">
                <img  className="rounded-lg object-cover" alt="Diverse group of factory workers collaborating" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdG9yeSUyMHdvcmtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" />
              </div>
              <p>
                We conduct regular audits of our supplier factories, provide training on labor rights, and collaborate with third-party organizations to verify compliance and drive continuous improvement. We are committed to transparency and actively work to address any issues identified in our supply chain.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full leaf-shadow border-purple-200 overflow-hidden">
                 <div className="h-48">
                  <img  className="w-full h-full object-cover" alt={commitment.imageAlt} src={`https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=${80 + index}`} />
                </div>
                <CardHeader className="items-center text-center pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <commitment.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{commitment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{commitment.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EthicalProduction;