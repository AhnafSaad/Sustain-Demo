
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart } from 'lucide-react';

const FeaturesSection = ({ onFeatureClick }) => {
  const features = [
    {
      icon: Leaf,
      title: '100% Eco-Friendly',
      description: 'All our products are made from sustainable, biodegradable, or recycled materials.',
      color: 'text-green-600'
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'We design for durability and offer recycling programs for end-of-life products.',
      color: 'text-emerald-600'
    },
    {
      icon: Heart,
      title: 'Planet Positive',
      description: 'Every purchase contributes to environmental restoration and conservation projects.',
      color: 'text-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Sustain Sports?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing high-performance sports equipment that
            doesn't compromise on sustainability.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center space-y-4 p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 leaf-shadow cursor-pointer"
              onClick={() => onFeatureClick(feature.title)}
            >
              <div className={`w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center ${feature.color}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
