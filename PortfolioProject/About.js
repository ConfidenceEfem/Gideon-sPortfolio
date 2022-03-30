import React, { useState} from 'react'
import styled from "styled-components"
import img from "./images/gideon2.jpg"
import git from "./images/github.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import instagram from "./images/instagram.png"
import linkedln from "./images/linkedln.png"

const About = () => {
    
   return (
        <Container>
           <Wrapper>
    
            <PictureandAboutContainer>
                <AboutPictureContainer src={img}/>
                <DescandButtonCont>
                <AboutDescriptionContainer>
                    Gideon Ekeke is a young developer and an Intern at Codelab.
                    Gideon is a MERN Developer that has used his skill to solve
                    problems affecting his society. Gideon Ekeke hails from the Southern-East part
                    of Nigeria and he is a graduate of the presitigous university of Nigeria.
                    Gideon has worked with so many tech companies and with his few years experience in
                    the tech industry, we can confirm that he is a personality that we use 
                    software development to change his society.
                </AboutDescriptionContainer>
                <ButtonsHolder>
                    <a href="https://gideon-portfolo.web.app/?fbcl%20id=IwAR27tVKobNd2emMlborj5ujibLl4tyaxsXKWlcNu%20QUP89ikL-sS56mqjQ0o" target="_blank">
                    <FirstButton>Read More..</FirstButton>
                    </a>
                        <SecondButton>
                        <a href="https://gideon-portfolo.web.app/?fbcl
                        id=IwAR27tVKobNd2emMlborj5ujibLl4tyaxsXKWlcNu
                        QUP89ikL-sS56mqjQ0o" target="_blank">
                            My Projects
                            </a>
                            </SecondButton>
                </ButtonsHolder>
                </DescandButtonCont>
               
            </PictureandAboutContainer>
            <Footer>
                <FooterHOlder>
                    <FirstFooter>
                        <span>Codelab</span>
                        <span>Microsoft Entreprise</span>
                        <span>Andela Africa</span>
                        <span>Amazon Limited</span>
                    </FirstFooter>
                    <SecondFooter>
                        <span>Google Limited</span>
                        <span>Jumia Nigeria</span>
                        <span>Decagon Nigeria</span>
                    </SecondFooter>
                    <ThirdFooter>
                    <span>Developed by Dev. Confidence Efem @2021</span>
                    </ThirdFooter>
                </FooterHOlder>
            </Footer>
            <RightIconsBoxHolder>
                  <RightIconsBox>
                  <a href="https://www.facebook.com/gideon.ekeke.3?_rdc=1&_rdr" target="_blank">
                            <TheRightIcon src={git}/>
                            </a>
                            <a href="https://www.facebook.com/gideon.ekeke.3?_rdc=1&_rdr" target="_blank">
                            <TheRightIcon src={facebook}/>
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=2348121439674&text&app_absent=0" target="_blank">
                            <TheRightIcon src={linkedln}/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                            <TheRightIcon src={instagram}/>
                            </a>
                            <a href="https://www.twitter.com/" target="_blank">
                            <TheRightIcon src={twitter}/>
                            </a>
                        </RightIconsBox>
                        
                        </RightIconsBoxHolder>
                     
           </Wrapper>
        </Container>
    )
}

export default About 

const MyName = styled.div`
display:none;
@media screen and (min-width: 320px) and (max-width: 700px){
    color: white;
    display: flex;
text-align: center;
font-size: 16px;
width: 100%;
justify-content: center;
}
    @media screen and (min-width: 700px) and (max-width: 1024px){
color: white;
display: flex;
text-align: center;
font-size: 18px;
justify-content: center;
    }
`

const RightIconsBoxHolder = styled.div`
    @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    background-color: #252531;
    margin: 30px;
    }
`

const RightIconsBox = styled.div`
    display: none;

    @media screen and (min-width: 320px) and (max-width: 500px){
        display: block;
        //border-top: solid gray 1px;
        width: 80%;
        height: 20px;
        display: flex;
        //background-color:purple;
        align-items: center;
        justify-content: space-between;
        //padding-top :20px;
     
    }
`
const TheRightIcon = styled.img`
    width: 15px;
    height: 15px;
    object-fit: cover;
    margin-right: 10px;
`

const Footer = styled.div`
padding-top: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 320px) and (max-width: 500px) {
        display: none;
        margin-bottom: 20px;
    }
`
const FooterHOlder = styled.div`
    width: 70%;
    //background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
const FirstFooter = styled.div`
    width: 100%;
    height: 30px;
    //background-color: indigo;
    margin-bottom: 20px;
    padding-left: 240px;
    span{
        width: 60px;
        border-right: 2px solid gray;
        color: lightgray;
        padding-right: 50px;
        font-weight: bold;
        margin-right: 50px;
        transition: all 350ms;
        cursor: pointer;
        font-size: 14px;
        :hover{
        color: gray;
    }
    }
   
`
const SecondFooter = styled.div`
width: 70%;
height: 30px;
padding-left: 200px;
cursor: pointer;
        font-size: 14px;
//background-color: indigo;
margin-bottom: 20px;
align-items: center;
span{
    width: 60px;
    border-right: 2px solid gray;
    color: lightgray;
    padding-right: 40px;
    font-weight: bold;
    margin-right: 40px;
    :hover{
        color: gray;
    }
}


`
const ThirdFooter = styled.div`
width: 40%;
height: 30px;
font-size: 12px;
//background-color: lightgray;
margin-bottom: 20px;
display: flex;
justify-content: center;
    
    
    color: lightgray;
    
    font-weight: bold;
  
:hover{
    span{
        color: gray;
    }
}
`

const FirstButton = styled.div`
    width: 100px;
    height: 40px;
    background-color: gray;
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
    text-decoration: none;
    color: white;
    :hover{
        opacity: 0.6;
        border: solid 1px red;
        transition: all 350ms;
    }
    @media screen and (min-width: 320px) and (max-width: 500px) {
        height: 30px;
        width: 80px;
        font-size: 10px;
    }
`
const SecondButton = styled.a`
    width: 100px;
    height: 40px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    //border: solid 2px whitesmoke;
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
    //text-decoration: none;
    color: white;
    :hover{
        opacity: 0.4;
        border: solid 1px whitesmoke;
        transition: all 350ms;
        color: white;
    }
    @media screen and (min-width: 320px) and (max-width: 500px) {
        height: 30px;
        width: 80px;
        font-size: 10px;
    }
`

const ButtonsHolder = styled.div`
    width: 100%;
    display: flex;
    @media screen and (min-width: 320px) and (max-width: 500px) {
        width: 98%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
       // background-color: #1D1D27;

    }
`

const Container = styled.div`
    width: 100%;
    height: 100%auto;
    color: white;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    //background-color: purple;
   @media screen and (min-width: 320px) and (max-width: 500px) {
       width: 100%;
       height: 100%auto;
       background-color: #1D1D27;
   }
`
const Wrapper = styled.div`
    width: 96%;
    display: flex;
    //background-color: red;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 320px) {
        width: 100%;
        height: 100%;
    }
`

const PictureandAboutContainer = styled.div`
    width: 65%;
    height: 60%;
    display: flex;
    //background-color: blue;
    //align-items: center;
    //padding-top: 20px;
    justify-content: space-between;
    margin-bottom: 80px;
    flex-wrap: wrap;
    @media screen and (min-width: 320px) and (max-width: 500px) {
        width: 100%; 
        //height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

`
const AboutPictureContainer = styled.img`
    width: 330px;
    height: 100%;
    object-fit: cover;
    border: solid 2px #F5c443;
    transition: all 350ms;
    border-radius: 10px;
    :hover{
      transform: scale(1.03);
    }
    @media screen and (min-width: 320px) and (max-width: 500px) {
        width: 200px;
        height: 250px;
        margin-bottom: 20px;
    }
   
`

const DescandButtonCont = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
   // background-color: green;
   @media screen and (min-width: 320px) and (max-width: 500px) {
       width: 100%;
       height: 220px;
   }

`
const AboutDescriptionContainer = styled.div`
    width: 400px;
    //height: 300px;
    text-align: left;
    color: lightgray;
    //border: solid gray 2px;
    transition: all 350ms;
    :hover{
        color: #F5c443;
        cursor: pointer;
    }
    @media screen and (min-width: 320px) and (max-width: 500px){
        font-size:12px;
        width: 98%;
        text-align: center;
        margin-bottom: 60px;
    }
`