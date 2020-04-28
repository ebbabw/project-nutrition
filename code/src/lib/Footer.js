import React from 'react'
import styled from 'styled-components/macro'


export const Footer = () => {
  return (
    <FooterSection><a href="https://github.com/annesophiegendron/project-nutrition" target="_blank">Anne-Sophie Gendron & Ebba Bergholtz-Widell</a> - Technigo project April 2020</FooterSection>
  )
}

const FooterSection = styled.section`
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  padding: 18px;
  margin-top: 40px;
  border-top: 1px solid white;
  height: 20px;
`
