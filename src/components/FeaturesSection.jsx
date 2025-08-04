import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip, Fade } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PaletteIcon from '@mui/icons-material/Palette';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LaptopIcon from '@mui/icons-material/Laptop';
import ShareIcon from '@mui/icons-material/Share';
import SecurityIcon from '@mui/icons-material/Security';

// Feature data with enhanced descriptions and categories
const features = [
  {
    icon: <DragIndicatorIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: '#a259ff' }} />,
    title: 'Intuitive Drag & Drop',
    description: 'Easily arrange elements with a smooth drag-and-drop interface.',
    category: 'User Experience'
  },
  {
    icon: <PaletteIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: '#a259ff' }} />,
    title: 'Stunning Theme Library',
    description: 'Pick from modern, professional designs for all industries.',
    category: 'Design'
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: '#a259ff' }} />,
    title: 'Lightning Fast Generation',
    description: 'Deploy your portfolio online in minutes with our engine.',
    category: 'Performance'
  },
  {
    icon: <LaptopIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: '#a259ff' }} />,
    title: 'Responsive Across Devices',
    description: 'Looks great on desktops, tablets, and mobile screens.',
    category: 'Compatibility'
  },
  {
    icon: <ShareIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: '#a259ff' }} />,
    title: 'Seamless Social Sharing',
    description: 'Easily share your work on social platforms.',
    category: 'Social'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: '#a259ff' }} />,
    title: 'Secure & Reliable Hosting',
    description: 'Your portfolio stays safe, always accessible.',
    category: 'Security'
  },
];

// Enhanced Card Component with wider, shorter design
const FeatureCard = ({ feature, index }) => (
  <Fade in timeout={600 + index * 150}>
    <Card
      elevation={0}
      sx={{
        height: '100%',
        p: { xs: 2, sm: 2.5, md: 3 },
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 160, sm: 180, md: 200 },
        maxWidth: { xs: 320, sm: 360, md: 400 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #a259ff, #667eea)',
          transform: 'scaleX(0)',
          transition: 'transform 0.3s ease',
        },
        '&:hover': {
          transform: 'translateY(-6px) scale(1.02)',
          boxShadow: '0 12px 24px rgba(162, 89, 255, 0.12)',
          '&::before': {
            transform: 'scaleX(1)',
          },
          '& .feature-icon': {
            transform: 'scale(1.05)',
          }
        },
      }}
    >
      <CardContent sx={{ p: 0, width: '100%' }}>
        {/* Category Chip */}
        <Chip
          label={feature.category}
          size="small"
          sx={{
            mb: 1,
            backgroundColor: 'rgba(162, 89, 255, 0.08)',
            color: '#a259ff',
            fontWeight: 600,
            fontSize: '0.7rem',
            height: '20px',
          }}
        />
        
        {/* Icon Container */}
        <Box
          className="feature-icon"
          sx={{
            mb: 1,
            p: { xs: 1, sm: 1.5 },
            borderRadius: 1.5,
            background: 'linear-gradient(135deg, rgba(162, 89, 255, 0.08) 0%, rgba(162, 89, 255, 0.04) 100%)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: { xs: 40, sm: 50, md: 60 },
            width: { xs: 40, sm: 50, md: 60 },
          }}
        >
          {feature.icon}
        </Box>
        
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 0.5,
            color: '#2d3748',
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
          }}
        >
          {feature.title}
        </Typography>
        
        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: '#718096',
            lineHeight: 1.4,
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
            fontWeight: 400,
            px: { xs: 0.5, sm: 1 },
          }}
        >
          {feature.description}
        </Typography>
      </CardContent>
    </Card>
  </Fade>
);

// Main Features Section
const FeaturesSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23a259ff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5,
        }
      }}
    >
      <Box sx={{ 
        maxWidth: '1400px', 
        mx: 'auto', 
        px: { xs: 2, sm: 3, md: 4, lg: 6 }, 
        position: 'relative', 
        zIndex: 1 
      }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.5rem', xl: '4rem' },
            fontWeight: 800,
            textAlign: 'center',
            mb: { xs: 4, sm: 6, md: 8, lg: 10 },
            color: '#2d3748',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            letterSpacing: '-0.02em',
            lineHeight: { xs: 1.3, sm: 1.2 },
          }}
        >
          Key Features Designed for You
        </Typography>

        {/* First Row - 3 cards */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
          {[0, 1, 2].map((index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FeatureCard feature={features[index]} index={index} />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Second Row - 3 cards */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {[3, 4, 5].map((index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FeatureCard feature={features[index]} index={index} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
