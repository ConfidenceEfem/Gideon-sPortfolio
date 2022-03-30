import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const DropDown = ({toggle, setToggle}) => {
    return (
        <Container>
            <Wrapper>
                <TheCont>
                    <TheNav to="/"
                    onClick={()=>{
                        setToggle(false)
                    }}>Home</TheNav>
                    <TheNav to="/about"
                      onClick={()=>{
                        setToggle(false)
                    }}>About</TheNav>
                    <TheNav to="/contact"
                      onClick={()=>{
                        setToggle(false)
                    }}>Contact</TheNav>
                    <TheNav to="/projects"
                      onClick={()=>{
                        setToggle(false)
                    }}>Project</TheNav>
                </TheCont>
            </Wrapper>
        </Container>
    )
}

export default DropDown

const Container = styled.div`
width: 100%;
display: flex;
height: 45vh;
background-color:rgb(37,37,49);
z-index: 20;
position: absolute;
top: 40px;
justify-content: center;
@media screen and (min-width: 320px) and (max-width: 700px){
 height: 50vh;
 }

`
const Wrapper = styled.div`
width: 100%;
background-color: rgb(37,37,49);

`

const TheCont = styled.div`
height: 100%;
justify-content: space-between;
display: flex;
flex-direction: column;
align-items: center;

`
const TheNav = styled(Link)`
width: 100%;
display: flex;
justify-content: center;
height: 50px;
align-items: center;
border-bottom: 2px solid gray;
font-size: 16px;
letter-spacing: 0.5px;
color: whitesmoke;
font-weight: bold;
cursor: pointer;
text-decoration: none;
`

