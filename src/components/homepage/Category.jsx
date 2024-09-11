import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { global } from "../Global";
import { useNavigate } from "react-router-dom";
const categories = [
  {
    title: "Vegetables",
    description:
      "Explore a wide variety of fresh vegetables directly from farmers.",
    image: "https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg",
  },
  {
    title: "Fruits",
    description:
      "Find fresh and seasonal fruits available for immediate purchase.",
    image: "https://kz.all.biz/img/kz/catalog/415652.jpeg",
  },
  {
    title: "Grains",
    description:
      "Get the best quality grains sourced directly from the fields.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6TLaS6YmtbMBla7zMjavwsHdGc8SUyqrYg&s",
  },
  {
    title: "Seeds",
    description: "High-quality seeds for better crop yield and production.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkeRupWVdyL9zC5NIKGTuL9Mn4c7IWe9jSA&s",
  },
  {
    title: "Fertilizers",
    description: "Organic and chemical fertilizers to enhance soil fertility.",
    image:
      "https://www.bhg.com/thmb/NIhXZpszfRkBe6_4hv8BDfwl7vU=/4000x0/filters:no_upscale():strip_icc()/BHG-Types-of-Garden-Fertilizer-Fb-fTYGcqqK9y1MGOlfzOh-52e52c5904ad4418ba764013ab322c90.jpg",
  },
  {
    title: "Livestock",
    description:
      "Healthy livestock ready for sale with full veterinary support.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZhXauxnPEY0XkcSHxT8R8MgBq2I_GmQqvg&s",
  },
  {
    title: "Consultation",
    description:
      "Expert consultation for all your farming and veterinary needs.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/6/318879003/US/PI/ZY/191748347/farming-consultation-service-500x500.jpg",
  },
  {
    title: "Market Prices",
    description: "Stay updated with the latest market prices for all crops.",
    image:
      "https://c8.alamy.com/comp/H7KRNN/fruits-and-vegetables-on-the-market-with-a-price-tag-H7KRNN.jpg",
  },
];

const Category = () => {
  const navigate =useNavigate()
  return (
    <Container>
      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            borderBottom: "4px solid #387B36",
            borderBottomRightRadius: 15,
            width: "fit-content",
          }}
          gutterBottom
        >
          Explore Our{" "}
          <span style={{ color: global.color.orange }}>Categories</span>
        </Typography>
        <Grid container spacing={3} marginTop="10px">
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  boxShadow: 10,
                  borderRadius: 2,
                  overflow: "hidden",
                  textAlign: "center",
                  position: "relative",
                  backgroundColor: "#fff",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 24,
                  },
                }}
              >
                <Box
                  component="img"
                  src={category.image}
                  alt={category.title}
                  sx={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <Box sx={{ padding: 2 }}>
                  <Typography variant="h6">{category.title}</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ margin: "10px 0" }}
                  >
                    {category.description}
                  </Typography>
                  <Button
                  onClick={()=>navigate("/category")}
                    variant="contained"
                    sx={{
                      bgcolor: global.color.orange,
                      "&:hover": {
                        bgcolor: global.color.orange,
                        boxShadow: 24,
                        transform: "scale(1.05)",
                        transition: "0.3s",
                      },
                    }}
                  >
                    Explore
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Category;
