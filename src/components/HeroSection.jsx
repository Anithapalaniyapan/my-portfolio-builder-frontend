import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 64px)', // Full height minus navbar
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/landing-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          width: '100%',
          px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { 
              xs: '2rem', 
              sm: '2.5rem', 
              md: '3.5rem', 
              lg: '4rem',
              xl: '4.5rem'
            },
            fontWeight: 700,
            mb: { xs: 2, sm: 3, md: 4 },
            lineHeight: { xs: 1.3, sm: 1.2 },
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            wordWrap: 'break-word',
            hyphens: 'auto',
            width: '100%',
            maxWidth: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
          }}
        >
          Craft Your Masterpiece, Instantly.
        </Typography>
        
        <Typography
          variant="h5"
          sx={{
            fontSize: { 
              xs: '1rem', 
              sm: '1.1rem', 
              md: '1.3rem', 
              lg: '1.5rem'
            },
            fontWeight: 400,
            mb: { xs: 3, sm: 4, md: 5 },
            maxWidth: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
            lineHeight: { xs: 1.6, sm: 1.5 },
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            opacity: 0.9,
            wordWrap: 'break-word',
            hyphens: 'auto',
            width: '100%',
          }}
        >
          Design and showcase your professional portfolio with unparalleled ease and elegance. Get started today, no coding required.
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/login')}
          sx={{
            backgroundColor: '#a259ff',
            color: 'white',
            fontSize: { 
              xs: '0.9rem', 
              sm: '1rem', 
              md: '1.1rem', 
              lg: '1.2rem' 
            },
            fontWeight: 600,
            px: { xs: 3, sm: 4, md: 5, lg: 6 },
            py: { xs: 1.2, sm: 1.5, md: 1.8 },
            borderRadius: 2,
            textTransform: 'none',
            boxShadow: '0 4px 12px rgba(162, 89, 255, 0.3)',
            minWidth: { xs: '180px', sm: '200px', md: '220px' },
            maxWidth: { xs: '280px', sm: '320px' },
            width: { xs: '100%', sm: 'auto' },
            '&:hover': {
              backgroundColor: '#8b4dff',
              boxShadow: '0 6px 16px rgba(162, 89, 255, 0.4)',
            },
          }}
        >
          Generate Portfolio Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection; 