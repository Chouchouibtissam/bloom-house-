import React, { useState} from 'react'
import styled from 'styled-components';
import TypeWritertxt from '../Components/HomeComponents/TypeWritertxt';
import ImageAnimation from '../Components/HomeComponents/ImageAnimation';
import PropTypes from 'prop-types';
import AnnonceDetails from '../Components/Annonce/AnnonceDetails';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Section = styled.section`
min-height: 60vh /*calc(100vh - 80px);  100px -80px */
width: 100vw;
position: relative;
background-color: white;
`
const Container = styled.div`
width:75%;
min-height:60vh;
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
    const location = useLocation();
    let User_id = location.state.userId;
    
    return(
        <>
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

