import { Button, Typography,Box, styled } from "@mui/material";
import HouseImg from "../media/For sale-bro.png";
import "../Style/HeroStyle.css";
import GoogleLogin from "react-google-login";
import axios from "axios";
// get env vars
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const drfClientId = process.env.REACT_APP_DRF_CLIENT_ID;
const drfClientSecret = process.env.REACT_APP_DRF_CLIENT_SECRET;
const baseURL = "http://localhost:3000";

const handleGoogleLogin = (response) => {
  axios
    .post(`${baseURL}/auth/convert-token`, {
      token: response.accessToken,
      backend: "google-oauth2",
      grant_type: "convert_token",
      client_id: drfClientId,
      client_secret: drfClientSecret,
    })
    .then((res) => {
      const { access_token, refresh_token } = res.data;
      console.log({ access_token, refresh_token });
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
    })
    .catch((err) => {
      console.log("Error Google login", err);
    });
};


const Hero = () =>{
    
    const AuthButton = styled(Button)(({theme}) => ({
        backgroundColor: "#202336" ,
        color:"white",
        width:"200px",
        marginBlock:"30px",
        marginInlineEnd :"25px",
        textAlign:"center",
        paddingBlock:"10px",
        borderRadius:"0px",
        "&:hover":{
            backgroundColor: "#202336" 
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
                        <GoogleLogin
                        clientId={googleClientId}
                        onSuccess={(response) => handleGoogleLogin(response)}
                        render={(renderProps) => (
                            <AuthButton
                             onClick={renderProps.onClick}
                             disabled={renderProps.disabled}
                            >
                              s'inscrire
                            </AuthButton>)}
                            onFailure={(err) => console.log("Google Login failed", err)}
                        />       
                        <AuthButton >se connecter</AuthButton>
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