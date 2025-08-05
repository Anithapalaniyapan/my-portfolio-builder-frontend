import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip, Fade, Container } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PaletteIcon from '@mui/icons-material/Palette';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LaptopIcon from '@mui/icons-material/Laptop';
import ShareIcon from '@mui/icons-material/Share';
import SecurityIcon from '@mui/icons-material/Security';

// Feature data with enhanced descriptions and categories
const features = [
  {
    icon: <DragIndicatorIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#a259ff' }} />,
    title: 'Intuitive Drag & Drop',
    description: 'Easily arrange elements with a smooth drag-and-drop interface that feels natural and responsive.',
    category: 'User Experience',
    gradient: 'linear-gradient(135deg, #a259ff 0%, #667eea 100%)'
  },
  {
    icon: <PaletteIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#a259ff' }} />,
    title: 'Stunning Theme Library',
    description: 'Pick from modern, professional designs for all industries with customizable color schemes.',
    category: 'Design',
    gradient: 'linear-gradient(135deg, #667eea 0%, #a259ff 100%)'
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#a259ff' }} />,
    title: 'Lightning Fast Generation',
    description: 'Deploy your portfolio online in minutes with our optimized engine and CDN delivery.',
    category: 'Performance',
    gradient: 'linear-gradient(135deg, #a259ff 0%, #8b4dff 100%)'
  },
  {
    icon: <LaptopIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#a259ff' }} />,
    title: 'Responsive Across Devices',
    description: 'Looks perfect on desktops, tablets, and mobile screens with adaptive layouts.',
    category: 'Compatibility',
    gradient: 'linear-gradient(135deg, #8b4dff 0%, #a259ff 100%)'
  },
  {
    icon: <ShareIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#a259ff' }} />,
    title: 'Seamless Social Sharing',
    description: 'Easily share your work on social platforms with optimized preview cards and metadata.',
    category: 'Social',
    gradient: 'linear-gradient(135deg, #667eea 0%, #8b4dff 100%)'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#a259ff' }} />,
    title: 'Secure & Reliable Hosting',
    description: 'Your portfolio stays safe with enterprise-grade security and 99.9% uptime guarantee.',
    category: 'Security',
    gradient: 'linear-gradient(135deg, #8b4dff 0%, #667eea 100%)'
  },
];

// Enhanced Card Component with improved design
const FeatureCard = ({ feature, index }) => (
  <Fade in timeout={800 + index * 200}>
    <Card
      elevation={0}
      sx={{
        height: '100%',
        p: { xs: 2.5, sm: 3, md: 3.5 },
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 200, sm: 220, md: 240 },
        maxWidth: { xs: 320, sm: 360, md: 400 },
        cursor: 'pointer',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: feature.gradient,
          transform: 'scaleX(0)',
          transition: 'transform 0.4s ease',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 50% 0%, ${feature.gradient.split(' ')[2]}20 0%, transparent 70%)`,
          opacity: 0,
          transition: 'opacity 0.4s ease',
        },
        '&:hover': {
          transform: 'translateY(-12px) scale(1.03)',
          boxShadow: '0 20px 60px rgba(162, 89, 255, 0.25)',
          borderColor: 'rgba(162, 89, 255, 0.4)',
          '&::before': {
            transform: 'scaleX(1)',
          },
          '&::after': {
            opacity: 1,
          },
          '& .feature-icon': {
            transform: 'scale(1.15) rotate(5deg)',
            background: feature.gradient,
          },
          '& .feature-title': {
            background: feature.gradient,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }
        },
      }}
    >
      <CardContent sx={{ p: 0, width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Category Chip */}
        <Chip
          label={feature.category}
          size="small"
          sx={{
            mb: 2.5,
            backgroundColor: 'rgba(162, 89, 255, 0.15)',
            color: '#a259ff',
            fontWeight: 600,
            fontSize: '0.75rem',
            height: '26px',
            border: '1px solid rgba(162, 89, 255, 0.3)',
            '&:hover': {
              backgroundColor: 'rgba(162, 89, 255, 0.25)',
            }
          }}
        />
        
        {/* Icon Container */}
        <Box
          className="feature-icon"
          sx={{
            mb: 2.5,
            p: { xs: 2, sm: 2.5 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(162, 89, 255, 0.15) 0%, rgba(162, 89, 255, 0.05) 100%)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: { xs: 60, sm: 70, md: 80 },
            width: { xs: 60, sm: 70, md: 80 },
            border: '1px solid rgba(162, 89, 255, 0.2)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 3,
              background: feature.gradient,
              opacity: 0,
              transition: 'opacity 0.4s ease',
            }
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {feature.icon}
          </Box>
        </Box>
        
        {/* Title */}
        <Typography
          className="feature-title"
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            color: 'white',
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
            transition: 'all 0.4s ease',
          }}
        >
          {feature.title}
        </Typography>
        
        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6,
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
            fontWeight: 400,
            px: { xs: 1, sm: 1.5 },
            transition: 'color 0.4s ease',
          }}
        >
          {feature.description}
        </Typography>
      </CardContent>
    </Card>
  </Fade>
);

// Main Features Section with improved layout
const FeaturesSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        py: { xs: 10, sm: 12, md: 14, lg: 16 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 70%, rgba(162, 89, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(102, 126, 234, 0.08) 0%, transparent 50%)',
          opacity: 0.6,
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem', lg: '3.8rem', xl: '4.2rem' },
            fontWeight: 800,
            textAlign: 'center',
            mb: { xs: 8, sm: 10, md: 12, lg: 14 },
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: { xs: 1.3, sm: 1.2 },
            background: 'linear-gradient(135deg, #ffffff 0%, #a259ff 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Powerful Features for Creative Professionals
        </Typography>

        {/* Single Grid with 3 columns per row */}
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 5 }} 
          justifyContent="center"
          sx={{ 
            maxWidth: '1200px',
            mx: 'auto'
          }}
        >
          {features.map((feature, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              sx={{ 
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <FeatureCard feature={feature} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
