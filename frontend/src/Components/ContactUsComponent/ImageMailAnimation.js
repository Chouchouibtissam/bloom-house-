import React from 'react'
import styled, { keyframes } from 'styled-components';
import MailImg from "../../media/Mail.png";

const updown = keyframes`
    0% {
        transform: translateY(-30px);
    }
    50% {
        transform: translateY(30px);
    }
    100% {
        transform: translateY(-30px);
    }
`
const ImageContainer = styled.div`
width:100%;
img{
    width:100%;
    height: auto;
    animation: ${updown} 3s linear infinite;
}
@media screen and (max-width:64em){
    min-width: 40vh;
}
 `

const ImageMailAnimation = () => {
  return (
    <ImageContainer>
      <img src={MailImg}  alt="House"/>
    </ImageContainer>
  )
}

export default ImageMailAnimation;