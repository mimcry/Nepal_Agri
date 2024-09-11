import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, List, ListItem, ListItemText, ListItemAvatar, Container } from '@mui/material';
import { global } from '../Global';
const upcomingEvents = [
  {
    title: "Organic Farming Workshop",
    date: "July 20, 2024",
    location: "Kathmandu",
    description: "Join us for an in-depth workshop on organic farming practices.",
    image: "https://images.squarespace-cdn.com/content/v1/60ba3fbb0233193ddaa2e02b/a62f60d6-d5f6-431d-abce-fcbd5e41afb8/Screen+Shot+2021-06-22+at+3.30.28+PM.jpg",
    link: "/events/organic-farming-workshop"
  },
  {
    title: "Agriculture Expo 2024",
    date: "August 15, 2024",
    location: "Pokhara",
    description: "Discover the latest innovations in agriculture at the annual expo.",
    image: "https://eventmx.com/media/event_image/YcDJ2kLDSebrsphwJnwy3M.jpg",
    link: "/events/agriculture-expo-2024"
  },
  // Add more events as needed...
];

const UpcomingEvents = () => {
  return (
    <Container>
    <Box sx={{mt:10 }}>
      <Typography sx={{  fontSize: "2rem",
            fontWeight: "bold",
            borderBottom: "4px solid #387B36",
            borderBottomRightRadius: 15,
            width: "fit-content",
          }}  gutterBottom>Upcoming <span style={{color: global.color.orange}}>Events</span></Typography>
      <List sx={{boxShadow:0,mt:5,borderRadius:5}}>
        {upcomingEvents.map((event, index) => (
          <ListItem key={index} alignItems="flex-start" sx={{boxShadow:5,width:"fit-content",mt:2,borderRadius:5}}>
            <ListItemAvatar>
              <CardMedia
                component="img"
                sx={{ width: 100, height: 100, borderRadius: '8px' }}
                image={event.image}
                alt={event.title}
              />
            </ListItemAvatar>
            <ListItemText
              primary={event.title} 
              sx={{ml:5}}
              secondary={
                <React.Fragment>
                  <Typography variant="body2" color="text.secondary">
                    {event.date} - {event.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ margin: '10px 0' }}>
                    {event.description}
                  </Typography>
                  <Button variant="outlined" color="primary" href={event.link}>
                    Learn More
                  </Button>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box></Container>
  );
};

export default UpcomingEvents;
