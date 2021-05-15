import React from 'react'
import Carousel from 'react-bootstrap/Carousel' 
import './HomePage.css'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  

import image1 from './Images/img1.PNG'
import image2 from './Images/img2.PNG'
import image3 from './Images/img3.PNG'

const HomePage = () => {
    return (  
        
    <div className="body">  
        
        <div className='container-fluid' >  
        
             <Carousel style={{ position: 'relative' }} fade={true} >  
        
                <Carousel.Item  interval={2000} keyboard={false} pauseOnHover={true}>          
                    <img align="centre" src={image1} width="1000" height="480" />  
                </Carousel.Item>  
        
                <Carousel.Item   interval={2000} >  
                    <img  src={image2} width="1000" height="480" />  
                    <Carousel.Caption>      He                  
                    </Carousel.Caption>          
                </Carousel.Item>  
        
                <Carousel.Item interval={2000} >     
                    <img src={image3} width="1000" height="480" />  
                </Carousel.Item>  
        
            </Carousel>  
        
        </div>  
        
    </div>  
        
)  
}

export default HomePage
