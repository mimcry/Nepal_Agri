import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Avatar, Link, Container } from '@mui/material';

const articles = [
  {
    title: "Sustainable Farming Techniques",
    date: "July 10, 2024",
    author: "John Doe",
    description: "Learn about the latest sustainable farming techniques that can improve your yield.",
    image: "https://cdn.britannica.com/70/241770-050-B50984F5/organic-farmer-working-community-based-farm-greenhouse-france.jpg",
    link: "/articles/sustainable-farming-techniques",
    authorImage: "https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Jhon_Jairo_Vel%25C3%25A1squez.png/640px-Jhon_Jairo_Vel%25C3%25A1squez.png&w=640&q=50"
  },
  {
    title: "The Benefits of Crop Rotation",
    date: "June 25, 2024",
    author: "Jane Smith",
    description: "Discover how crop rotation can help maintain soil health and increase productivity.",
    image: "https://images.tractorgyan.com/uploads/106804/650405ad435d3-advantages-of-crop-rotation.webp",
    link: "/articles/benefits-of-crop-rotation",
    authorImage: "https://img.a.transfermarkt.technology/portrait/big/649317-1645958151.jpg?lm=1"
  },
  // Add more articles as needed...
];

const Articles = () => {
  return (
    <Container>
    <Box sx={{mt:10}}>
      <Typography sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            borderBottom: "4px solid #387B36",
            borderBottomRightRadius: 15,
            width: "fit-content",
          }} gutterBottom>Articles</Typography>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }, height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={article.image}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6">{article.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ margin: '10px 0' }}>
                  {article.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                  <Avatar alt={article.author} src={article.authorImage} />
                  <Box sx={{ marginLeft: 2 }}>
                    <Typography variant="body2" color="text.secondary">{article.author}</Typography>
                    <Typography variant="body2" color="text.secondary">{article.date}</Typography>
                  </Box>
                </Box>
                <Link href={article.link} sx={{ display: 'block', marginTop: 2, textAlign: 'right', color: 'primary.main', textDecoration: 'none', fontWeight: 'bold' }}>
                  Read More
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default Articles;
