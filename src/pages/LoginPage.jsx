import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Link,
  IconButton,
  Alert,
  Fade,
  InputAdornment
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      console.log('Login attempt:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'Invalid email or password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        position: 'relative',
      }}
    >
      {/* Back Button */}
      <IconButton
        onClick={() => navigate('/')}
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'white',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Container maxWidth="xs">
        <Fade in timeout={600}>
          <Paper
            elevation={24}
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              maxHeight: '500px',
            }}
          >
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#2d3748',
                  mb: 1,
                  fontSize: '1.8rem',
                }}
              >
                Welcome Back
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#718096',
                  fontSize: '0.95rem',
                }}
              >
                Sign in to your PortfolioCraft account
              </Typography>
            </Box>

            {/* Error Alert */}
            {errors.general && (
              <Alert severity="error" sx={{ mb: 2, fontSize: '0.85rem' }}>
                {errors.general}
              </Alert>
            )}

            {/* Login Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
              {/* Email Field */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: '#4a5568', mb: 1, fontWeight: 500 }}>
                  Email Address
                </Typography>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 1,
                    }}
                  >
                    <EmailIcon sx={{ color: '#a259ff', fontSize: 20 }} />
                  </Box>
                                      <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      style={{
                        width: '100%',
                        padding: '12px 12px 12px 44px',
                        border: errors.email ? '1px solid #e53e3e' : '1px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '14px',
                        backgroundColor: 'transparent',
                        color: '#2d3748',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#a259ff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.email ? '#e53e3e' : '#e2e8f0';
                    }}
                  />
                </Box>
                {errors.email && (
                  <Typography variant="caption" sx={{ color: '#e53e3e', fontSize: '0.75rem', mt: 0.5 }}>
                    {errors.email}
                  </Typography>
                )}
              </Box>

              {/* Password Field */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: '#4a5568', mb: 1, fontWeight: 500 }}>
                  Password
                </Typography>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 1,
                    }}
                  >
                    <LockIcon sx={{ color: '#a259ff', fontSize: 20 }} />
                  </Box>
                                      <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      style={{
                        width: '100%',
                        padding: '12px 44px 12px 44px',
                        border: errors.password ? '1px solid #e53e3e' : '1px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '14px',
                        backgroundColor: 'transparent',
                        color: '#2d3748',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#a259ff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.password ? '#e53e3e' : '#e2e8f0';
                    }}
                  />
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 1,
                      color: '#718096',
                      '&:hover': {
                        color: '#a259ff',
                      }
                    }}
                    size="small"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </Box>
                {errors.password && (
                  <Typography variant="caption" sx={{ color: '#e53e3e', fontSize: '0.75rem', mt: 0.5 }}>
                    {errors.password}
                  </Typography>
                )}
              </Box>

              {/* Forgot Password Link */}
              <Box sx={{ textAlign: 'right', mb: 2 }}>
                <Link
                  component={RouterLink}
                  to="/forgot-password"
                  sx={{
                    color: '#a259ff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    '&:hover': {
                      textDecoration: 'underline',
                    }
                  }}
                >
                  Forgot password?
                </Link>
              </Box>

              {/* Login Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading}
                sx={{
                  py: 1.2,
                  backgroundColor: '#a259ff',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: 2,
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(162, 89, 255, 0.3)',
                  '&:hover': {
                    backgroundColor: '#8b4dff',
                    boxShadow: '0 6px 16px rgba(162, 89, 255, 0.4)',
                  },
                  '&:disabled': {
                    backgroundColor: '#cbd5e0',
                  }
                }}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </Box>

            {/* Sign Up Link */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: '#718096', fontSize: '0.9rem' }}>
                Don't have an account?{' '}
                <Link
                  component={RouterLink}
                  to="/register"
                  sx={{
                    color: '#a259ff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      textDecoration: 'underline',
                    }
                  }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default LoginPage; 