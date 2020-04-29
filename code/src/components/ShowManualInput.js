import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from "../reducers/products"
import styled from 'styled-components'

export const ShowManualInput = () => {
  const [showInput, setInput] = useState(false)
  const [code, setCode] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(fetchProduct(code))
    setCode("")
  }

  return (
    <>
      {!showInput && (
        <Wrapper>
          <Text>Or enter the product code number manually:</Text>
          <Button type="button" onClick={() => setInput(true)}><ButtonText>manual</ButtonText>
          </Button>
        </Wrapper>
      )}
      {showInput && (
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder='Enter barcode number...'
            required
          />
          <ManualButton type='submit'><ManualButtonText>find product</ManualButtonText></ManualButton>
          {showInput && (
            <ManualButton type="button" onClick={() => setInput(false)}>
              <ManualButtonText>hide manual</ManualButtonText>
            </ManualButton>
          )}
        </form>
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Button = styled.button`
  font-size: 1em;
  margin-top: 14px;
  background: white;
  margin-bottom: 1em;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: #F28705; 
    transform: scale(1.05)
  }
`
const ButtonText = styled.div`
  display: flex;
  padding: 5px;
  font-weight: 600;
  color: #F2CB05;
  text-transform: uppercase;
`

const Text = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  margin-right: 20px;
`

const ManualButton = styled.button`
  display: inline;
  border: 2px solid #F2CB05;
  padding: 5px 0 5px 0;
  cursor: pointer;
  margin-bottom: 5px;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: scale(1.05)
  }
  &:active {
    background: #F2CB05;
  }
`

const ManualButtonText = styled.button`
  color: #F2CB05;
  font-weight: 600;
  font-size: 13px;
  border: none;
  cursor: pointer;
  margin: 8px;
  transition: 4sec;
  &:clicked {
    color: white;
  }
  &:focus {
    outline: none;
  }
`

const Input = styled.input`
  font-size: 20px;
  font-family: 'Manrope', sans-serif;
  width: 100%;
  padding: 10px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  text-transform: capitalize;
  &:focus {
  border: 3px solid #F2CB05;
  }
`