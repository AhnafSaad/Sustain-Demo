import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Populate form with user data when the component loads
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        password: '',
        confirmPassword: '',
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password && formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Create a payload with only the fields that are being updated
      const updateData = {
        name: formData.name,
        email: formData.email,
      };
      if (formData.password) {
        updateData.password = formData.password;
      }
      
      await updateUserProfile(updateData);
      
      toast({
        title: "Profile updated successfully! ✨",
      });
      // Clear password fields after submission
      setFormData(prev => ({...prev, password: '', confirmPassword: ''}));
    } catch (error) {
      toast({
        title: "Update failed",
        description: error.response?.data?.message || "An error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="leaf-shadow">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <div className="relative">
                       <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                       <Input id="name" type="text" name="name" value={formData.name} onChange={handleInputChange} required className="pl-10"/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                     <div className="relative">
                       <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                       <Input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} required className="pl-10"/>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 text-center">Leave passwords blank to keep your current password.</p>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                     <div className="relative">
                       <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                       <Input id="password" type="password" name="password" value={formData.password} onChange={handleInputChange} className="pl-10"/>
                    </div>
                  </div>
                   <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                     <div className="relative">
                       <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                       <Input id="confirmPassword" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="pl-10"/>
                    </div>
                  </div>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full bg-green-600 hover:bg-green-700 text-white py-3" size="lg">
                  {isLoading ? 'Updating...' : 'Update Profile'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
