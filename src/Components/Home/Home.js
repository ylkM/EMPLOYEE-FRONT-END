import React from 'react'
import { Nav } from '../Nav/Nav'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import {  Typography, Button } from  "@mui/icons-material";
const Header =styled.h1`
font-size:1.5rem;
text-align:center;
color:#000
`
const HeaderParagraph =styled.p`
text-align :center;
line-height 2;
padding:0rem,5rem
`

const styledButton = styled(Button)`
  margin:0rem 1rem !important
`
const styledButtonGroup =styled.div`
margin :3rem auto
min-width:300px
`
const Home = () => {
  return (
    <div>
     <Nav/>
     <div>
      <Typography variant= "h2" sx ={{padding:"1rem 3rem", textAlign:"center"}}>Welcome to Employees page</Typography>
      <Typography variant ="body1" sx ={{padding:"1rem 3rem", textAlign:"justify"}}>
         Duis ex dolor tempor qui reprehenderit ipsum dolore. Consequat et minim id veniam dolore pariatur sint ad pariatur officia tempor exercitation anim laborum. Sint tempor eiusmod commodo nulla commodo reprehenderit. Nulla occaecat cupidatat magna elit dolore sint dolore veniam Lorem sint. Cupidatat sunt excepteur dolore culpa non eu cupidatat labore qui et adipisicing.
      </Typography>
    </div>
     <div>
      <styledButtonGroup>
      <styledButton variant ="contained">LOGIN </styledButton>
      <styledButton variant ="contained"> Signup</styledButton>
      </styledButtonGroup>
     </div>
    </div>
  )
}

export default Home
