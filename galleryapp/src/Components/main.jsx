import React, { useContext } from 'react'
import { imageContext } from '../Helpers/context'

function Main() {
    const {image, setimage}=useContext(imageContext)
  return (
    <div  className='main'><h3>Main Page</h3>
    <h5>Get Your House At a Discounted Price of 6 million</h5>
    <div>
    <button onClick={()=>setimage("gallery")}>View Products</button>
    </div>
    </div>

  )
}

export default Main