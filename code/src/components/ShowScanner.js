import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'


export const ShowScanner = () => {
  const [showScanner, setShowScanner] = useState(false)

  const dispatch = useDispatch()


  return (
    <Container >
      {!showScanner && (
        <Button onClick={() => setShowScanner(true)}>
          <ButtonText>
            SCANNER
          </ButtonText>
        </Button>
      )
      }

      {
        showScanner && (
          <BarcodeScanner
            onDetected={(code) => {
              setShowScanner(false)
              dispatch(fetchProduct(code))
            }} />
        )
      }
    </Container >
  )
}

const Button = styled.button`
  display: inline-block;
  color: #F2F2F2;
  font-size: 1em;
  margin-bottom: 1em;
  border: 2px solid #F23054;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  &:hover {
    background: #F23054;
  }
`
const ButtonText = styled.div`
display: flex;
padding: 15px;
font-weight: 800;
color: #F23054;
&:hover {
  color: white;
  transition: 0.4s;
}
`

const Container = styled.div`
 display: flex;
 justify-content: center;
  }
`


