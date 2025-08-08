import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu if open
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const navItems = [
    { text: 'Home', id: 'hero' },
    { text: 'Features', id: 'features' },
    { text: 'Users', id: 'users' },
    { text: 'Use Cases', id: 'use-cases' },
    { text: 'Explore', id: 'showcase' }
    
  ];

  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#0a0a0a', height: '100%', pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.text} 
            sx={{ py: 1 }}
            onClick={() => scrollToSection(item.id)}
            button
          >
            <ListItemText 
              primary={item.text} 
              sx={{ 
                color: 'white',
                '& .MuiTypography-root': {
                  fontSize: '1.1rem',
                  fontWeight: 500
                }
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ pt: 3 }}>
          <Button
            component={RouterLink}
            to="/login"
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'rgba(255,255,255,0.3)',
              textTransform: 'none',
              fontWeight: 600,
              width: '100%',
              py: 1.5,
              '&:hover': {
                borderColor: '#a259ff',
                backgroundColor: 'rgba(162, 89, 255, 0.1)',
              }
            }}
          >
            Login
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            sx={{
              backgroundColor: '#a259ff',
              color: 'white',
              textTransform: 'none',
              fontWeight: 600,
              width: '100%',
              py: 1.5,
              '&:hover': {
                backgroundColor: '#8b4dff',
              }
            }}
          >
            Get Started
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="static" 
        elevation={0} 
        sx={{ 
          bgcolor: '#0a0a0a',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '70px', px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography 
              variant="h6" 
              color="white" 
              fontWeight={700} 
              component={RouterLink} 
              to="/" 
              sx={{ 
                textDecoration: 'none',
                fontSize: { xs: '1.2rem', sm: '1.4rem' },
                letterSpacing: '-0.02em'
              }}
            >
              PortfolioCraft
            </Typography>
          </Box>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {navItems.map((item) => (
                <Typography
                  key={item.text}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: '#a259ff',
                    }
                  }}
                >
                  {item.text}
                </Typography>
              ))}
              <Button 
                component={RouterLink} 
                to="/login" 
                variant="text"
                sx={{ 
                  textTransform: 'none',
                  fontWeight: 600,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }
                }}
              >
                Login
              </Button>
              <Button 
                component={RouterLink} 
                to="/register" 
                variant="outlined"
                sx={{ 
                  textTransform: 'none',
                  fontWeight: 600,
                  borderColor: '#a259ff',
                  color: '#a259ff',
                  px: 3,
                  py: 1,
                  '&:hover': {
                    borderColor: '#8b4dff',
                    backgroundColor: 'rgba(162, 89, 255, 0.1)',
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            bgcolor: '#0a0a0a'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 