import { Button, Typography,Box, styled } from "@mui/material";
import { useState } from "react";
import HouseImg from "../media/For sale-bro.png";
import "../Style/HeroStyle.css";


const Hero = () =>{
    const [clicked, setClicked]= useState(false);
    function handleclick  (clicked) {
     setClicked(!clicked);
    }
    
    const AuthButton = styled(Button)(({theme}) => ({
        backgroundColor: clicked ? "#202336" : "#16537e",
        color:"white",
        width:"200px",
        marginBlock:"30px",
        marginInlineEnd :"25px",
        textAlign:"center",
        paddingBlock:"10px",
        borderRadius:"0px",
        onClick : {handleclick},
        "&:hover":{
            backgroundColor:clicked ? "#202336" : "#16537e"
        }
        
        
   }));
    return (
        <Box  sx={{ 
            backgroundColor: "#E6F0FF", 
            height: '100vh',
            display:'flex',
            flexDirection:'row',
            }}
            >
            <div className="description">
                      <Typography variant="h3" >Find your perfect place with Bloom House</Typography>
                      <Typography >Adapt your house to your needs and make it heaven on earth.We provide a complet service for sale,
                         purchase and Rental of real estate
                      </Typography>
                      <span>
                        <AuthButton 
                          onClick={handleclick}>s'inscrire</AuthButton>
                        <AuthButton onClick={handleclick}>se connecter</AuthButton>
                      </span>  
            </div>
            <Box>
                <img 
                  className="house-Img"
                  src= {HouseImg}
                  alt="House"
                  />
            </Box>
        </Box>
    );
}
export default Hero;