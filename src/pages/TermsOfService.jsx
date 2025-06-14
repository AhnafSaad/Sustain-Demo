
import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    { title: '1. Agreement to Terms', content: 'By using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.' },
    { title: '2. User Accounts', content: 'When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.' },
    { title: '3. Prohibited Activities', content: 'You agree not to use the Service for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Service in any way that could damage the Service, the business of Sustain Sports, or any person.' },
    { title: '4. Intellectual Property', content: 'The Service and its original content, features, and functionality are and will remain the exclusive property of Sustain Sports and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.' },
    { title: '5. Limitation of Liability', content: 'In no event shall Sustain Sports, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.' },
    { title: '6. Governing Law', content: 'These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is established, without regard to its conflict of law provisions.' },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <FileText className="w-16 h-16 text-green-600 mx-auto" />
          <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="prose prose-lg max-w-none prose-h2:text-green-700 prose-a:text-green-600 hover:prose-a:text-green-700"
        >
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Sustain Sports website (the "Service") operated by Sustain Sports ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
          </p>

          {sections.map((section, index) => (
            <div key={index} className="mt-8">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-2 text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@sustainsports.com">legal@sustainsports.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
