import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, Button, Avatar, Container } from '@mui/material';
import { global } from '../Global';

const testimonials = [
  {
    id: 1,
    name: 'Hari Shrestha',
    location: 'Pokhara',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDI-7Ayyep5Wzw9bV8f4zPAhaBZRd0fUQy5g&s',
    text: 'I increased my sales by 50% using this platform. Highly recommended!',
  },
  {
    id: 2,
    name: 'Sita Rai',
    location: 'Kathmandu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREbrL7sCGRSsfjlV03BtrVR2yOHBoWlkg00w&s',
    text: 'The platform helped me find buyers quickly and efficiently. Great experience!',
  },
  {
    id: 3,
    name: 'Ramesh Gupta',
    location: 'Chitwan',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUqIkz6JHcHbVa0gv-kUbgGKRrPWTVO3M9g&s',
    text: 'Connecting with markets and buyers was never easier. Thank you!',
  },
  // Add more testimonials as needed
];

const SuccessStoriesCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4,mt:5 }}>
      <Typography sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            borderBottom: "4px solid #387B36",
            borderBottomRightRadius: 15,
            width: "fit-content",
          }} gutterBottom>Happy <span style={{color: global.color.orange}}>Customers </span> & Success <span style={{color: global.color.orange}}>Stories</span></Typography>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
      
   
        swipeable={true}
        draggable={true}
        ssr={true} 
        
     
      >
        {testimonials.map((testimonial) => (
          <Box key={testimonial.id} sx={{ textAlign: 'center', px: 2,mt:5,}}>
            <Avatar alt={testimonial.name} src={testimonial.image} sx={{ width: 120, height: 120, mb: 2, mx: 'auto' }} />
            <Typography variant="h6" gutterBottom>{testimonial.name}</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>{testimonial.location}</Typography>
            <Typography variant="body2">{testimonial.text}</Typography>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};

export default SuccessStoriesCarousel;
