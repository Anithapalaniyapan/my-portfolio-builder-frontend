import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PortfolioShowcase from '../components/PortfolioShowcase';

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PortfolioShowcase />
    </Box>
  );
};

export default LandingPage; 