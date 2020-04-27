import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from './Card'
import { Error } from './Error'
import styled from 'styled-components/macro'

export const ProductList = () => {
  const code = useSelector((state) => state.products.product)

  if (!code) return null

  return (
    <>
      {code.product && code.status === 1 && (
        <Card
          title={code.product.ingredients_text}
          coverImage={code.product.image_url}
          secondaryText={code.product.brands}>
          <Text>More details:<br></br>
            <Link a href={`https://world.openfoodfacts.org/product/${code.product.code}/`}></Link>
            <p>Origin: {code.product.origins}</p>
            <p>Vegan: {code.product.ingredients[0].vegan}</p>
            <p>Vegetarian: {code.product.ingredients[1].vegetarian}</p>
            <p>You should recycle this in your {code.product.packaging} bin</p>
          </Text>
        </Card>
      )}
      {code.status === 0 && <Error msg={code.status_verbose} />}
    </>
  )
}

const Link = styled.a`
color: palevioletred;
font-size: 16px;
  `
const Text = styled.h3`
font-size: 18px;
font-weight: 500;
  `