import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import check from "./images/check1.png"
import git from "./images/github.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import instagram from "./images/instagram.png"
import linkedln from "./images/linkedln.png"
import gideon from "./images/gideon.jpg"
import bodyImage from "./images/bodyImage.jpg"
import webimage from "./images/webimage.png"
import img from "./images/img.jpg"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.png"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import Todo from "./images/TodoApp.jpg"
import udeme from "./images/udeme.png"
import weather from "./images/weather.jpg"
import services from "./images/services.png"
import security from "./images/security.jpg"
import movie from "./images/movie.jpg"
import a from "./images/1.jpeg"
import b from "./images/2.jpg"
import c from "./images/3.jpg"
import d from "./images/4.jpg"
import e from "./images/5.jpg"

const Portfoliobody = () => {
   const [counter, setCounter] = useState(0)

useEffect(()=>{
       setInterval(()=>{
        setCounter((e)=>e+1)
       },3000)
   },[])

   const [images, SetImages] = useState([a, b, c, d, e])
    return (
        <Container>
          <Wrapper>
              <LeftContainer>
                  <ProfileContainer>
                      <ProfileImage src={gideon}/>
                     <NameContainer>Gideon Ekeke</NameContainer>
                     <Occupation>Full Stack Software Developer and UI/UX designer</Occupation>
                  </ProfileContainer>
                  <DetailsContainer>
                      <DetailsContent>
                          <Details>
                              <FirstDetails>Residence</FirstDetails>
                              <SecondDetails>Nigeria</SecondDetails>
                          </Details>
                          <Details>
                              <FirstDetails>City</FirstDetails>
                              <SecondDetails>Lagos</SecondDetails>
                          </Details>
                          <Details>
                              <FirstDetails>Age</FirstDetails>
                              <SecondDetails>20</SecondDetails>
                          </Details>
                      </DetailsContent>
                  </DetailsContainer>
                  <ProgressContainer>
                      <Progress>
                          <NameandLineCont>
                              <NameCont>
                                  <MainName>html</MainName>
                                  <DetailsName>90%</DetailsName>
                              </NameCont>
                              <LineCont>
                                  <YellowCont></YellowCont>
                              </LineCont>
                          </NameandLineCont>
                          <NameandLineCont>
                              <NameCont>
                                  <MainName>CSS</MainName>
                                  <DetailsName>98%</DetailsName>
                              </NameCont>
                              <LineCont>
                                  <YellowCont1></YellowCont1>

                              </LineCont>
                          </NameandLineCont>
                          <NameandLineCont>
                              <NameCont>
                                  <MainName>JS</MainName>
                                  <DetailsName>85%</DetailsName>
                              </NameCont>
                              <LineCont>
                                  <YellowCont2></YellowCont2>
                              </LineCont>
                          </NameandLineCont>
                          <NameandLineCont>
                              <NameCont>
                                  <MainName>ReactJS</MainName>
                                  <DetailsName>95%</DetailsName>
                              </NameCont>
                              <LineCont>
                                  <YellowCont3></YellowCont3>
                                 
                              </LineCont>
                          </NameandLineCont>
                          <NameandLineCont>
                              <NameCont>
                                  <MainName>NodeJS</MainName>
                                  <DetailsName>90%</DetailsName>
                              </NameCont>
                              <LineCont>
                                  <YellowCont4></YellowCont4>
                              </LineCont>
                          </NameandLineCont>
                      </Progress>
                  </ProgressContainer>
                  <CheckBoxContainer>
                      <TheBoxCont>
                          <CheckAndContent>
                              <Check src={check}/>
                              <Content>BootStrap Materialize</Content>
                          </CheckAndContent>
                          <CheckAndContent>
                              <Check src={check}/>
                              <Content>Express Knowledge</Content>
                          </CheckAndContent>
                          <CheckAndContent>
                              <Check src={check}/>
                              <Content>ReactJS expert</Content>
                          </CheckAndContent>
                          <CheckAndContent>
                              <Check src={check}/>
                              <Content>Git Knowledge</Content>
                          </CheckAndContent>
                          <CheckAndContent>
                              <Check src={check}/>
                              <Content>ReactJS experienced</Content>
                          </CheckAndContent>
                      </TheBoxCont>
                  </CheckBoxContainer>
                    <FooterIcon>
                        <IconsBox>
                            <a href="https://www.github.com/" target="_blank">
                            <TheIcon src={git}/>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                            <TheIcon src={facebook}/>
                            </a>
                            <a href="https://www.linkdeln.com/" target="_blank">
                            <TheIcon src={linkedln}/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                            <TheIcon src={instagram}/>
                            </a>
                            <a href="https://www.twitter.com/" target="_blank">
                            <TheIcon src={twitter}/>
                            </a>
                        </IconsBox>
                    </FooterIcon>
              </LeftContainer>
              <RightContainer>
                  <PictureContainer src={images[counter%images.length]}/>
                  <marquee>
                  <RightTextContainer>
                  
                      <FirstRightText>
                          
                          <YellowText>2+ </YellowText>
                          <WhiteText>Years Experience</WhiteText>
                      </FirstRightText>
                     
                      <FirstRightText>
                          <YellowText>12+ </YellowText>
                          <WhiteText>Completed Project</WhiteText>
                      </FirstRightText>
                      <FirstRightText>
                          <YellowText>20+ </YellowText>
                          <WhiteText>Happy Customers</WhiteText>
                      </FirstRightText>
                      <FirstRightText>
                          <YellowText>5+ </YellowText>
                          <WhiteText>Honors and Awards</WhiteText>
                      </FirstRightText>
                    
                  </RightTextContainer>
                  </marquee>
                  <MyProjectText>
                    
                      <TheTextDev>
                          Dev. Gideon Ekeke Projects
                          </TheTextDev>
                
                      </MyProjectText>
                  <ProjectContainerHolder>
                  <ProjectContainer>
                      <ProjectImage src={Todo}/>
                      <ProjectName>To Do Web App</ProjectName>
                      <ProjectDescription>
                          An App that allows you to create your daily task.
                          The app makes you monitor your daily progress towards
                          crushing your goal. 
                      </ProjectDescription>
                      <a href="https://personeltodo.firebaseapp.com/"  target= "_blank">
                      <ProjectLink>
                          Visit Site
                          </ProjectLink></a>
                  </ProjectContainer>
                  <ProjectContainer>
                      <ProjectImage src={udeme}/>
                      <ProjectName>Udeme Kitchen App</ProjectName>
                      <ProjectDescription>
                          Udeme Kitchen App is an e-commerce Site
                          that makes life more easier for you. You can buy,
                          order and sell your food products using this app
                      </ProjectDescription>
                      <a href="https://udemekitchen.herokuapp.com/"  target= "_blank">
                      <ProjectLink>
                          Visit Site
                          </ProjectLink></a>
                  </ProjectContainer>
                  <ProjectContainer>
                      <ProjectImage src={weather}/>
                      <ProjectName>Weather Application App</ProjectName>
                      <ProjectDescription>
                          With this weather app you can ascertain the weather conditions 
                          of any place around the world. It makes travel and many other activities 
                          easier.
                      </ProjectDescription>
                      <a href="https://wetherreact.herokuapp.com/"  target= "_blank">
                      <ProjectLink>
                          Visit Site
                          </ProjectLink></a>
                  </ProjectContainer>
                  <ProjectContainer>
                      <ProjectImage src={services}/>
                      <ProjectName>Services Locator App</ProjectName>
                      <ProjectDescription>
                         Services Locator App is an e-commerce Site
                         that makes someone who is in need of a service
                         get in touch with the right person at that time.
                      </ProjectDescription>
                      <a href="https://myservicecon.web.app/"  target= "_blank">
                      <ProjectLink>
                          Visit Site
                          </ProjectLink></a>
                  </ProjectContainer>
                  <ProjectContainer>
                      <ProjectImage src={security}/>
                      <ProjectName>Ajegunle Security App</ProjectName>
                      <ProjectDescription>
                          Ajegunle Security App gives you access the security state
                           of a place. With this app you can be able to post and also to 
                          ascertain if where you are is safe or not.
                      </ProjectDescription>
                      <a href="https://security-dev-project.firebaseapp.com/"  target= "_blank">
                      <ProjectLink>
                          Visit Site
                          </ProjectLink></a>
                  </ProjectContainer>
                  <ProjectContainer>
                      <ProjectImage src={movie}/>
                      <ProjectName>Movie Collection App</ProjectName>
                      <ProjectDescription>
                          Movie Collection App is an app that gives us the opportunity 
                          latest and trending videos. It also gives us access to download this 
                          video to our devices.
                      </ProjectDescription>
                      <a href="https://redux-movie.herokuapp.com/"  target= "_blank">
                      <ProjectLink>
                          Visit Site
                          </ProjectLink></a>
                  </ProjectContainer>
                  </ProjectContainerHolder>
                  <RightIconsBoxHolder>
                  <RightIconsBox>
                  <a href="https://github.com/gideonekekeke" target="_blank">
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
                        <MyName>Designed by: Confidence Efem</MyName>
              </RightContainer>
          </Wrapper>
        </Container>
    )
}

export default Portfoliobody 

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
    @media screen and (min-width: 320px) and (max-width: 700px){
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 5px; */
    background-color: #252531;
    margin-bottom: 10px;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px){
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 5px; */
    background-color: #252531;
    margin-bottom: 10px;
    }

`

const RightIconsBox = styled.div`
    display: none;

    @media screen and (min-width: 320px) and (max-width: 700px){
        display: block;
        //border-top: solid gray 1px;
        width: 80%;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
     }
    @media screen and (min-width: 700px) and (max-width: 1023px){
        display: block;
        //border-top: solid gray 1px;
        width: 80%;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
     }
`
const TheRightIcon = styled.img`
    width: 15px;
    height: 15px;
    object-fit: cover;
    margin-right: 10px;
`

const ProjectContainerHolder = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    @media screen and (min-width: 320px) and (max-width: 700px){
        width: 100%;
        height: 100%;
        display: flex;
       margin-left: 0px;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px) {
        margin-left: 30px;

    }
`

const ProjectContainer = styled.div`
    width: 220px; 
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: #2C2C36;
    border-radius: 7px;
    margin-right: 70px;
    margin-bottom: 30px;
    border: solid 1px gray;
    transition: all 350ms;
    :hover{
        border: solid 1px lightgray;
        transform: scale(1.02);
        transition: all 350ms;
    }
    @media screen and (min-width: 320px) and (max-width: 700px){
        width: 80%;
        height: 320px;
        margin-right: 0px;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px) {
       width: 300px;
       height: 350px;
       margin-right: 60px; 
    }
`
const ProjectImage = styled.img`
    width: 100%;
    height: 45%;
    object-fit: cover;
    background-color: white;
    border-radius: 7px 7px 0 0;
    @media screen and (min-width: 700px) and (max-width: 1024px) {
       height: 50%;
    }
`
const ProjectName = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    margin: 12px 0;
    color: white;
    @media screen and (min-width: 700px) and (max-width: 1024px) {
       font-size: 16px;
    }
`
const ProjectDescription = styled.div`
    font-size: 12px;
    text-align: center;
    margin: 0 7px;
    margin-bottom: 12px;
    color: lightgray;
    @media screen and (min-width: 700px) and (max-width: 1024px) {
       font-size: 13px;
    }
`
const ProjectLink = styled.div`
    margin: 0 8px;
    font-size: 10px;
    text-align: center;
    //background-color: blue;
    color: red;
    cursor: pointer;
    :hover{
        color: lightblue;
    }
`

const MyProjectText = styled.div`
    width: 100%;
    
    margin-bottom: 25px;
 
  
    display: flex;
    justify-content: center;
    align-items: center;


     @media screen and (min-width: 320px) and (max-width: 700px){
         text-align: center;
    }
     @media screen and (min-width: 700px) and (max-width: 1024px){
         text-align: center;
    }
`

const TheTextDev = styled.div`
font-size: 20px;
font-weight: bold;
color: white;
font-family: monospace;
overflow: hidden;
letter-spacing: 2px;
width: 340px;
animation: typing 9s steps(30, end), blink .75s step-end infinite;
    white-space: nowrap;
    border-right: 4px solid orange;
    box-sizing: border-box;
    width: 340px;

    @keyframes typing {
        from {
            width: 0%;
        }
        to {
            width: 340px;
        }
    }

    @keyframes blink {
        from, to {
            border-color: transparent;
        };
        50% {
            border-color: orange;
        };
    }

    @media screen and (min-width: 320px) and (max-width: 700px) {
        font-size:15px;
        width: 270px;
        @keyframes typing {
            from {
                width: 0%;
            }
            to {
                width: 270px;
            }
        }
    }
    @media screen and (min-width: 700px) and (max-width: 1024px) {
        font-size:30px;
        width: 500px;
        margin-bottom: 30px;
        @keyframes typing {
            from {
                width: 0%;
            }
            to {
                width: 500px;
            }
        }
    }
`

const RightTextContainer = styled.div`
    width: 95%;
    height: 40px;
    display: flex;
    align-items: center;
    //background-color: blue;
    display: flex;
    justify-content: space-between;
    transition: all 350ms;
    margin-bottom: 25px;
    @media screen and (min-width: 320px) and (max-width: 700px) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 20px;
        margin-bottom: 15px;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 40px;
        margin-bottom: 35px;
    }
`
const FirstRightText = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    margin-right: 18px;
    @media screen and (min-width: 320px) and (max-width: 700px){
        margin-right: 6px;
     }
    @media screen and (min-width: 700px) and (max-width: 1024px){
        margin-right: 10px;
     }
`
const YellowText = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: #F5c443;
    //font-family: Poppins;
    letter-spacing: 0.8px;
    margin-right: 15px;
    font-weight: bold;
    @media screen and (min-width: 320px) and (max-width: 700px) {
        font-size: 9px;
        margin-right: 4px;
        letter-spacing: 0px;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px) {
        font-size: 29px;
        margin-right: 6px;
        letter-spacing: 0px;
    }
`
const WhiteText = styled.div`
    font-size: 10px;
    color: white;
    font-weight: bold;
    @media screen and (min-width: 320px) and (max-width: 700px) {
        font-size: 5px;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px) {
        font-size: 12px;
    }
`

const PictureContainer = styled.img`
    width: 100%;
    height: 30%;
    // background-image: url(${bodyImage});
    object-fit: cover;
    //background-size: cover;
    //background-repeat: no-repeat;
    margin-bottom: 10px;
    border: solid lightgray 2px;
    @media screen and (min-width: 320px) and (max-width: 700px) {
        width: 100%;
        height: 250px;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px) {
        width: 100%;
        height: 450px;
    }
`

const OnlyPicture = styled.div``
const PictureText = styled.div``
const FirstPictureText = styled.div``

const FooterIcon = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #252531;
    @media screen and (min-width: 320px) and (max-width: 700px){
        display: none;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px){
        display: none;
    }
`
const IconsBox = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    //background-color:purple;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 320px) and (max-width: 700px){
        display: none;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px){
        display: none;
    }
`
const TheIcon = styled.img`
    width: 15px;
    height: 15px;
    object-fit: cover;
    margin-right: 10px;
`

const CheckBoxContainer = styled.div`
    width: 100%;
    height: 175px;
    display: flex;
    justify-content: center;
    // align-items: center;
    //background-color: purple;
    //margin-bottom: 10px;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        display: flex;
        justify-content: center;
         align-items: center;
         flex-wrap: wrap;
    }
`
const TheBoxCont = styled.div`
    width: 90%;
    height: 125px;
    display: flex;
    flex-direction: column;
    //background-color: green;
    padding-bottom: 45px;
    //border-bottom: solid 2px gray;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;;
        align-items: center;
        flex-wrap: wrap;
        
    }
`
const CheckAndContent = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    //background-color: purple;
    align-items: center;
    margin-bottom: 5px;
    @media screen and (min-width: 700px) and (max-width: 1024px){
       width: 45%;
       display: flex;
       align-items: center;
       /* justify-content: center; */
       margin-bottom: 30px;
       /* background-color: blue; */
       margin-right: 10px;
    }
`
const Check = styled.img`
    width: 10px;
    height: 10px;
    object-fit: cover;
    margin-right: 20px;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        width: 16px;
        height: 16px;
        
    }
`
const Content = styled.div`
    color: lightgray;
    font-family: Poppins;
    font-size: 13px;
    @media screen and (min-width: 700px) and (max-width: 1024px){
     font-size: 25px;
    }
`

const ProgressContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    // align-items: center;
    margin-bottom: 60px;
    //background-color: purple;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        display: flex;
        justify-content: center;
        align-items: center; 
    }
`
const Progress = styled.div`
    width: 80%;
    height: 185px;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 60px;
    border-bottom: solid 2px gray;
    //background-color: green;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        width: 90%;
        justify-content: center;
        align-items: center;
    }
`
const NameandLineCont = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        width: 90%;
        height: 50px;      
    }
`
const NameCont = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
    color: white;
    margin-bottom: 6px;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        font-size: 18px;
        margin-bottom: 15px;
    }
`
const LineCont = styled.div`
    width: 100%;
    height: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: gray;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        height: 5px;      
    }
`
const YellowCont = styled.div`
    width: 90%;
    height: 100%;
    background-color: #F5c443;
    border-radius: 10px 0 0 10px;
`
const YellowCont1 = styled.div`
    width: 98%;
    height: 100%;
    background-color: #F5c443;
    border-radius: 10px 0 0 10px;
`
const YellowCont2 = styled.div`
    width: 85%;
    height: 100%;
    background-color: #F5c443;
    border-radius: 10px 0 0 10px;
`
const YellowCont3 = styled.div`
    width: 95%;
    height: 100%;
    background-color: #F5c443;
    border-radius: 10px 0 0 10px;
`
const YellowCont4 = styled.div`
    width: 90%;
    height: 100%;
    background-color: #F5c443;
    border-radius: 10px 0 0 10px;
`

const MainName = styled.div``
const DetailsName = styled.div``

const FirstDetails = styled.div`
    font-weight: bold;
    color: white;
`
const SecondDetails = styled.div`
    color: gray;
    font-weight: bold;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        font-size: 18px;      
    }
`

const Details = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    //background-color: blue;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        font-size: 20px;      
    }
`

const DetailsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    //background-color: green;
`
const DetailsContent = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
     padding-bottom: 60px;
    border-bottom: solid 1px gray;
`

const NameContainer = styled.div`
    font-size: 18px;
    font-family: Poppins;
    font-weight: bold;
    width: 150px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    color: white;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        font-size: 22px;      
    }
`
const Occupation = styled.div`
    width: 250px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: Poppins;
    line-height: 20px;
    font-size: 14px;
    color: gray;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        font-size: 16px;    
        line-height: 25px;  
        letter-spacing: 1px;
    }
`

const ProfileContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: #252531;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        
    }
`
const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    @media screen and (min-width: 700px) and (max-width: 1024px){
        width: 170px;
        height: 170px;
    }
`

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #1E1E28;

    @media screen and (min-width: 320px) and (max-width: 700px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgb(29,29,39);

    }
    @media screen and (min-width: 700px) and (max-width: 1024px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgb(29,29,39);

    }
`
const Wrapper = styled.div`
    width: 98%;
    display: flex;
   justify-content: center;
    height: 100%;
    /* background-color: red; */
    align-items: center;
    flex-wrap: wrap;

    @media screen and (min-width: 320px) and (max-width: 700px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgb(29,29,39);
    }

    @media screen and (min-width: 700px) and (max-width: 1024px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgb(29,29,39);
    }
`
const RightContainer = styled.div`
    width: 73%;
    height: 170vh;
    background-color: #252531;
    margin-bottom: 50px;
    

    @media screen and (min-width: 320px) and (max-width: 700px){
        width: 95%;
        height: 100%;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px){
        width: 95%;
        height: 100%;
    }
`
const LeftContainer = styled.div`
    width: 20%;
    height: 170vh;
    background-color: #252531;
    margin-right: 60px;
    margin-bottom: 50px;
   
@media screen and (min-width: 320px) and (max-width: 700px){
    margin-bottom: 20px;
    height: 100%;
    width: 95%;
    margin-right: 0px;
}
@media screen and (min-width: 700px) and (max-width: 1024px){
    margin-bottom: 20px;
    height: 100%;
    width: 95%;
    margin-right: 0px;
}
`

