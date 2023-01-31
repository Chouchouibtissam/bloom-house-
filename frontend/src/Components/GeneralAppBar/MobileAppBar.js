import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

const MobileAppBarContainer = styled.aside`
position: fixed;
z-index: 999;
width:100%;
height:100%;
background: white;
display: grid;
align-items: center;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%': '0')};
top: ${({ isOpen }) => (isOpen ? '0': '-100%')};
`
const  Icon = styled.div`
position: absolute;
top:1.2rem;
right:1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
const CloseIcon = styled(FaTimes)` color: #000;`

const MobileAppBarWrapper = styled.div` color: #fff;`

const MobileAppBarMenu = styled.ul`
display: grid;
padding-inline-end: 40px;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
`
const MobileAppBarLinks = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration:none;
list-style: none;
transition: 0.2s ease-in-out;
color:#000;
cursor :pointer;
&:hover{
  color: Blue;
  transition: 0.2s ease-in-out;
}`
const MobileAppBarBottom = styled.div`
display: flex;
justify-content: center;`

const MobileAppBarbtnLink = styled(LinkRouter)`
border-radius: 50px;
background:blue;
white-space:nowrap;
padding:16px 64px;
color:white;
font-size: 16px;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
&:hover{
    transition: all 0.2s ease-in-out;
    background: #99CCFF;
    color: #000;
}
`
const MobileAppBar = ({isOpen, toggle}) => {
  return (
    <MobileAppBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileAppBarWrapper>
        <MobileAppBarMenu>
          <MobileAppBarLinks to="Home" onClick={toggle}>Home</MobileAppBarLinks>
          <MobileAppBarLinks to="Recherche" onClick={toggle}> Recherche</MobileAppBarLinks>
          <MobileAppBarLinks to="Mesannonces" onClick={toggle}>Mes annonces</MobileAppBarLinks>
          <MobileAppBarLinks to="ContactUs" onClick={toggle}>Contact Us</MobileAppBarLinks>
        </MobileAppBarMenu>
        <MobileAppBarBottom>
          <MobileAppBarbtnLink>Se déconnecter</MobileAppBarbtnLink>
        </MobileAppBarBottom>
      </MobileAppBarWrapper>
    </MobileAppBarContainer>
  )
}

export default MobileAppBar;