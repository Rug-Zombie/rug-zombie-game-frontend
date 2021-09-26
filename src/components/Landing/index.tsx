import React from 'react'
import Background from "images/RugZombie Background graphic.svg"
import styled from "styled-components"
import Header from "./Header"
import Footer from './Footer'

const StyledImage = styled.img`
    width: ${window.innerWidth}px;
`
const Landing:React.FC = () => {
    return (
        <>
        <Header />
        <StyledImage src={Background} alt="background"/>
        <Footer />
        </>
    )
}
export default Landing