import React, { useRef, useState  } from 'react';
import styled, { keyframes } from 'styled-components';
import ImageAnimation from '../Components/HomeComponents/ImageAnimation';
import emailjs from '@emailjs/browser';
import ImageMailAnimation from '../Components/ContactUsComponent/ImageMailAnimation';


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
@media screen and (max-width:64em){  /* 1024px */
    width: 85%;
}
@media screen and (max-width:48em){/* 768px */
    flex-direction: column-reverse;
    width:100%;
    &>*:last-child{
        &>*:first-child{
            width:100%;
            margin-top: 0;
        }
       
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
const Form = styled.form`
dispaly: flex;
justify-content: center;
align-items: center;
width:100%;
height:400px;

@media screen and (max-width:48em){/* 768px */
   min-height: 60vh;
   width: auto;
}
`

const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  @media screen and (max-width:64em){  /* 1024px */
  grid-template-columns: 1fr;
}
`
const Div = styled.div`
 position: relative;
 margin-bottom: 1.875rem;
 height: 3.75rem;
 margin-left: 1.875rem;
 @media screen and (max-width:64em){  /* 1024px */
 margin-left: 0rem;
 margin-right: 1.875rem;
 height:3rem;
}
@media screen and (max-width:48em){/* 768px */
  height: 2rem;
}
 
`
const DivMessage = styled.div`
 position: relative;
 margin-bottom: 1.875rem;
 margin-left: 1.875rem;
 @media screen and (max-width:64em){  /* 1024px */
    margin-left: 0rem;
    margin-right: 1.875rem;
    margin-bottom: 0.625rem;
}
`
const Input = styled.input`
 font-family: "Akaya Telivigala", cursive;
 position: relative;
 top: 0;
 left:0;
 width:100%;
 height:100%;
 box-shadow: 0px 5px 20px 0px rgb(69 67 96 /10%);
 background-color: #fff;
 color: hsl(244, 16%,43%); 
 border: none;
 outline: none;
 border-radius: 1.875rem; 
 padding: 0.625rem 1.875rem;
 z-index: 1;
 @media screen and (max-width:64em){  /* 1024px */
   padding: 0.625rem;
}
@media screen and (max-width:48em){/* 768px */ 
    font-size: 0.80em;

}

`
const Textarea = styled.textarea`
font-family: "Akaya Telivigala", cursive;
position: relative;
 top: 0;
 left:0;
 width:100%;
 box-shadow: 0px 5px 20px 0px rgb(69 67 96 /10%);
 background-color: #fff;
 color: hsl(244, 16%,43%); 
 border: none;
 outline: none;
 border-radius: 1.875rem; 
 padding: 0.625rem 1.875rem;
 z-index: 1;
 @media screen and (max-width:64em){  /* 1024px */
   padding: 0.625rem;
   height: 80%;
}
@media screen and (max-width:48em){/* 768px */
     height: 5.75rem;
     font-size: 0.80em;
}
`
const btnpush = keyframes`
    50% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1);
    }
`
const Button = styled.button`
 padding: 0.75rem 2.5rem;
 line-height:1;
 border-radius: 1.875rem;
 box-shadow: 0 0 1px rgb(0 0 0 / 0%);
 border: 1px solid transparent;
 color: #fff;
 background-color: blue;
 font-weight: 700;
 &:hover{
   animation: ${btnpush} 0.3s linear 1;
 }
`
// Styles
const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      padding: '10px 30px',
      cursor: 'pointer',
    },
    buttonDisabled: {
      padding: '10px 30px',
      cursor: 'not-allowed',
    },
  };
  
const ContactUs = () => {
 
    const ref = useRef(null);
    
    /* la partie Emailjs */
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_x4h9atv', 'template_matzsmq', form.current, 'vdgVKp6WdAG7CtyDB')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            console.log(error.text);
        });
    };
    /* la partie handler event */
    // this determines whether the button is disabled or not
    const [isDisabled, setIsDisabled] = useState(false);

    // This function is called when the button is clicked the first time
     const handleClick = () => {
        alert('Hi there!');
        setIsDisabled(true);
    };
    return(
        <Section  id="ContactUs" ref={ref}>
        <Container>
         <Box> <ImageMailAnimation /> </Box>
         <Box>
         <Form ref={form} onSubmit={sendEmail}>
            <Group>
                <Div>
                   <Input type='text' name='user_name'
                    placeholder='Insérer votre nom'  />
                </Div>
                <Div>
                   <Input type='email' name='user_email'
                    placeholder='Insérer votre e-mail'  />
                </Div>
            </Group>
            <Div>
                   <Input type='text' name='object'
                    placeholder='Objet'  />
            </Div>
            <DivMessage className='Div-message'>
                 <Textarea name='message' id='' cols={30} rows="10"  placeholder='message'>
                 </Textarea>
            </DivMessage>
            <Button  disabled={isDisabled} onClick={handleClick}  style={isDisabled ? styles.buttonDisabled : styles.button}>Envoyer</Button>
           </Form>
         </Box>
        </Container>
     </Section>
    )
}
export default ContactUs;