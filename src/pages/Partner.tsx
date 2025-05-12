import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Building2, Users, Globe, TrendingUp, CheckCircle, Handshake } from 'lucide-react';

const Partner: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Partnership form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: <Globe className="w-12 h-12 text-primary-600" />,
      title: "Global Reach",
      description: "Connect with travelers from around the world seeking accessible tourism experiences."
    },
    {
      icon: <Users className="w-12 h-12 text-primary-600" />,
      title: "Targeted Audience",
      description: "Reach customers specifically looking for accessible travel options and services."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary-600" />,
      title: "Business Growth",
      description: "Expand your customer base and increase bookings through our platform."
    }
  ];

  return (
    <Layout>
      <div className="bg-primary-50">
        {/* Hero Section */}
        <div className="relative py-20 bg-primary-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-white">
              <Handshake className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">Partner with AccessTravel</h1>
              <p className="text-xl text-primary-100">
                Join our mission to make travel accessible for everyone. Partner with us to reach millions of travelers seeking accessible experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Partner with Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">1. Submit Application</h3>
                      <p className="text-gray-600">Fill out our partnership form with your business details and accessibility features.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">2. Verification</h3>
                      <p className="text-gray-600">Our team reviews your application and verifies accessibility information.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">3. Partnership Setup</h3>
                      <p className="text-gray-600">We help you set up your profile and integrate with our platform.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">4. Go Live</h3>
                      <p className="text-gray-600">Your business becomes visible to our global community of travelers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Partner Application Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="hotel">Hotel/Accommodation</option>
                      <option value="transport">Transportation</option>
                      <option value="attraction">Tourist Attraction</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="tour">Tour Operator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                      Website (optional)
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your accessibility features
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partner;