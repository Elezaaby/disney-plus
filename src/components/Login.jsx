import React from 'react'
import styled from 'styled-components';

import backgroundImg from '../images/login-background.jpg'
import logoOne from '../images/cta-logo-one.svg'
import logoTow from '../images/cta-logo-two.png'

function Login() {
  return (
    <Container>
      <CTA>
        <LogoOne src={logoOne} />
        <SignUp>Get all there</SignUp>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tempora animi. Corrupti vitae laboriosam incidunt iure, fuga aliquid molestias adipisci?</Description>
        <LogoTow src={logoTow} />
      </CTA>
    </Container>
  )
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;
    background-image: url(${backgroundImg});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LogoOne = styled.img`
`
const SignUp = styled.div`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  font-size: 18px;
  padding: 17px 0;
  text-align: center;
  color: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 250ms;
  margin:  8px 0 12px 0;
  &:hover{
    background: #0483ee;
  }
`
const LogoTow = styled.img`
  width: 90%;
`
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`

export default Login