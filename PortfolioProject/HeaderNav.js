import React from 'react'
import styled from "styled-components"
import logo from "./images/logo.png"
import {Link} from "react-router-dom"
import DropDown from "./DropDown"
import {IoMdContact} from "react-icons/io"
import {AiFillHome,AiFillRead,AiFillProject} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"

const HeaderNav = () => {
    const [toggle, setToggle] = React.useState(false)

    const OnToggle = ()=>{
        setToggle(!toggle)
    }

    return (
        <>
        <Container>
            <Wrapper>
                <Logo src={logo}/>
                <Navigation>
                    <Nav to="/"> <AiFillHome/> <span>Home</span></Nav>
                    <Nav to = "/about"><AiFillRead/> <span>About</span></Nav>
                    <Nav to = "/contact"><IoMdContact/><span>Contact</span></Nav>
                    <Nav to = "/projects"><AiFillProject/><span>Projects</span></Nav>
                    {/* <Nav to = "/collaboration">Collaboration</Nav> */}

                </Navigation>
                <a href="https://gideon-portfolo.web.app/?fbclid=IwAR27tVKobNd2emMlborj5ujibLl4tyaxsXKWlcNuQUP89ikL-sS56mqjQ0o" target="_blank"><Login>Get Started</Login></a>
                <MediaIcon onClick={OnToggle}>
                    <TheIcons>
                        <GiHamburgerMenu/>
                    </TheIcons>
                </MediaIcon>
            </Wrapper>
        </Container>
       {toggle?  <DropDown toggle={toggle} setToggle={setToggle}/> : null}
        </>
    )
}

export default HeaderNav

const TheIcons = styled(GiHamburgerMenu)`
color: white;
font-size: 35px;
@media screen and (min-width: 320px) and (max-width: 700px){
   font-size: 25px;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px){
   font-size: 30px;
    }
`
const MediaIcon = styled.div`
display: none;
@media screen and (min-width: 320px) and (max-width: 700px){
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
height: 30px;
/* background-color: white; */
margin-right: 30px;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px){
        width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
height: 30px;
/* background-color: white; */
margin-right: 30px;
    }
    /* @media screen and (max-width: 320px){
       width: 30px;
       height: 30px;
        
    } */
`

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #252531;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    /* position: fixed;
    z-index: 20;
 backdrop-filter: blur(5px);  */
    @media screen and (min-width: 320px) and (max-width: 700px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        //background-color: purple;
        /* margin-bottom: 10px; */
        margin-bottom: 40px;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        //background-color: purple;
     
    }
    @media screen and (max-width: 320px){
        width: 100%;

    }
`

const Wrapper = styled.div`
    width: 96%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 320px) and (max-width: 700px) {
        width: 100%;
        height: 40px;
        /* background-color: blue; */
        
    }
    @media screen and (min-width: 700px) and (max-width: 1024px) {
        width: 100%;
        height: 40px;
        /* background-color: blue; */
        
    }
    
`

const Logo = styled.img`
    width: 240px;
    height: 180px;
    object-fit: contain;
    margin-right: 30px;
    margin-left: 0px;
    margin-top: 20px;
    @media screen and (min-width: 320px) and (max-width: 700px){
        width: 130px;
        height: 100px;
        margin-left: -5px;
    }
    @media screen and (min-width: 700px) and (max-width: 1024px){
        width: 200px;
        height: 150px;
        margin-left: 0px;
        margin-right: 0px;
    }
    
`
const Navigation = styled.div`
    display: flex;
    height: 40px;
    align-items: center;

    @media screen and (min-width: 320px) and (max-width: 700px){
        display: none;
        //background-color: green;
        flex-wrap: wrap;
        font-size: 5px;
        width: 900px;
    }

    @media screen and (min-width: 700px) and (max-width: 1024px){
        display: none;
        //background-color: green;
        flex-wrap: wrap;
        font-size: 5px;
        width: 900px;
    }
  
`
const Nav = styled(Link)`
display: flex;
margin: 0 15px;
display: flex;
 width: 90px;
height: 30px;
align-items: center;
font-family: Poppins;
font-size: 15px;
cursor: pointer;
position: relative;
transition: all 350ms;
justify-content: center;
color: #F5c443;
text-decoration: none;
transition: all ease 2s;
span{
    color: white;
    margin: 0 5px;
}

@media screen and (min-width: 320px) and (max-width: 700px){
    font-size: 10px;
    margin: 0 5px;
    width: 20px;
}
@media screen and (min-width: 700px) and (max-width: 1024px){
    font-size: 10px;
    margin: 0 5px;
    width: 20px;
}

:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: lightgray;
    opacity: 0;
    transition: all ease 3s;
    transform-origin: center;
    transform: scale(0);
}

:hover{
    /* color: #252531; */
    transform: scale(1.05);
    background-color: whitesmoke;
    font-weight: bold;
    color: black;
    span{
        color: black;
    }
    :after{
        opacity: 1;
        transform: scale(1);
    }
}

`

const Login = styled.div`
    width: 100px;
    height: 30px;
    background-color: white;
    color: black;
    // font-family: Poppins;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    transition: all 350ms;
    margin-left: 40px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    :hover{
        background-color:  #F5c443;
        color: white;
        transform: scale(1.02);
        font-weight: bold;
        transition: all 350ms;
    }
    @media screen and (min-width: 320px) and (max-width: 700px){
        margin-left: 0px;
        display: none;
}
    @media screen and (min-width: 700px) and (max-width: 1024px){
        margin-left: 0px;
        display: none;
}
`

