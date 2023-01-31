import React from 'react'
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Title = styled.h2`
font-family: "Akaya Telivigala", cursive;
font-size: 3em;
text-transform: capitalize;
width: 80%;
color: black;
align-self: center;/*flex-start*/
 span{
     text-transform: uppercase;
     font-family: "Akaya Telivigala", cursive;
 }
 .text-1{
    color: blue;
 }
 .text-2{
    color:#99CCFF;
 }
 .text-3{
    color:skyblue;
 }
 @media screen and (max-width:70em){
    font-size: 2em;
}
@media screen and (max-width:48em){
    align-self: center;
    text-align: center;
}
@media screen and (max-width:40em){
    width:90%;
}
`

const TypeWritertxt = () => {
  return (
    <Title>
       Find your perfect place with 
       <Typewriter
         options={
            {
                autoStart: true,
                loop: true,
            }
         }
         onInit={(typewriter) => {
         typewriter.typeString('<span class="text-1">Bloom house</span>')
         .pauseFor(2500)
         .deleteAll()
         .typeString('<span class="text-2">Bloom house</span>')
         .pauseFor(2000)
         .deleteAll()
         .typeString('<span class="text-3">Bloom house</span>')
         .pauseFor(2000)
         .deleteAll()
         .start()
        }}
        />
    </Title>
  )
}

export default TypeWritertxt;