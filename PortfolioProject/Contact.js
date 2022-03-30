import React,{useState} from 'react'
import styled from "styled-components"
import git from "./images/github.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import instagram from "./images/instagram.png"
import linkedln from "./images/linkedln.png"

const Contact = () => {
    const [userInput, setUserInput] = useState("")
    return (
        <Container>
        <Wrapper>
            <NewsLetter>
                <NewsLetterText>Subscribe to my Newsletter</NewsLetterText>
                <NewsLetterBox>
                    <input placeholder="JohnFawas@gmail.com"
                    value={userInput}
                    onChange={(e)=>{
                        setUserInput(e.target.value)
                    }} />
                    <Button
                    onClick={()=>{
                        setUserInput("")
                    }}>Submit</Button>
                </NewsLetterBox>
                <QuestionCont>For more info, follow me on 
                     <a href="https://www.facebook.com/gideon.ekeke.3?_rdc=1&_rdr" target = "_blank"> Facebook</a></QuestionCont>
            </NewsLetter>
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
                            <a href="https://www.facebook.com/gideon.ekeke.3?_rdc=1&_rdr" target="_blank">
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

export default Contact

const RightIconsBoxHolder = styled.div`
    @media screen and (min-width: 320px) and (max-width: 500px){
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


const QuestionCont = styled.div`
    font-size: 13px;
    color: #F5c443;
    a{
        margin-left: 3px;
    }
    @media screen and (min-width: 320px) and (max-width: 500px) {
        font-size:10px;
    }
`

const Button = styled.button`
    width: 50px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    outline: none;
    color: gray;
    @media screen and (min-width: 320px) and (max-width: 500px) {
        width: 40px;
        font-size: 11px;
    }
`

const NewsLetter = styled.div`
    /* margin-top: 20px; */
    width: 90%;
    height: 500px;
    //background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    @media screen and (min-width: 320px) and (max-width: 500px) {
        margin-top: -10px;
        //background-color: green;
        height: 300px;
        margin-bottom: 40px;
    }
`
const NewsLetterText = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #F5c443;
    @media screen and (min-width: 320px) and (max-width: 500px) {
        font-size: 15px;
        margin-bottom: 15px;
    }
`
const NewsLetterBox = styled.div`
    display: flex;
    width: 650px;
    height: 70px;
    justify-content:space-between;
    background-color: white;
    border-radius: 60px;
    padding: 0 20px;
    margin-bottom:10px;
    input{
        width: 350px;
        height: 65px;
        border-radius: 60px;
        border: none;
        outline: none;
        font-size: 15px;
    }
@media screen and (min-width: 320px) and (max-width: 500px) {
    width: 240px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    input{
        width:180px;
        height: 45px;
        font-size: 13px;
    }
}
`

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%auto;
    color: white;
    //background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:320px){
        width:100%;
        height: 100%;
        background-color: #1D1D27;
    }
`
const Wrapper = styled.div`
    width: 96%;
   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //background-color: green;
@media screen and (min-width: 320px) and (max-width: 500px) {
    width:100%;
    height: 100%;
    background-color: #1D1D27;
}
`
