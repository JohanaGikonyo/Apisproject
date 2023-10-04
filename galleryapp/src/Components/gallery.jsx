import  { useContext, useState } from 'react'
import { imageContext } from '../Helpers/context'
import {Galleries} from '../Helpers/gallery'
function Gallery() {
    const {image, setimage,select, setSelect,cost, setCost}=useContext(imageContext)
    const [galleryCount, setgalleryCount]=useState(0)
    const finish=()=>{
        setimage("end")
    }
     function selection(){
        if(Galleries[galleryCount].quantity<1){
alert("No house remaining")
Galleries[galleryCount].quantity==0;
        }
       else {
            Galleries[galleryCount].quantity-=1  
        }
        setSelect(select+1)
     }
     setCost(select*6)
  return (
    <div className='gal'>

<div>
   <img src={Galleries[galleryCount].image} alt='desc'/>
<h3>{Galleries[galleryCount].cost}</h3>
<h4>{Galleries[galleryCount].quantity} remaing</h4>
   </div>
   {galleryCount==Galleries.length-1?
   (<button onClick={()=>setimage("end")}>Finish</button>):(
    <button onClick={()=>setgalleryCount(galleryCount+1)}>Next</button>
   )
   }
   {galleryCount==0?(""
   ):( <button onClick={()=>setgalleryCount(galleryCount-1)}>Back</button>)}
  <button onClick={selection}>Select</button>
    </div>
  )
}

export default Gallery