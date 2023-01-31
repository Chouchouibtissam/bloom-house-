import React from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa'


const Nav = styled.nav`
background: #fff;
height:80px;
/*margin-top: -80px;*/
display: flex;
justify-content: center;
align-items:center;
font-size: 1rem;
position:sticky;
top:0;
z-index:10;
@media screen and (max-width:960px){
    transition: 0.8s all ease;
}
`
const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height:80px;
z-index:10;
width:100%;
padding:0 26px;
max-width: 1100px;
`
const Logo = styled(LinkRouter)`
font-family: "Akaya Telivigala", cursive;
color: Black;
justify-left: flex-start;
cursor:pointer;
font-size:1.5rem;
display: flex;
align-items:center;
font-weight:bold;
text-decoration:none;
`
const MobileIcon =styled.div`
display:none;
@media screen and (max-width: 864px){
    display:block;
    position:absolute;
    top:7px;
    right:0;
    transform: translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
}
`
const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
padding-inline-end: 40px;
@media screen and (max-width:864px){
    display:none;
}
`
const NavItem =styled.li`
height:80px;
`
const NavLinks = styled(LinkScroll)`
font-family: "Akaya Telivigala", cursive;
color: black;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height:100%;
cursor:pointer;
&.active{
    border-bottom: 3px solid blue;
}
`
const NavBotton = styled.nav`
display: flex;
align-items:center;
@media screen and (max-width:864px){
    display:none;
}
`
const NavBtnLink = styled(LinkRouter)`
border-radius: 50px;
background:#99CCFF;
white-space:nowrap;
padding:10px 22px;
color: black;
font-family: "Akaya Telivigala", cursive;
font-size: 16px;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
&:hover{
    transition: all 0.2s ease-in-out;
    background: #99CCFF;
    color: #fff;
}
`
const AppBar = ({toggle}) => {
   
    return(
          <Nav>
            <NavbarContainer>
                <Logo to='/'>bloom house</Logo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                     <NavLinks to="Home"
                      smooth={true} 
                      duration={10} 
                      spy={true} 
                      exact='true' 
                      offset={-80}
                     >Home</NavLinks>
                    </NavItem>
                    <NavItem>
                     <NavLinks to="Recherche" 
                      smooth={true} 
                      duration={10} 
                      spy={true} 
                      exact='true' 
                      offset={-80}
                      >Recherche</NavLinks>
                    </NavItem>
                    <NavItem>
                     <NavLinks to="Mesannonces"
                      smooth={true} 
                      duration={10} 
                      spy={true} 
                      exact='true' 
                      offset={-80}
                     >Mes annonces</NavLinks>
                    </NavItem>
                    <NavItem>
                     <NavLinks to="ContactUs"
                      smooth={true} 
                      duration={10} 
                      spy={true} 
                      exact='true' 
                      offset={-80}
                     >Contact Us</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBotton>
                    <NavBtnLink>Se déconnecter</NavBtnLink>
                </NavBotton>
            </NavbarContainer>
          </Nav>
        
    )
}
export default AppBar;