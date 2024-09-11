import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#387B36', color: '#fff', py: 4,mt:10 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Typography variant="body2">
              <Link href="/" color="inherit" underline="hover">Home</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/categories" color="inherit" underline="hover">Categories</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/stories" color="inherit" underline="hover">Success Stories</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/weather" color="inherit" underline="hover">Weather</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/consultations" color="inherit" underline="hover">Consultations</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography variant="body2">
              Address: Your Address, Kathmandu, Nepal
            </Typography>
            <Typography variant="body2">
              Email: info@example.com
            </Typography>
            <Typography variant="body2">
              Phone: +977-123456789
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <IconButton color="inherit" href="https://www.facebook.com">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://www.twitter.com">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://www.instagram.com">
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>About Us</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac feugiat nisi.
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3} textAlign="center">
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Agri Nepal. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
