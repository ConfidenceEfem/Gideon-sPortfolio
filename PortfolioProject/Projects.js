import React from 'react'
import styled from "styled-components"
import Todo from "./images/TodoApp.jpg"
import udeme from "./images/udeme.png"
import weather from "./images/weather.jpg"
import services from "./images/services.png"
import security from "./images/security.jpg"
import movie from "./images/movie.jpg"
import git from "./images/github.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import instagram from "./images/instagram.png"
import linkedln from "./images/linkedln.png"

const Projects = () => {
    return (
        <Container>
        <Wrapper>
            <ProjectBoxHolder>
                <ProjectBox>
                    <ProjectImage src={Todo}/>
                    <ProjectName>To Do Web App</ProjectName>
                    <ProjectDesc> An App that allows you to create your daily task.
                          The app makes you monitor your daily progress towards
                          crushing your goal. </ProjectDesc>
                    <a href="https://www.google.com" target="_blank"><MainSiteLink>Visit Site</MainSiteLink></a>
                </ProjectBox>
                <ProjectBox>
                    <ProjectImage src={udeme}/>
                    <ProjectName>Udeme Kitchen App</ProjectName>
                    <ProjectDesc>Udeme Kitchen App is an e-commerce Site
                          that makes life more easier for you. You can buy,
                          order and sell your food products using this app</ProjectDesc>
                    <a href="https://www.google.com" target="_blank"><MainSiteLink>Visit Site</MainSiteLink></a>
                </ProjectBox>
                <ProjectBox>
                    <ProjectImage src={weather}/>
                    <ProjectName>Weather Application App</ProjectName>
                    <ProjectDesc>With this weather app you can ascertain the weather conditions 
                          of any place around the world. It makes travel and many other activities 
                          easier.</ProjectDesc>
                    <a href="https://www.google.com" target="_blank"><MainSiteLink>Visit Site</MainSiteLink></a>
                </ProjectBox>
                <ProjectBox>
                    <ProjectImage src={services}/>
                    <ProjectName>Services Locator App</ProjectName>
                    <ProjectDesc>Services Locator App is an e-commerce Site
                         that makes someone who is in need of a service
                         get in touch with the right person at that time..</ProjectDesc>
                    <a href="https://www.google.com" target="_blank"><MainSiteLink>Visit Site</MainSiteLink></a>
                </ProjectBox>
                <ProjectBox>
                    <ProjectImage src={security}/>
                    <ProjectName>Ajegunle Security App</ProjectName>
                    <ProjectDesc>Ajegunle Security App gives you access the security state
                           of a place. With this app you can be able to post and also to 
                          ascertain if where you are is safe or not.</ProjectDesc>
                    <a href="https://www.google.com" target="_blank"><MainSiteLink>Visit Site</MainSiteLink></a>
                </ProjectBox>
                <ProjectBox>
                    <ProjectImage src={movie}/>
                    <ProjectName>Movie Collection App</ProjectName>
                    <ProjectDesc> Movie Collection App is an app that gives us the opportunity 
                          latest and trending videos. It also gives us access to download this 
                          video to our devices.</ProjectDesc>
                    <a href="https://www.google.com" target="_blank"><MainSiteLink>Visit Site</MainSiteLink></a>
                </ProjectBox>
            </ProjectBoxHolder>
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
                  <a href="https://www.github.com/" target="_blank">
                            <TheRightIcon src={git}/>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                            <TheRightIcon src={facebook}/>
                            </a>
                            <a href="https://www.linkedln.com/" target="_blank">
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

export default Projects

const RightIconsBoxHolder = styled.div`
    @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
    background-color: #252531;
    }
`

const RightIconsBox = styled.div`
    display: none;

    @media screen and (min-width: 320px) and (max-width: 500px) {
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
/* padding-top: 40px; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 320px) and (max-width: 500px) {
        display: none;
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


const ProjectBoxHolder = styled.div`
width: 85%;
margin-top: 30px;
display: flex;
flex-wrap:wrap;
margin-bottom: 70px;
justify-content:center;
@media screen and (max-width: 320px) {
    display: flex;
    flex-direction: column;
    margin-bottom:60px;
    width:100%;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
}
`
const ProjectBox = styled.div`
    width: 250px;
    height: 300px;
    background-color: #2C2C36;
    border-radius: 8px;
    margin: 35px;
    @media screen and (max-width: 320px) {
        width:260px;
        height: 300px;
        display: flex;
        justify-content: center;
        //align-items: center
        flex-direction: column;
        padding-top: 0px;
    }
`
const ProjectImage = styled.img`
    width: 100%;
    height: 50%;
    object-fit: cover;
    //background-color: blue;
    border-radius:10px 10px 0 0;
    @media screen and (max-width: 320px) {
        width: 100%;
    }
`
const ProjectName = styled.div`
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin: 9px 0;
    @media screen and (max-width: 320px) {
        font-size: 14px;
        margin: 7px 0;
    }
`
const ProjectDesc = styled.div`
    width: 95%;
    text-align: center;
    margin-bottom: 15px;
    font-size: 12px;
    padding-left: 7px;
    @media screen and (max-width: 320px) {
        width: 96%;
        font-size:11px;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        padding-left: 5px;
    }
`
const MainSiteLink = styled.div`
    text-align: center;
    font-size: 11px;
    color: red;
    cursor: pointer;
    :hover{
        color: lightblue;
    }
@media screen and (max-width: 320px) {
    font-size: 11px;
}    
`

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%auto;
    color: white;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    
    @media screen and (max-width: 320px) {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1D1D27;
        /* margin-top: -30px; */
    }
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    /* background-color: white; */
    @media screen and (max-width: 320px) {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
       
       
    }
`
