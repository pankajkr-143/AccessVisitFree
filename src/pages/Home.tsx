import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import AccessibilityFeatures from '../components/home/AccessibilityFeatures';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedDestinations />
      <AccessibilityFeatures />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Home;