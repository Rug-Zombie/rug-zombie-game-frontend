import React from 'react'
import styled from 'styled-components'
import BasicZombie from "images/BasicZombie.png"
import { Text } from '@rug-zombie-libs/uikit'
import Wallet from "images/wallet.svg"
import Profile from "images/profile.svg"
import Search from "images/search.svg"

const Container = styled.div`
    background-color: black;
    height: 64px;
`
const Row = styled.div`
    display: flex;
`
const LeftCol = styled.div`
    margin-left: 200px;
`
const RightCol = styled.div`
    margin-left: 300px;
`
const RightNav = styled.div`
    margin-left: 50px;
`
const StyledImage = styled.img`
    margin-top: 5px;
    height: 50px;
    width: 50px;
`
const StyledAnchor = styled.a`
    margin: 20px;
    text-decoration: none;
    color: white;
`
const StyledText = styled(Text)`
    margin-top: 20px;
`
const StyledSvg = styled.img`
    margin-top: 20px;
    margin-left: 20px;
`
const Header:React.FC = () => {
    return(
        <Container>
            <Row>

                <LeftCol>
            <Row>
                    <StyledImage src={BasicZombie} alt="basic-zombie"/>
                    <StyledAnchor href="/">Home</StyledAnchor>
                    <StyledAnchor href="/">Deck Builder</StyledAnchor>
                    <StyledAnchor href="/">Rules</StyledAnchor>
                    <StyledAnchor href="/">Play</StyledAnchor>
            </Row>
                </LeftCol>
                <RightCol>
            <Row>
                    <StyledText color="white">Connect Wallet</StyledText>
                    <StyledSvg src={Wallet} alt="wallet"/>
                    <RightNav>
                    <StyledSvg src={Search}/>
                    <StyledSvg src={Profile} />
                    </RightNav>
            </Row>
                </RightCol>
            </Row>
        </Container>
    )
}

export default Header
