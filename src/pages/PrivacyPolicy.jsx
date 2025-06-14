
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    { title: '1. Information We Collect', content: 'We collect information you provide directly to us, such as when you create an account, place an order, or contact customer support. This may include your name, email address, postal address, phone number, and payment information.' },
    { title: '2. How We Use Your Information', content: 'We use the information we collect to process your transactions, manage your account, communicate with you, and personalize your experience on our website. We may also use it for marketing purposes, with your consent.' },
    { title: '3. Information Sharing', content: 'We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.' },
    { title: '4. Data Security', content: 'We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.' },
    { title: '5. Your Rights', content: 'You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information. To exercise these rights, please contact us.' },
    { title: '6. Changes to This Policy', content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. We encourage you to review this privacy policy periodically for any changes.' },
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
          <ShieldCheck className="w-16 h-16 text-green-600 mx-auto" />
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="prose prose-lg max-w-none prose-h2:text-green-700 prose-a:text-green-600 hover:prose-a:text-green-700"
        >
          <p>
            Sustain Sports ("us", "we", or "our") operates the Sustain Sports website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
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
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@sustainsports.com">privacy@sustainsports.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
