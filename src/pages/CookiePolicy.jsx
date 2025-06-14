
import React from 'react';
import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';

const CookiePolicy = () => {
  const sections = [
    { title: '1. What Are Cookies?', content: 'Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.' },
    { title: '2. How We Use Cookies', content: 'We use cookies to understand, secure, operate, and provide our Services. For example, we use cookies to remember your choices, such as your language preferences, and to customize our Services for you.' },
    { title: '3. Types of Cookies We Use', content: 'We use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device for a set period of time or until you delete them). We use essential cookies for site functionality and analytics cookies to understand how our visitors use the website.' },
    { title: '4. Your Choices', content: 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by setting or amending your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.' },
    { title: '5. Changes to This Policy', content: 'We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes.' },
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
          <Cookie className="w-16 h-16 text-green-600 mx-auto" />
          <h1 className="text-4xl font-bold text-gray-900">Cookie Policy</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="prose prose-lg max-w-none prose-h2:text-green-700 prose-a:text-green-600 hover:prose-a:text-green-700"
        >
          <p>
            This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use, the information we collect using cookies and how that information is used, and how to control the cookie preferences.
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
              If you have any questions about this Cookie Policy, please contact us at <a href="mailto:privacy@sustainsports.com">privacy@sustainsports.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
