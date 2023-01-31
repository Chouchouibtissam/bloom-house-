import React from 'react';
import styled from 'styled-components';

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
const Recherche =() =>{
    return(
        <Section id='Recherche'>
            <Container>
              <Box> <h2>Recherche</h2>   </Box>
              <Box> <h2>AI</h2> </Box>
            </Container>
        </Section>
       
    )
}
export default Recherche;