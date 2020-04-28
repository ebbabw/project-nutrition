import React from 'react'
import styled from 'styled-components/macro'

export const Card = ({ title, secondaryText, thumbNailUrl, coverImage, className, children }) => {



  return (
    <Container className={className}>
      <TitleBar>
        <div>
          {coverImage && <CoverImage src={coverImage} />}
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </div>
      </TitleBar>
      <Content>
        {children && <ChildrenContent>{children}</ChildrenContent>}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  border-radius: 6px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  margin-bottom: 20px; 
  }
  @media (min-width: 450px) and (max-width: 750px) {
  width: 80%;
  }
`
const CoverImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 25px;
   @media (max-width: 449px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 450px) and (max-width: 750px) {
    width: 100px;
    height: 100px;
  }
`
const ChildrenContent = styled.div`
padding: 10px;
`

const TitleBar = styled.div`
  display: flex;
  border-radius: 6px 6px 0px 0px;
  align-items: center;
  padding: 30px;
  background: #cacc6a;
`
const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
 font-size: 30px;
  margin: 0;
  font-size: 24px; 
`
const SecondaryText = styled.h2`
 font-size: 20px;
  margin: 0;
  color: #6b6b6b;
  `
