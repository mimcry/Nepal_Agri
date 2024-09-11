import React from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, CardMedia, Container, } from '@mui/material';
import { global } from '../Global';
const featuredProducts = [
  {
    title: "Organic Apples",
    description: "Fresh organic apples sourced from local farms.",
    price: "Rs. 150 per kg",
    image: "https://growgreatfruit.com/wp-content/uploads/2016/07/Pink-Lady-Apples-Organic-Harcourt-Victoria-1000x666-1.jpg",
    link: "/product/apple"
  },
  {
    title: "Dairy Milk",
    description: "Pure and fresh dairy milk from our trusted farms.",
    price: "Rs. 120 per liter",
    image: "https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2023/07/04/a-public-health-concern-can-campylobacter-jejuni-survive-in-raw-milk/16546082-1-eng-GB/A-public-health-concern-Can-Campylobacter-jejuni-survive-in-raw-milk.jpg",
    link: "/product/milk"
  },
  {
    title: "Fresh Vegetables",
    description: "A variety of fresh vegetables available daily.",
    price: "Starting at Rs. 30 per kg",
    image: "https://www.agrifarming.in/wp-content/uploads/2021/09/2-21-1024x574.jpg",
    link: "/product/vegetables"
  },
  // Add more products as needed...
];

const FeaturedProducts = () => {
  return (
    <Container>
    <Box sx={{ mt:10 }}>
      <Typography sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            borderBottom: "4px solid #387B36",
            borderBottomRightRadius: 15,
            width: "fit-content",
          }} gutterBottom> <span style={{color: global.color.orange}}>Featured </span>
           Products</Typography>
      <Grid container spacing={4} marginTop="10px">
        {featuredProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, boxShadow:10,'&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s',boxShadow:24 } }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ margin: '10px 0' }}>
                  {product.description}
                </Typography>
                <Typography variant="h6" sx={{color:global.color.glob,fontWeight:"500"}}>{product.price}</Typography>
                <Button
                    variant="contained"
                    sx={{
                      bgcolor: global.color.orange,mt:2,
                      "&:hover": {
                        bgcolor: global.color.orange,
                        boxShadow: 10,
                        transform: "scale(1.05)",
                        transition: "0.3s",
                      },
                    }}
                  >
                    View Details
                  </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default FeaturedProducts;
