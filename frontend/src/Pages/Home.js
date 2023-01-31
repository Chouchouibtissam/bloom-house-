import React, { useState} from 'react'
import AppBar from '../Components/GeneralAppBar/AppBar';
import MobileAppBar from '../Components/GeneralAppBar/MobileAppBar';
import styled from 'styled-components';
import TypeWritertxt from '../Components/HomeComponents/TypeWritertxt';
import ImageAnimation from '../Components/HomeComponents/ImageAnimation';
import PropTypes from 'prop-types';

const Section = styled.section`
min-height: calc(100vh - 80px); /* 100px -80px */
width: 100vw;
position: relative;
background-color: white;
`
const Container = styled.div`
width:75%;
min-height:80vh;
margin: 0 auto;
background-color: white;
display: flex ;
justify-content: center;
align-items: center;
@media screen and (max-width:64em){
    width: 85%;
}
@media screen and (max-width:48em){
    flex-direction: column-reverse;
    width:100%;
    &>*:first-child{
        width:100%;
        margin-top: 2rem;
    }
}
`
const Box = styled.div`
width:50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Home = () => {
   const[isOpen, setIsOpen]=useState(false)
   const toggle = () =>{
    setIsOpen(!isOpen)
   }
    return(
        <>
         <MobileAppBar isOpen={isOpen} toggle={toggle} />
         <AppBar toggle={toggle} />
         <Section className='Home' id="Home">
            <Container>
              <Box> <TypeWritertxt />   </Box>
              <Box> <ImageAnimation /> </Box>
            </Container>
         </Section>
        </>
    )
}
Home.propTypes = {
    window: PropTypes.func,
};
  
export default Home;

