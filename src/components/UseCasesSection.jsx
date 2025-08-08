import React from 'react';
import { Box, Typography, Grid, Chip, Fade } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Use cases data
const useCases = [
  {
    id: 1,
    title: 'Job Seekers',
    icon: <WorkIcon sx={{ fontSize: 36, color: '#667eea' }} />,
    description: 'Stand out in competitive job markets with a professional portfolio.',
    color: '#667eea'
  },
  {
    id: 2,
    title: 'Students & Graduates',
    icon: <SchoolIcon sx={{ fontSize: 36, color: '#f093fb' }} />,
    description: 'Build your first professional presence and showcase academic projects.',
    color: '#f093fb'
  },
  {
    id: 3,
    title: 'Freelancers',
    icon: <PersonIcon sx={{ fontSize: 36, color: '#4facfe' }} />,
    description: 'Attract more clients with a compelling portfolio that highlights your expertise.',
    color: '#4facfe'
  },
  {
    id: 4,
    title: 'Agencies & Teams',
    icon: <GroupIcon sx={{ fontSize: 36, color: '#43e97b' }} />,
    description: 'Showcase your team\'s collective expertise and portfolio of successful projects.',
    color: '#43e97b'
  },
  {
    id: 5,
    title: 'Entrepreneurs',
    icon: <BusinessIcon sx={{ fontSize: 36, color: '#fa709a' }} />,
    description: 'Build credibility and attract investors with a professional portfolio.',
    color: '#fa709a'
  },
  {
    id: 6,
    title: 'Career Changers',
    icon: <TrendingUpIcon sx={{ fontSize: 36, color: '#a8edea' }} />,
    description: 'Transition smoothly into new industries by showcasing transferable skills.',
    color: '#a8edea'
  }
];

// Clean Use Case Item Component
const UseCaseItem = ({ useCase, index }) => (
  <Fade in timeout={600 + index * 100}>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 3,
        p: 3,
        borderRadius: 2,
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.08)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          transform: 'translateX(8px)',
        },
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${useCase.color}20 0%, ${useCase.color}10 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `2px solid ${useCase.color}30`,
          flexShrink: 0,
        }}
      >
        {useCase.icon}
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '1.1rem', sm: '1.2rem' },
            mb: 1,
          }}
        >
          {useCase.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 1.6,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 400,
          }}
        >
          {useCase.description}
        </Typography>
      </Box>
    </Box>
  </Fade>
);

// Clean Use Cases Section Component
const UseCasesSection = () => {
  return (
    <Box
      sx={{
        background: '#1a202c',
        py: { xs: 6, sm: 8, md: 10 },
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
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, sm: 3, md: 4, lg: 6 },
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 800,
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em',
              mb: 2,
            }}
          >
            Who is Portfolio Maker For?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Our platform caters to a diverse range of professionals and individuals
          </Typography>
        </Box>

        {/* Use Cases Grid */}
        <Grid container spacing={3}>
          {useCases.map((useCase, index) => (
            <Grid item xs={12} md={6} key={useCase.id}>
              <UseCaseItem useCase={useCase} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, sm: 8, md: 10 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              label="Free to Start"
              sx={{
                backgroundColor: 'rgba(162, 89, 255, 0.2)',
                color: '#a259ff',
                fontWeight: 600,
                fontSize: '0.9rem',
                px: 2,
              }}
            />
            <Chip
              label="No Coding Required"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.9rem',
                px: 2,
              }}
            />
            <Chip
              label="Professional Templates"
              sx={{
                backgroundColor: 'rgba(162, 89, 255, 0.2)',
                color: '#a259ff',
                fontWeight: 600,
                fontSize: '0.9rem',
                px: 2,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UseCasesSection; 