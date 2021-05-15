import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './HomePage.css'

import image1 from './Images/img1.PNG'
import image2 from './Images/img2.PNG'
import image3 from './Images/img3.PNG'

const HomePage = () => {
    return ( 
        <div className="Carousel">
        <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={3000}>
        <div className="image">
            <img src={image1} />
       </div>
       <div className="image">
            <img src={image2} />
        </div>
        <div className="image">
            <img src={image3}/>
        </div>
       </Carousel> 
        </div>
        
        
  
        
    
        
)  
}

export default HomePage 

