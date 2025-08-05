import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#0a0a0a',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(162, 89, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)',
          zIndex: 1,
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { 
                xs: '2.5rem', 
                sm: '3rem', 
                md: '3.5rem', 
                lg: '4rem',
                xl: '4.5rem'
              },
              fontWeight: 800,
              mb: { xs: 2, sm: 3 },
              lineHeight: 1.1,
              color: 'white',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #ffffff 0%, #a259ff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            AI Portfolio Creator
          </Typography>
          
          <Typography
            variant="h2"
            sx={{
              fontSize: { 
                xs: '1.1rem', 
                sm: '1.3rem', 
                md: '1.5rem', 
                lg: '1.7rem'
              },
              fontWeight: 400,
              mb: { xs: 3, sm: 4 },
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.6,
              maxWidth: { xs: '100%', md: '80%' },
              mx: 'auto',
            }}
          >
            Transform your work into stunning professional portfolios in minutes. 
            Perfect for freelancers, agencies, and creators who want to stand out.
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/register')}
              startIcon={<AutoAwesomeIcon />}
              sx={{
                backgroundColor: '#a259ff',
                color: 'white',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                fontWeight: 600,
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 1.5, sm: 2, md: 2.5 },
                borderRadius: 3,
                textTransform: 'none',
                boxShadow: '0 8px 32px rgba(162, 89, 255, 0.3)',
                minWidth: { xs: '200px', sm: '220px' },
                '&:hover': {
                  backgroundColor: '#8b4dff',
                  boxShadow: '0 12px 40px rgba(162, 89, 255, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Get Started Free
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<AddIcon />}
              onClick={() => navigate('/login')}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                fontWeight: 600,
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 1.5, sm: 2, md: 2.5 },
                borderRadius: 3,
                textTransform: 'none',
                minWidth: { xs: '200px', sm: '220px' },
                '&:hover': {
                  borderColor: '#a259ff',
                  backgroundColor: 'rgba(162, 89, 255, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection; 