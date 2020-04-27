import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from "../reducers/products"

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
        <button type="button" onClick={() => setInput(true)}>
          Show Manual Input
        </button>
      )}

      {showInput && (
        <button type="button" onClick={() => setInput(false)}>
          hide Manual Input
        </button>
      )}
      {showInput && (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder='Enter barcode number'
          />
          <button type='submit'>Find product</button>
        </form>
      )}
    </>
  )
}