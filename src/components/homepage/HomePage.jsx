import React from "react";
import {
  Typography,
  Button,
  Container,
  Grid,
  CardContent,
  CardMedia,
  Avatar,
  Link,
  Card,
  Paper,
  Box,
} from "@mui/material";
import Highlights from "./Highlights";
import Category from "./Category";
import FeaturedProducts from "./Featuredproduct";
import UpcomingEvents from "./Upcomingevents";
import Articles from "./Articles";
import { global } from "../Global";

import SuccessStoriesCarousel from "./Testimonial";
const HomePage = () => {
  const articles = [
    {
      title: "Sustainable Farming Techniques",
      date: "July 10, 2024",
      author: "John Doe",
      description:
        "Learn about the latest sustainable farming techniques that can improve your yield.",
      image:
        "https://cdn.britannica.com/70/241770-050-B50984F5/organic-farmer-working-community-based-farm-greenhouse-france.jpg",
      link: "/articles/sustainable-farming-techniques",
      authorImage:
        "https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Jhon_Jairo_Vel%25C3%25A1squez.png/640px-Jhon_Jairo_Vel%25C3%25A1squez.png&w=640&q=50",
    },
    {
      title: "The Benefits of Crop Rotation",
      date: "June 25, 2024",
      author: "Jane Smith",
      description:
        "Discover how crop rotation can help maintain soil health and increase productivity.",
      image:
        "https://images.tractorgyan.com/uploads/106804/650405ad435d3-advantages-of-crop-rotation.webp",
      link: "/articles/benefits-of-crop-rotation",
      authorImage:
        "https://img.a.transfermarkt.technology/portrait/big/649317-1645958151.jpg?lm=1",
    },
    // Add more articles as needed...
  ];
  return (
    <React.Fragment>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          sx={{
            background: `linear-gradient(#212245b2,#212245b2),url("https://foodtank.com/wp-content/uploads/2020/08/FoodTank_agriculturesubsidiesworldbankreport.jpg")`,
            backgroundRepeat: "no-repeat",
            padding: "100px 0px 350px 0px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100px",
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Connecting{" "}
          <span style={{ color: "#f06d16", fontWeight: "bold" }}>
            Nepali Farmers
          </span>{" "}
          with Buyers
          <span style={{ color: "#f06d16", fontWeight: "bold" }}>
            {" "}
            Nationwide
          </span>{" "}
          <br />
          <span style={{ fontSize: "1.5rem", textAlign: "center", mt: 2 }}>
            {" "}
            Empower Nepali farmers to sell directly and connect nationwide,{" "}
            <br /> fostering local agricultural growth.
          </span>
          <br />
          <Button
            sx={{
              mt: 5,
              bgcolor: "#f06d16",
              color: "white",
              textTransform: "none",
              padding: "10px 35px 10px 35px",
              "&:hover": {
                bgcolor: "#f06d16",
                transform: "scale(1.2)",
                transition: "0.3s",
              },
              mb: 200,
            }}
          >
            Explore More
          </Button>
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          marginTop: { xs: "-50px", lg: "-100px", md: "-100px" },
        }}
      >
        <Highlights />
      </Box>

     
      <Container>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={8} md={9}>
            {" "}
            <Category />
          </Grid>
          <Grid item xs={12} sm={4} md={3}  sx={{ position: 'sticky',  }}>
            {" "}
            <Paper
              elevation={24}
              style={{ padding: "20px", }}
            >
              <Typography
                variant="h6"
                gutterBottom
                style={{ color: "black" }}
              >
                Real-time Market Prices
              </Typography>
              <Box >
                
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
            
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Rice: NPR 50/kg
                </Typography>
                <Typography variant="body1" style={{ color: "black",borderBottom:"2px solid white"  }}>
                  Wheat: NPR 45/kg
                </Typography>
                
                

                {/* Add more prices as needed */}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <FeaturedProducts />
      <UpcomingEvents />
      <Articles />
      <SuccessStoriesCarousel />
 

    </React.Fragment>
  );
};

export default HomePage;
