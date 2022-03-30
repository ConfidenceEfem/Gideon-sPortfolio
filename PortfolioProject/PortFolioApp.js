import styled from "styled-components"
import React from 'react'
import HeaderNav from "./HeaderNav"
import PortFolioBody from "./Portfoliobody"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Collaboration from "./Collaboration"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


const PortFolioApp = () => {
    return (
        <Container>    
            <Wrapper>
            <Router>
            <HeaderNav/>
            <Switch>
           <Route exact path = "/" component = {PortFolioBody}/>
           <Route exact path = "/about" component = {About}/>
           <Route exact path = "/contact" component = {Contact}/>
           <Route exact path = "/projects" component = {Projects}/>
           <Route exact path = "/collaboration" component = {Collaboration}/>
            </Switch>
            </Router>  
           </Wrapper>
        </Container>
    )
}

export default PortFolioApp

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%auto;
    background-color: #1D1D27;
`

const Wrapper = styled.div``


