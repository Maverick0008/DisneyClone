import React from 'react'
import styled from 'styled-components'
const Login = () => {
    return (
        <Container>
            <ContentBox>
                <LogoOne src="/images/container-logo-one.svg" />
                <SignUp>Get all there</SignUp>
                <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <ContainerLogo src="/images/container-logo-two.png" />
            </ContentBox>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        content: '';
        left: 0;
        right: 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('/images/login-background.jpg');
        z-index: -1;
        opacity: 0.6;
        
    }

`
const ContentBox = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 50%;
    display: flex;
    flex-direction: column;
    

`

const LogoOne = styled.img`

`
const SignUp = styled.a`
    margin: 10px 0 18px 0;
    cursor: pointer;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    border-radius: 5px;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    transition: all 250ms;
    letter-spacing: 1.4px;

    &:hover {
        background: #0483ee;
    }
`
const Description = styled.p`
    font-size: 12px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const ContainerLogo  = styled.img``