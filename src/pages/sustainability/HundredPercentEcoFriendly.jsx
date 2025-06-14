
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const commitments = [
  { title: 'Sustainable Sourcing', description: 'Only using renewable, recycled, or biodegradable materials.', icon: Leaf, imageAlt: 'Lush green forest representing sustainable sourcing' },
  { title: 'Non-Toxic Processes', description: 'Ensuring our manufacturing processes are free from harmful chemicals.', icon: ShieldCheck, imageAlt: 'Scientist in a lab coat with a green checkmark, symbolizing non-toxic processes' },
  { title: 'Minimal Waste Design', description: 'Designing products and packaging to minimize waste and maximize recyclability.', icon: CheckCircle, imageAlt: 'Neatly arranged recyclable materials and minimal packaging' },
];

const HundredPercentEcoFriendly = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/sustainability">
            <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-100">
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
          <h1 className="text-5xl font-bold text-gray-900">100% Eco-Friendly Commitment</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Sustain Sports, "Eco-Friendly" isn't just a buzzword—it's our core principle. We are dedicated to ensuring every product we create has a positive impact, from raw material to end-of-life.
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
              <CardTitle className="text-3xl text-green-800 text-center">Our Pledge to the Planet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our commitment to being 100% eco-friendly means we rigorously evaluate every aspect of our products and operations. This includes material selection, manufacturing processes, packaging, and our supply chain. We strive for transparency and continuous improvement in our journey to protect and preserve the environment.
              </p>
              <div className="aspect-w-16 aspect-h-9 my-6">
                <img  className="rounded-lg object-cover" alt="Hands holding a small plant seedling in rich soil" src="https://images.unsplash.com/photo-1452800185063-6db5e12b8e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvJTIwZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" />
              </div>
              <p>
                Being 100% eco-friendly is an ongoing journey. We partner with experts, invest in research, and listen to our community to find innovative solutions that reduce our footprint and promote a healthier planet for all.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full leaf-shadow border-green-200 overflow-hidden">
                <div className="h-48">
                   <img  className="w-full h-full object-cover" alt={commitment.imageAlt} src={`https://images.unsplash.com/photo-1509386985461-73505951721c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=${80 + index}`} />
                </div>
                <CardHeader className="items-center text-center pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-500 rounded-full flex items-center justify-center mb-3 mx-auto">
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

export default HundredPercentEcoFriendly;
