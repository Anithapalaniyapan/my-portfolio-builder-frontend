import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Fade } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import BusinessIcon from '@mui/icons-material/Business';

// Sample portfolio data
const portfolios = [
  {
    id: 1,
    title: 'Creative Developer Portfolio',
    category: 'Development',
    image: 'src/assets/portfolio-1.jpg',
    description: 'Modern portfolio showcasing web development skills with interactive elements.',
    tech: ['React', 'Node.js', 'MongoDB'],
    views: '2.4k'
  },
  {
    id: 2,
    title: 'UX Designer Showcase',
    category: 'Design',
    image: 'src/assets/portfolio-2.jpg',
    description: 'Beautiful design portfolio highlighting user experience projects and case studies.',
    tech: ['Figma', 'Adobe XD', 'Sketch'],
    views: '1.8k'
  },
  {
    id: 3,
    title: 'Marketing Professional',
    category: 'Business',
    image: 'src/assets/portfolio-3.jpg',
    description: 'Professional portfolio demonstrating marketing campaigns and brand strategies.',
    tech: ['Digital Marketing', 'SEO', 'Analytics'],
    views: '3.1k'
  },
  {
    id: 4,
    title: 'Full-Stack Developer',
    category: 'Development',
    image: 'src/assets/portfolio-4.jpg',
    description: 'Comprehensive portfolio featuring full-stack projects and technical expertise.',
    tech: ['JavaScript', 'Python', 'AWS'],
    views: '2.7k'
  }
];

// Portfolio Card Component
const PortfolioCard = ({ portfolio, index }) => (
  <Fade in timeout={800 + index * 200}>
    <Card
      elevation={0}
      sx={{
        height: '100%',
        borderRadius: 3,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: '0 20px 40px rgba(162, 89, 255, 0.15)',
          '& .portfolio-image': {
            transform: 'scale(1.05)',
          }
        },
      }}
    >
      {/* Portfolio Image */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="200"
          image={portfolio.image}
          alt={portfolio.title}
          className="portfolio-image"
          sx={{
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
          }}
        />
        {/* Category Chip */}
        <Chip
          label={portfolio.category}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            backgroundColor: 'rgba(162, 89, 255, 0.9)',
            color: 'white',
            fontWeight: 600,
            fontSize: '0.75rem',
          }}
        />
        {/* Views Badge */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <VisibilityIcon sx={{ fontSize: 16 }} />
          {portfolio.views}
        </Box>
      </Box>

      <CardContent sx={{ p: 3 }}>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: '#2d3748',
            fontSize: { xs: '1.1rem', sm: '1.2rem' },
            lineHeight: 1.3,
          }}
        >
          {portfolio.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: '#718096',
            mb: 2,
            lineHeight: 1.5,
            fontSize: { xs: '0.85rem', sm: '0.9rem' },
          }}
        >
          {portfolio.description}
        </Typography>

        {/* Tech Stack */}
        <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {portfolio.tech.map((tech, techIndex) => (
            <Chip
              key={techIndex}
              label={tech}
              size="small"
              sx={{
                backgroundColor: 'rgba(162, 89, 255, 0.08)',
                color: '#a259ff',
                fontWeight: 500,
                fontSize: '0.7rem',
                height: '24px',
              }}
            />
          ))}
        </Box>

        {/* View Portfolio Button */}
        <Button
          variant="contained"
          fullWidth
          startIcon={<VisibilityIcon />}
          sx={{
            backgroundColor: '#a259ff',
            color: 'white',
            fontWeight: 600,
            py: 1.2,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '0.9rem',
            boxShadow: '0 4px 12px rgba(162, 89, 255, 0.3)',
            '&:hover': {
              backgroundColor: '#8b4dff',
              boxShadow: '0 6px 16px rgba(162, 89, 255, 0.4)',
            },
          }}
        >
          View Portfolio
        </Button>
      </CardContent>
    </Card>
  </Fade>
);

// Main Portfolio Showcase Component
const PortfolioShowcase = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
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
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            fontWeight: 800,
            textAlign: 'center',
            mb: { xs: 4, sm: 6, md: 8 },
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '-0.02em',
          }}
        >
          Explore Portfolios Made with AI
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: { xs: 6, sm: 8, md: 10 },
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            fontWeight: 400,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Discover stunning portfolios created by professionals using our AI-powered platform
        </Typography>

        {/* Portfolio Grid */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {portfolios.map((portfolio, index) => (
            <Grid item xs={12} sm={6} lg={3} key={portfolio.id}>
              <PortfolioCard portfolio={portfolio} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, sm: 8, md: 10 } }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.1rem',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            View All Portfolios
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioShowcase; 