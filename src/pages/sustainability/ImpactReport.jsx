
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, Users, BarChart3, CheckCircle, ArrowLeft, Recycle, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ImpactReport = () => {
  const stats = [
    { value: '30%', label: 'Reduction in Carbon Footprint (YoY)', icon: TrendingUp },
    { value: '15,000+', label: 'Plastic Bottles Recycled into Products', icon: Recycle },
    { value: '5000 MWh', label: 'Renewable Energy Used in Production', icon: Sun },
    { value: '95%', label: 'Ethically Sourced Materials', icon: CheckCircle },
  ];

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
          <FileText className="w-20 h-20 text-green-600 mx-auto float-animation" />
          <h1 className="text-5xl font-bold text-gray-900">Our Impact Report</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transparency is key to our mission. Explore our progress, challenges, and future goals as we strive for a more sustainable sporting world.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center leaf-shadow h-full">
                  <CardHeader>
                    <stat.icon className="w-12 h-12 text-green-500 mx-auto mb-2" />
                    <CardTitle className="text-3xl font-bold text-green-600">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="leaf-shadow overflow-hidden">
            <div className="p-8 md:p-12 space-y-6">
              <h2 className="text-3xl font-semibold text-green-700">Detailed Findings & Future Goals</h2>
              <p className="text-gray-600 leading-relaxed">
                Our {new Date().getFullYear() -1} report highlights significant strides in reducing our environmental impact. We've successfully integrated more recycled content into our product lines, decreased water usage in key manufacturing processes, and expanded our partnerships with fair-trade certified suppliers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                However, challenges remain, particularly in achieving full circularity for all product categories and further reducing Scope 3 emissions within our complex global supply chain. Our goals for the upcoming year include launching a pilot take-back program for select products, increasing our investment in innovative material research, and achieving a 10% further reduction in packaging waste.
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <img  className="rounded-lg object-cover" alt="Infographic showing sustainability progress charts" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" />
              </div>
              <p className="text-gray-600 leading-relaxed">
                We are committed to continuous improvement and transparent reporting. Your feedback is invaluable as we continue this journey.
              </p>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default ImpactReport;
