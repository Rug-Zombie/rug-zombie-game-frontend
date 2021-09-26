import React from 'react'
import styled from 'styled-components'
import Background from "images/RugZombie Bottom nav logo.png"
import { Text } from '@rug-zombie-libs/uikit'
import Discord from "images/social icon - Discord.svg"
import Facebook from "images/social icon - Facebook.svg"
import LinkedIn from "images/social icon - LinkedIn.svg"
import Instagram from "images/social icon - Instagram.svg"
import medium from "images/social icon - medium.svg"
import telegramm from "images/social icon - telegramm.svg"
import Twitter from "images/social icon - Twitter.svg"
import YouTube from "images/social icon - YouTube.svg"

const Container = styled.div`
    min-height: 400px;
    background-color: black;
    background-image: url(${Background});
`
const LinksContainer = styled.div`
    margin-left: 100px;
    padding-top : 100px;
`
const StyledText = styled(Text)`
    margin: 10px;
`
const RightContent = styled.div`
    margin-left: 500px;
    margin-top: 100px;
`
const Row = styled.div`
    display: flex
`
const StyledImage = styled.img`
    height: 50px;
    width: 50px;
    margin: 10px;
`
const Footer:React.FC = () => {
    return (
        <Container> 
            <img src={Background} alt="test" style={{position:"absolute"}}/>
            <Row>
            <LinksContainer>
                <StyledText color="white">Home</StyledText>
                <StyledText color="white">Deck Builder</StyledText>
                <StyledText color="white">Rules</StyledText>
                <StyledText color="white">Play</StyledText>
            </LinksContainer>
            <RightContent>
                <StyledImage src={Facebook} alt="facebook" />
                <StyledImage src={Twitter} alt="twitter" />
                <StyledImage src={Instagram} alt="instagram" />
                <StyledImage src={telegramm} alt="telegramm" />
                <StyledImage src={medium} alt="medium" />
                <StyledImage src={LinkedIn} alt="linkedin" />
                <StyledImage src={Discord} alt="discord" />
                <StyledImage src={YouTube} alt="youtube" />
            </RightContent>
            </Row>
        </Container>
    )
}

export default Footer