import React from 'react'
import styled from 'styled-components';
import background from '../media/background.jpg'

const Section = styled.section`
width:100vw;
height:25rem;
position: relative;
background-color: lightblue;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`
const Box = styled.div`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
width:100%;
height:100%;
overflow: hidden;
`
const ImageBg = styled.img`
width :100%;
height:100%;
opacity: 0.5;
`

const Titre = styled.h1`
font-family: "Akaya Telivigala", cursive;
font-size:3em;
color: black;
z-index: 10;
text-transform: capitalize;
text-shadow: 1px 1px 2px #202020;
`
const Banner = () => {
  return (
    <Section id='banner'>
      <Box>  <ImageBg  src={background} />   </Box>
      <Titre>Real estate <br /> Bloom House</Titre>
    </Section>
  )
}

export default Banner;