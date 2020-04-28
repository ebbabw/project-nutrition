import React from "react";
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { products } from 'reducers/products'
import { ui } from 'reducers/ui'
import { LoadingSpinner } from 'lib/LoadingSpinner'
import { ProductList } from 'components/ProductList'
import { ShowScanner } from 'components/ShowScanner'
import { ShowManualInput } from 'components/ShowManualInput'
import { Header } from 'lib/Header'
import lemonBackground from 'assets/lemonBackground.jpg'
import { Footer } from 'lib/Footer'
import styled from 'styled-components'


const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main>
        <LoadingSpinner />
        <ProductList />
        <ShowScanner />
        <ShowManualInput />
      </Main>
      <Footer />
    </Provider>
  );
};

const Main = styled.main`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-image: url(${lemonBackground})
height: 20vh;
@media (max-width: 449px) {
  width: 80%;
}
@media (min-width: 450px) and (max-width: 750px) {
 width: 80%;
}
`


