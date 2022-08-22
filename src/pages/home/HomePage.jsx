import Product from "../../components/product/Product"
import "./home.scss"
import { IconButton } from "@mui/material"
import '../../images/White.png'
import myvid from '../../videos/fashion.mp4'
import ReactPlayer from 'react-player'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import React, { useState } from "react" 
const HomePage = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="home">
       
      <div className="gauche">
      <ReactPlayer
            className='react-player fixed-bottom'
            url= {myvid}
            width='100%'
            height='54.4%'
            playing={true}
            muted ={true}
            loop={true}
            style= {{ margin: "0px", width: "100% ",height: "100%" }}
            />
      
      </div>
      <div className="droit">
        
      <div className="container">
     
      <div className="products"> 
         <h4 className="titleProduct"> LISTE DES PRODUITS</h4>
         <div  className={isOpen ? "content-parent show" : "content-parent"}>
          <div className="content">
          <Product />
          <Product />
          <Product />
          </div>
         
          </div>
        
        <div >
           <div  className="arrow-down" >
           <IconButton className="toggle " aria-label="add an alarm" onClick={() =>  setIsOpen(!isOpen)}>
           <KeyboardDoubleArrowDownIcon />
          </IconButton>
                
           </div>
        </div>
          
      </div>
      </div>


    </div>


   
    </div>
    
  )
}

export default HomePage