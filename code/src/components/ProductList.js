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
          coverImage={code.product.image_url}
          secondaryText={code.product.brands}>
          <Text>
            <Link a href={`https://world.openfoodfacts.org/product/${code.product.code}/`} target="_blank">More Details</Link>
            <p>Origin: {code.product.origins}</p>
            <p>Ingredients: {code.product.ingredients_text}</p>
          </Text>
          <FinalText>Thank you and have a healthy life!</FinalText>
        </Card>
      )}

      {/* {code.product && code.status === 1 && (
        <Card
          coverImage={code.product.image_url}
          title={code.product.ingredients_text}
          secondaryText={code.product.brands}>
          <Text>
            <Link a href={`https://world.openfoodfacts.org/product/${code.product.code}/`} target="_blank">More Details</Link>
            <p>Origin: {code.product.origins}</p>
            <p>Vegan: {code.product.ingredients[0].vegan === "yes" ? <i class="em em-leaves" aria-role="presentation" aria-label="LEAF FLUTTERING IN WIND">🍃</i> : <i class="em em-x" aria-role="presentation" aria-label="CROSS MARK">✖️</i>}</p>
            <p>Vegetarian: {code.product.ingredients[1].vegetarian === "yes" ? <i class="em em-x" aria-role="presentation" aria-label="CROSS MARK">🍃</i> : <i class="em em-x" aria-role="presentation" aria-label="CROSS MARK">✖️</i>}</p>
            <p>You should recycle this in your {code.product.packaging_tags} bin!</p>
          </Text>
          <FinalText>Thank you and have a healthy life!</FinalText>
        </Card>
      )} */}
      {code.status === 0 && <Error msg={code.status_verbose} />}
    </>
  )
}

const Link = styled.a`
  color: grey;
  font-size: 18px;
  `
const Text = styled.h3`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  `

const FinalText = styled.h2`
  color: grey;
  padding: 50px;
  text-transform: uppercase;
  font-weight: 800;
`
