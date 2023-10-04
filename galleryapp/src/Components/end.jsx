import React, { useContext } from 'react'
import { imageContext } from '../Helpers/context'

function End() {
    const {image, setimage ,select, setSelect, cost, setCost}=useContext(imageContext)
  return (
    <div className='end'><h1>END</h1>
    <button onClick={()=>setimage('main')}>View Again?</button>
    <h4>You have selected{" "+select} houses</h4>
    <h6>Total Price {""+cost} million</h6>
    </div>
  )
}

export default End