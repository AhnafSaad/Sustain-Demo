import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Recycle, Heart, MapPin, ExternalLink, ArrowLeft, Send, Edit3, Package, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const donationPartners = [
  {
    name: 'Goodwill Industries International',
    description: 'Provides job training, employment placement services, and other community-based programs by selling donated clothing and household items.',
    logoAlt: 'Goodwill Logo',
    website: 'https://www.goodwill.org/',
    imagePlaceholder: 'Organization focused on community support through donations'
  },
  {
    name: 'TerraCycle',
    description: 'Offers free recycling programs for hard-to-recycle waste streams, turning waste into new products.',
    logoAlt: 'TerraCycle Logo',
    website: 'https://www.terracycle.com/',
    imagePlaceholder: 'Innovative recycling solutions for complex waste'
  },
  {
    name: 'Soles4Souls',
    description: 'Turns unwanted shoes and clothing into opportunity by providing relief, creating jobs and empowering people to break the cycle of poverty.',
    logoAlt: 'Soles4Souls Logo',
    website: 'https://soles4souls.org/',
    imagePlaceholder: 'Shoes and clothing donation for global impact'
  },
];

const recyclingTips = [
  {
    title: 'Clean Your Gear',
    description: 'Ensure items are clean and dry before donating or sending for recycling. This helps processors.',
    icon: Recycle,
    imageAlt: 'Person cleaning sports shoes before recycling'
  },
  {
    title: 'Separate Materials (If Possible)',
    description: 'If your gear has easily separable parts (e.g., metal buckles from fabric), separate them for better recycling outcomes.',
    icon: Recycle,
    imageAlt: 'Hands separating different materials from a sports bag'
  },
  {
    title: 'Check Local Guidelines',
    description: 'Always verify local recycling capabilities. Not all facilities can handle specialized sports materials.',
    icon: MapPin,
    imageAlt: 'Person checking recycling guidelines on a local council website'
  },
];

const RecyclingPage = () => {
  const { toast } = useToast();
  const [donationItemName, setDonationItemName] = useState('');
  const [donationItemCondition, setDonationItemCondition] = useState('');
  const [donationItemDescription, setDonationItemDescription] = useState('');

  const handlePartnerWebsiteClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: `🚧 Website Link Missing`,
        description: "The website for this partner is not available at the moment.",
      });
    }
  };

  const handleDonateProductSubmit = (e) => {
    e.preventDefault();
    if (!donationItemName.trim() || !donationItemCondition || !donationItemDescription.trim()) {
      toast({
        variant: "destructive",
        title: "Incomplete Donation Form",
        description: "Please fill in all fields to submit your donation request."
      });
      return;
    }
    toast({
      title: "Donation Request Submitted! 💚",
      description: `Thank you for offering to donate: ${donationItemName}. We'll review your request.`,
    });
    setDonationItemName('');
    setDonationItemCondition('');
    setDonationItemDescription('');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/">
            <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-100">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <div className="flex justify-center items-center">
            <Recycle className="w-20 h-20 text-emerald-600 float-animation" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Recycling & Donations</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Give your gear a second life. Join us in reducing waste and supporting communities through thoughtful recycling and product donations.
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
              <CardTitle className="text-3xl text-green-800 text-center flex items-center justify-center">
                <Gift className="w-8 h-8 mr-3 text-red-500" /> Donate Your Product
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
                Have Sustain Sports gear you no longer need? Fill out the form below to initiate a donation. We'll guide you through the process to ensure your items find a deserving new home.
              </p>
              <motion.form 
                onSubmit={handleDonateProductSubmit} 
                className="max-w-xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow-lg border border-emerald-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <Label htmlFor="itemName" className="text-gray-700 font-medium flex items-center">
                    <Package className="w-4 h-4 mr-2 text-green-600" /> Item Name / Type
                  </Label>
                  <Input 
                    id="itemName" 
                    placeholder="e.g., Eco-Fit Running Shorts, Size M" 
                    value={donationItemName}
                    onChange={(e) => setDonationItemName(e.target.value)}
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="itemCondition" className="text-gray-700 font-medium flex items-center">
                    <Edit3 className="w-4 h-4 mr-2 text-green-600" /> Item Condition
                  </Label>
                  <Select onValueChange={setDonationItemCondition} value={donationItemCondition}>
                    <SelectTrigger id="itemCondition" className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New / Like New (Unused or barely used)</SelectItem>
                      <SelectItem value="good">Good (Gently used, minor wear)</SelectItem>
                      <SelectItem value="fair">Fair (Visible wear, still functional)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="itemDescription" className="text-gray-700 font-medium flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-green-600" /> Brief Description / Reason for Donation
                  </Label>
                  <Textarea 
                    id="itemDescription" 
                    placeholder="e.g., Bought wrong size, item still in great shape." 
                    value={donationItemDescription}
                    onChange={(e) => setDonationItemDescription(e.target.value)}
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                  <Send className="w-5 h-5 mr-2" /> Submit Donation Request
                </Button>
              </motion.form>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="leaf-shadow border-teal-200">
            <CardHeader>
              <CardTitle className="text-3xl text-teal-800 text-center flex items-center justify-center">
                <Recycle className="w-8 h-8 mr-3 text-teal-500" /> Smart Recycling Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
                Recycling sports gear can be tricky. Follow these tips to ensure your items are processed correctly and contribute to a circular economy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recyclingTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full flex flex-col p-6 leaf-shadow-hover border-teal-300">
                      <div className="w-full h-40 bg-gray-200 rounded-md mb-4 overflow-hidden">
                        <img  alt={tip.imageAlt} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      </div>
                      <div className="flex items-center text-teal-700 mb-2">
                        <tip.icon className="w-6 h-6 mr-2" />
                        <h3 className="text-xl font-semibold">{tip.title}</h3>
                      </div>
                      <p className="text-gray-600 flex-grow">{tip.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="leaf-shadow border-green-200">
            <CardHeader>
              <CardTitle className="text-3xl text-green-800 text-center flex items-center justify-center">
                <Globe className="w-8 h-8 mr-3 text-blue-500" /> Our Recycling & Donation Partners
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
                We've teamed up with incredible globally active organizations that help extend the life of sports gear and support those in need. Explore their missions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {donationPartners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full flex flex-col items-center text-center p-6 leaf-shadow-hover border-emerald-300">
                      <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center mb-4">
                        <img  alt={partner.logoAlt} className="w-16 h-16 object-contain" src="https://images.unsplash.com/photo-1566304660263-c15041ac11c0" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{partner.name}</h3>
                      <p className="text-gray-600 flex-grow mb-4">{partner.description}</p>
                      <Button 
                        variant="outline" 
                        className="w-full text-green-600 border-green-600 hover:bg-green-50"
                        onClick={() => handlePartnerWebsiteClick(partner.website)}
                      >
                        Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center py-12 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Find a drop-off location or learn more about mail-in programs through our partners for recycling or donations.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 font-semibold px-10 py-3 text-lg transition-transform duration-300 hover:scale-105">
              Find Locations & Programs
            </Button>
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default RecyclingPage;