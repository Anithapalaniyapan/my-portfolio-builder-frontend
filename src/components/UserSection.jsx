import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, Chip, Fade, Container } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PaletteIcon from '@mui/icons-material/Palette';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const useCases = [
  {
    icon: <CameraAltIcon sx={{ fontSize: 40, color: '#ff6b6b' }} />,
    title: 'Photographers',
    description: 'Showcase your stunning photography portfolio with beautiful galleries and client testimonials.',
    gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
    features: ['Gallery Layouts', 'Client Portal', 'Booking System'],
    color: '#ff6b6b',
    bgGradient: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(238, 90, 82, 0.05))'
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 40, color: '#4ecdc4' }} />,
    title: 'Artists',
    description: 'Display your creative artwork with customizable galleries and online store integration.',
    gradient: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
    features: ['Art Galleries', 'Online Store', 'Commission Requests'],
    color: '#4ecdc4',
    bgGradient: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(68, 160, 141, 0.05))'
  },
  {
    icon: <BrushIcon sx={{ fontSize: 40, color: '#45b7d1' }} />,
    title: 'Designers',
    description: 'Present your design projects with interactive case studies and process showcases.',
    gradient: 'linear-gradient(135deg, #45b7d1, #96c93d)',
    features: ['Case Studies', 'Process Showcase', 'Client Work'],
    color: '#45b7d1',
    bgGradient: 'linear-gradient(135deg, rgba(69, 183, 209, 0.1), rgba(150, 201, 61, 0.05))'
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: '#f9ca24' }} />,
    title: 'Developers',
    description: 'Highlight your coding projects with live demos and technical documentation.',
    gradient: 'linear-gradient(135deg, #f9ca24, #f0932b)',
    features: ['Live Demos', 'GitHub Integration', 'Tech Stack'],
    color: '#f9ca24',
    bgGradient: 'linear-gradient(135deg, rgba(249, 202, 36, 0.1), rgba(240, 147, 43, 0.05))'
  },
  {
    icon: <MusicNoteIcon sx={{ fontSize: 40, color: '#6c5ce7' }} />,
    title: 'Musicians',
    description: 'Share your music with embedded players and upcoming event calendars.',
    gradient: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
    features: ['Music Player', 'Event Calendar', 'Merch Store'],
    color: '#6c5ce7',
    bgGradient: 'linear-gradient(135deg, rgba(108, 92, 231, 0.1), rgba(162, 155, 254, 0.05))'
  },
  {
    icon: <RestaurantIcon sx={{ fontSize: 40, color: '#e17055' }} />,
    title: 'Chefs',
    description: 'Showcase your culinary creations with recipe collections and booking systems.',
    gradient: 'linear-gradient(135deg, #e17055, #d63031)',
    features: ['Recipe Gallery', 'Booking System', 'Menu Showcase'],
    color: '#e17055',
    bgGradient: 'linear-gradient(135deg, rgba(225, 112, 85, 0.1), rgba(214, 48, 49, 0.05))'
  }
];

const UseCaseCard = ({ useCase, index }) => (
  <Fade in timeout={1000 + index * 200}>
    <Card
      elevation={0}
      sx={{
        width: '400px',
        height: '280px',
        background: useCase.bgGradient,
        border: `2px solid ${useCase.color}30`,
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-12px) scale(1.03)',
          boxShadow: `0 25px 80px ${useCase.color}30`,
          borderColor: `${useCase.color}60`,
          '& .card-icon': {
            transform: 'scale(1.15) rotate(10deg)',
            background: useCase.gradient,
          },
          '& .card-title': {
            color: useCase.color,
          },
          '& .card-bg': {
            opacity: 0.15,
          }
        },
      }}
    >
      {/* Background gradient overlay */}
      <Box
        className="card-bg"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: useCase.gradient,
          opacity: 0,
          transition: 'opacity 0.4s ease',
        }}
      />

      <CardContent sx={{ 
        p: 4, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Icon */}
        <Box
          className="card-icon"
          sx={{
            width: 80,
            height: 80,
            borderRadius: 3,
            background: 'rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
            transition: 'all 0.4s ease',
            border: '2px solid rgba(255,255,255,0.2)',
            alignSelf: 'flex-start',
          }}
        >
          {useCase.icon}
        </Box>

        {/* Title */}
        <Typography
          className="card-title"
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'white',
            fontSize: '1.5rem',
            transition: 'color 0.4s ease',
          }}
        >
          {useCase.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.6,
            mb: 3,
            fontSize: '0.95rem',
            flex: 1,
          }}
        >
          {useCase.description}
        </Typography>

        {/* Features */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 1,
        }}>
          {useCase.features.map((feature) => (
            <Chip
              key={feature}
              label={feature}
              size="small"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                fontSize: '0.75rem',
                height: '28px',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: `${useCase.color}30`,
                  borderColor: useCase.color,
                }
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  </Fade>
);

const UserSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        py: { xs: 12, sm: 14, md: 16, lg: 18 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(162, 89, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(102, 126, 234, 0.08) 0%, transparent 50%)',
          opacity: 0.6,
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, sm: 10, md: 12 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem', lg: '3.8rem', xl: '4.2rem' },
              fontWeight: 800,
              mb: 3,
              color: 'white',
              letterSpacing: '-0.02em',
              lineHeight: { xs: 1.3, sm: 1.2 },
              background: 'linear-gradient(135deg, #ffffff 0%, #a259ff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Perfect for Every Creative Professional
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              fontWeight: 400,
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Whether you're a photographer, designer, developer, or any creative professional, 
            our platform provides the perfect tools to showcase your work and grow your business.
          </Typography>
        </Box>

        {/* Horizontal Scrolling Cards */}
        <Box sx={{ 
          overflowX: 'auto',
          overflowY: 'hidden',
          pb: 2,
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#a259ff',
            borderRadius: '4px',
            '&:hover': {
              background: '#8b4dff',
            }
          }
        }}>
          <Box sx={{ 
            display: 'flex', 
            gap: 3,
            minWidth: 'max-content',
            px: 2,
            justifyContent: { xs: 'flex-start', md: 'center' }
          }}>
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} useCase={useCase} index={index} />
            ))}
          </Box>
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: { xs: 8, sm: 10, md: 12 } }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
              fontWeight: 700,
              mb: 3,
              color: 'white',
            }}
          >
            Ready to Create Your Professional Portfolio?
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem' },
              color: 'rgba(255,255,255,0.7)',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Join thousands of creative professionals who trust our platform to showcase their work 
            and attract new opportunities.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default UserSection; 