import React from 'react'
import lemonBackground from 'assets/lemonBackground.jpg'

import styled from 'styled-components/macro'

export const Header = () => (

  <Wrapper>
    <TextWrapper>
      <PrimaryText>Do you want to know if  your product is environmental friendly?</PrimaryText>
      <SecondaryText>Press "SCAN" and scan the barcode with your camera!</SecondaryText>
    </TextWrapper>
  </Wrapper>

)

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  height: 50vh;
  padding: 100px 100px 30px 100px;
  background-image: url(${lemonBackground})

`
const TextWrapper = styled.div`
text-align: center;
font-weight: 800;
padding: 80px 20px 80px 20px;
background-color: white;
opacity: 0.8;
`

const PrimaryText = styled.h1`
  letter-spacing: 1.5px;
  font-size: 26px;
  color: black;
  text-transform: uppercase;
  margin: 0;
  @media (max-width: 449px) {
    font-size: 20px;
  }
  @media (min-width: 450px) and (max-width: 750px) {
    font-size: 24px;
  }
`
const SecondaryText = styled.h2`
  font-size: 16px;
  color: black;
  margin: 10px 0 0 0;
  @media (max-width: 449px) {
    font-size: 14px;
  }
`