import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'

export const Error = () => {
  const scan = useSelector((state) => state.products.product)

  return (
    <>
      <Text>{scan.status_verbose}, please try again or follow this link</Text>
      <a href='https://world.openfoodfacts.org/'>OpenFoodFacts website</a>
    </>
  )
}

const Text = styled.div`
text-transform: lowercase;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
font-size: 25px;
`