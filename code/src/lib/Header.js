import React from 'react'
import styled from 'styled-components/macro'

// COMPONENT HEADER
export const Header = () => (

  <Wrapper>
    <TextWrapper>
      <PrimaryText>Do you want to know if your product is environmental friendly?</PrimaryText>
      <SecondaryText>Press "SCANNER" and scan the barcode with your camera!</SecondaryText>
    </TextWrapper>
  </Wrapper>

)

// STYLED COMPONENTS
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-size: cover;
  height: 20vh;
  padding: 100px 100px 30px 100px;
`
const TextWrapper = styled.div`
text-align: center;
font-weight: 800;
padding: 80px 30px 80px 30px;
background-color: #14D9C5;;
`

const PrimaryText = styled.h1`
  letter-spacing: 1.5px;
  font-size: 26px;
  color: #fefefe;
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
  color: #f1f1f1;
  margin: 10px 0 0 0;
  @media (max-width: 449px) {
    font-size: 14px;
  }
`