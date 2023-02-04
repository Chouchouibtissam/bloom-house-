import { Typography, Box, createTheme } from "@mui/material";
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseImg from "../media/house1.png";
import "../Style/HeroStyle.css";
import { ThemeProvider } from '@mui/material/styles';

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.body.appendChild(script)
  })



const GoogleAuth = () => {

  const googleButton = useRef();
  const navigate = useNavigate();


  useEffect(() => {
    const src = 'https://accounts.google.com/gsi/client' //the page that allows the user to sign in to his google account
    const id = "988845612593-0i5e8lgedah6mghcn6287ul5g8df6184.apps.googleusercontent.com" //Google client Id

    loadScript(src)
      .then(() => {
        /*global google*/
        google.accounts.id.initialize({ //Initialize the client with id mentionned above
          client_id: id,
          callback: handleCredentialResponse,
        })
        google.accounts.id.renderButton( //The google Sign in Button 
          googleButton.current,
          {
            theme: 'dark',
            size: 'large',     
          }
        )
      })
      .catch(console.error)

    return () => {
      const scriptTag = document.querySelector(`script[src="${src}"]`)
      if (scriptTag) document.body.removeChild(scriptTag)
    }
  }, [])


//Post the token to the backend
  function handleCredentialResponse(response) {
    if (response.credential) {
      var data = { "auth_token": response.credential }
      fetch("http://127.0.0.1:8000/google/",
        {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        })
        .then((res) => res.json())
        .then((res) => { //Retrieve the coonected user's id and navigate to the home page
          navigate('/Home', {state:{userId:res['user_id']}});
          console.log(res['user_id']);
          localStorage.setItem('User_id',res['user_id'])
        });

    }
  }

//Set the style for the typography
  const theme = createTheme({
    typography: {
      fontFamily: "cursive",
      fontSize: 17

    }
  })

  return (
    <div>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          background:'#E6F0FF',
          height : 620,
        }}
        >
          <div className="description">
            <ThemeProvider theme={theme}>
              <Typography variant="h3" sx={{marginBottom:2}} >Find the suitable place for you with Bloom House now</Typography>
              <Typography sx={{marginBottom:2}}  >Adapt your house to your needs .We provide a complet service for sale,
                purchase and Rental of real estate
              </Typography>
            </ThemeProvider>
            <div  id='google-login-btn'>
              <div className="button" ref={googleButton} id='google-ref'></div>
            </div>
          </div>
          <div>
            <img
              className="house-Img"
              src={HouseImg}
              alt="House"
            />
          </div>
        </Box>
    </div>
  )
}

export default GoogleAuth