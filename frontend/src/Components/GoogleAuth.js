import { Typography, Box } from "@mui/material";
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseImg from "../media/For sale-bro.png";
import "../Style/HeroStyle.css";
import Home from '../Pages/Home.js';
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
    const src = 'https://accounts.google.com/gsi/client' //the page that we need to display
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
            theme: 'outline',
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
        .then((res) => {
          navigate('/Ajouterannonce', {state : {userId : res['user_id']}})
        })

    }
  }

  return (
    <Box sx={{
      backgroundColor: "#E6F0FF",
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
    }}
    >
      <div className="description">
        <Typography variant="h3" >Find your perfect place with Bloom House</Typography>
        <Typography >Adapt your house to your needs and make it heaven on earth.We provide a complet service for sale,
          purchase and Rental of real estate
        </Typography>
        <div id='google-login-btn'>
          <div ref={googleButton} id='google-ref'></div>
          <div>
            <div>
              <label>Email Id:</label>
              <label id='email_id'></label>
            </div>
            <div>
              <label>Auth token:</label>
              <label id='auth_token'></label>
            </div>
            <div>
              <label>User id:</label>
              <label id='user_id'></label>
            </div>

          </div>
        </div>
      </div>
      <Box>
        <img
          className="house-Img"
          src={HouseImg}
          alt="House"
        />
      </Box>
    </Box>
  )
}

export default GoogleAuth