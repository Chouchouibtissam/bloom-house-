import { Button, Typography,Box } from "@mui/material";
import { Container, display, flexbox } from "@mui/system";
import HouseImg from "../media/For sale-bro.png";
import "../Style/HeroStyle.css";

const Hero = () =>{
    return (
        <Box  sx={{ 
            backgroundColor: "#E6F0FF", 
            height: '100vh',
            display:'flex',
            flexDirection:'row',
            
            }}
            >
            <Container className="container">
                      <Typography variant="h3" >Find your perfect place with Bloom House</Typography>
                      <Typography >Adapt your house to your needs and make it heaven on earth.We provide a complet service for sale,
                         purchase and Rental of real estate
                      </Typography>
                      <Container sx={{
                        flexDirection:'row'
                      }}>
                        <Button sx={{
                            backgroundColor:"#16537e",
                            color:"white",
                            margin:"20px"
                            
                        }}>
                            s'inscrire
                        </Button>
                        <Button  sx={{
                            backgroundColor:"#16537e",
                            color:"white",
                            margin:"20px",
                            paddingLeft:"20px",
                            paddingRight:"20px",
                            paddingTop:"10px",
                            paddingBottom:"10px"
                        }}>
                            se connecter
                        </Button>
                      </Container>  
            </Container>
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