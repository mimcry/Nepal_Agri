import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,Box,
  IconButton,Typography
} from "@mui/material";
import {Link }from "@mui/material";
import logo from "../Images/logo.webp";
import MenuIcon from "@mui/icons-material/Menu";
function Hamburger() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const list = ["Home", "MarketPlace", "Resources", "Contact"];
  return (
    <React.Fragment  >
      <Box sx={{mr:-12}} ><Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
      <Box
              component="img"
              src={logo}
              sx={{ maxWidth: 50, borderRadius: 200, cursor: "pointer",alignSelf:"center"  }}
            />
            <Typography
              sx={{
                alignSelf: "center",
                fontSize: "1.4rem",
                fontWeight: "bold",
                cursor: "pointer",

                
                width: { md: 330 },
                color:"#387B36"
              }}
            >
              Agri Nepal
            </Typography>
        <List >

         {list.map((page,index)=>(
        //    <Link to={page} spy={true} smooth={true}>
           <ListItemButton onClick={()=>setOpenDrawer(false)} key={index} sx={{bgcolor:"#387B36",mb:0.5,"&:hover":{bgcolor:"green"}}} >
           <ListItemIcon  >
             <ListItemText  sx={{color:"white",textDecoration:"none",}}>{page}</ListItemText>
           </ListItemIcon>
         </ListItemButton>
        //  </Link>
         ))}
        </List>
      </Drawer></Box >
      <IconButton sx={{marginLeft:11,color:"white",mr:2}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>
    </React.Fragment>
  );
}

export default Hamburger;
