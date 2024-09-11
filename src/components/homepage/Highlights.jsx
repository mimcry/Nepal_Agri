import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Avatar, Container, Button } from "@mui/material";
import { global } from "../Global";

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet1: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet2: {
        breakpoint: { max:820, min: 464},
        items: 2,
      },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const stories = [
    {
      title: "Special Discounts on Seasonal Fruits",
      description: "Get up to 20% off on all seasonal fruits. Limited time offer!",
      buttonText: "Shop Now",
      image: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4",
      link: "/shop"
    },
    {
      title: "Free Transportation for Your Produce",
      description: "Sign up today and get free transportation services for your first shipment.",
      buttonText: "Learn More",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatNZ9cId57ictqkbiB3LLDl-L-erm981Kmg&s",
      link: "/services"
    },
    {
      title: "Consult with Agricultural Experts",
      description: "Book a consultation with our experts to get advice on improving your yield.",
      buttonText: "Book Now",
      image: "https://c8.alamy.com/comp/2H7EKDM/asian-man-in-cap-gesturing-hand-while-discusssing-new-cabbage-crop-with-young-agriculture-specialist-2H7EKDM.jpg",
      link: "/consultations"
    },
    {
      title: "Success Story: Meet Hari from Pokhara",
      description: "Hari increased his sales by 50% using our platform. Read his story.",
      buttonText: "Read More",
      image: "https://bsmedia.business-standard.com/_media/bs/img/article/2019-12/23/full/1577119614-8179.jpg?im=FeatureCrop,size=(826,465)",
      link: "/stories/hari"
    },
    {
      title: "Latest Market Prices",
      description: "Stay updated with the latest market prices for all your produce.",
      buttonText: "Check Prices",
      image: "https://img.freepik.com/premium-photo/cost-living-still-life_23-2151577296.jpg?w=996",
      link: "/prices"
    }
  ];

  return (
    <Container>
      <Carousel responsive={responsive} autoPlaySpeed={3000} infinite={true} autoPlay={true} arrows={false}  >
        { stories.map((story,index)=>(
 <div key={index} style={{ position: "relative" ,margin:"0 0px 30px 0px",}}>
 <Box
   sx={{
     boxShadow: 4,
     width:"auto",
     background: global.color.glob,
     padding: 2,
     textAlign: "center",
     borderRadius: 2,
     position: "relative",
     zIndex: 1,
    mr:1,ml:1
   }}
 >
 <Box sx={{height:190}}>
 <Box
     sx={{
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
     
     }}
   >
     <Avatar
       alt="Remy Sharp"
       src={story.image}
       sx={{
         boxShadow: 24,
         width: 56,
         height: 56,
       }}
     />
   </Box>
   <Typography
     sx={{
       fontSize: "1.2rem",
       fontWeight: "bold",
       color: "#fff",
       mt: 0.5,
     }}
   >
     {story.title}
   </Typography>
   <Typography
     sx={{
       padding: "2px 5px 8px",
       color: "#fff",
     }}
   >
     {story.description}
   </Typography>
 </Box>
   <Button
   sx={{
     position: "absolute",zIndex:2,
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     bgcolor: "#f06d16",
     color: "white",
     textTransform: "none",
     padding: "10px 25px",
     "&:hover": {
       bgcolor: "#fff",
       color:global.color.glob,border:"2px solid ",
      
     },mt:13
   }}
 >
  {story.buttonText}
 </Button>
 </Box>

 
</div>
        ))

        }

{/*        
           <div style={{ position: "relative" }}>
          <Box
            sx={{
              boxShadow: 24,
              width: { lg: "350px", xs: "350px" },
              background: global.color.glob,
              padding: 2,
              textAlign: "center",
              
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                sx={{
                  boxShadow: 24,
                  width: 56,
                  height: 56,
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#fff",
                mt: 0.5,
              }}
            >
              Meet Hari from Pokhara
            </Typography>
            <Typography
              sx={{
                padding: "2px 5px 8px",
                color: "#fff",mb:4
              }}
            >
              Hari increased his sales by 50% using our platform.
            </Typography>
            <Button
            sx={{
              position: "absolute",zIndex:2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#f06d16",
              color: "white",
              textTransform: "none",
              padding: "10px 25px",
              "&:hover": {
                bgcolor: "#fff",
                color:global.color.glob
               
              },mt:10
            }}
          >
            Read More
          </Button>
          </Box>

          
        </div>
           <div style={{ position: "relative" }}>
          <Box
            sx={{
              boxShadow: 24,
              width: { lg: "350px", xs: "350px" },
              background: global.color.glob,
              padding: 2,
              textAlign: "center",
              borderRadius: 2,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                sx={{
                  boxShadow: 24,
                  width: 56,
                  height: 56,
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#fff",
                mt: 0.5,
              }}
            >
              Meet Hari from Pokhara
            </Typography>
            <Typography
              sx={{
                padding: "2px 5px 8px",
                color: "#fff",mb:4
              }}
            >
              Hari increased his sales by 50% using our platform.
            </Typography>
            <Button
            sx={{
              position: "absolute",zIndex:2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#f06d16",
              color: "white",
              textTransform: "none",
              padding: "10px 25px",
              "&:hover": {
                bgcolor: "#fff",
                color:global.color.glob
               
              },mt:10
            }}
          >
            Read More
          </Button>
          </Box>

          
        </div> */}
      </Carousel>
    </Container>
  );
};

export default Testimonial;
