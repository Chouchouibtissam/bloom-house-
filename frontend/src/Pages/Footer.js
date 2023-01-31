import React from 'react'
import styled from 'styled-components';
import Banner from '../Components/Banner';

const Section = styled.section`
min-height: calc(100vh - 80px); /* 100px -80px */
width: 100vw;
position: relative;
background-color: white;
display: flex;
flex-direction: column;
`
const Footer = () => {
  return (
    <Section id='Footer'>
    <Banner />
    </Section>
  )
}

export default Footer