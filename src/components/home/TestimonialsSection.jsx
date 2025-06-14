
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Yoga Instructor',
    content: 'The bamboo yoga mat is incredible! It provides excellent grip and I love knowing my practice is eco-friendly.',
    rating: 5,
    imageAlt: 'Professional yoga instructor in peaceful studio setting demonstrating a pose',
  },
  {
    name: 'Mike Chen',
    role: 'Soccer Coach',
    content: 'These recycled soccer balls perform just as well as traditional ones. My team loves playing with purpose!',
    rating: 5,
    imageAlt: 'Soccer coach smiling with his team on a green field during practice',
  },
  {
    name: 'Emma Davis',
    role: 'Fitness Enthusiast',
    content: "Amazing quality and knowing I'm helping the environment makes every workout feel even better.",
    rating: 5,
    imageAlt: 'Fitness enthusiast energetically working out with eco-friendly equipment in a bright gym',
  }
];

const TestimonialsSection = () => {
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of athletes making a positive impact
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl leaf-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    alt={testimonial.imageAlt}
                   src="https://images.unsplash.com/photo-1694157263770-1a844cb0f6e0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
