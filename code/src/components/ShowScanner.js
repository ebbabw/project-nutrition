import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import styled from 'styled-components/macro'

export const ShowScanner = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  // eslint-disable-next-line
  const onDetected = (code) => {
    console.log(`Code: ${code}`);
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
      });

    return (
      <div>
        <label>
          {" "}
            Test codes here:{" "}
          <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
        </label>
        <p>
          {" "}
            Use the field above to test barcodes manually and keep an eye on your
            console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
          </p>
        <BarcodeScanner onDetected={onDetected}></BarcodeScanner>
      </div>
    );
  };

  return (
    <Container >
      {!showScanner && (
        <Wrapper>
          <Text>Click here to scan your product:</Text>
          <Button onClick={() => setShowScanner(true)}>
            <ButtonText>SCAN</ButtonText>
          </Button>
        </Wrapper>
      )
      }
      <CameraContainer>
        {showScanner && (
          <BarcodeScanner
            onDetected={(code) => {
              setShowScanner(false)
              dispatch(fetchProduct(code))
            }} />
        )
        }
        {showScanner && (
          <CameraWrapper>
            <Button onClick={() => setShowScanner(false)}>
              <ButtonText>TURN OFF</ButtonText>
            </Button>
          </CameraWrapper>
        )
        }
      </CameraContainer>
    </Container >
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CameraWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  background: #F2CB05;
  margin-bottom: 1em;
  border: 2px solid #F2CB05;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.03);
    opacity: 0.8;
  }
`

const ButtonText = styled.div`
  display: flex;
  padding: 15px;
  font-weight: 800;
  color: white;
  &:hover {
  color: white;
  transition: 0.4s;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Text = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  margin-right: 50px;
`
