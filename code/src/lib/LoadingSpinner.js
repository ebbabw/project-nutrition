import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

export const LoadingSpinner = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <LoadingIcon>
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="black"
          height="150"
          width="150"
        />
      )}
    </LoadingIcon>
  )
}

const LoadingIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1em;
`