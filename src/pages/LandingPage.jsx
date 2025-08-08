import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PortfolioShowcase from '../components/PortfolioShowcase';
import UseCasesSection from '../components/UseCasesSection';

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <Box id="hero">
        <HeroSection />
      </Box>
      <Box id="features">
        <FeaturesSection />
      </Box>
      <Box id="showcase">
        <PortfolioShowcase />
      </Box>
      <Box id="use-cases">
        <UseCasesSection />
      </Box>
    </Box>
  );
};

export default LandingPage; 