import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Components/main'
import Gallery from './Components/gallery'
import End from './Components/end'
import { imageContext } from './Helpers/context'
function App() {
  const [image, setimage]=useState("main")
const [select, setSelect]=useState(0)
const [cost, setCost]=useState(1)
  return (
    <>
    <imageContext.Provider value={{image, setimage,select, setSelect, cost, setCost}}>
{image==="main"&&<Main/>}
{image==="gallery"&&<Gallery/>}
{image==="end"&&<End/>}
</imageContext.Provider>
    </>
  )
}

export default App
