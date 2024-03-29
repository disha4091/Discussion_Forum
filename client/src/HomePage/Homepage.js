import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Carousel } from 'react-responsive-carousel';
import Footer from '../Footer/Footer'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './HomePage.css'
import image1 from './Images/img1.PNG'
import image2 from './Images/img2.PNG'
import image3 from './Images/img3.PNG'
import Cards from './Cards';

const HomePage = () => {
    return ( 
        <div className="homepage">
            <div className="ui inverted vertical masthead center aligned segment pusher-ele">
                   <div className="ui container">
                    <div className="Carousel">
                        <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={3000}>
                            <div className="image">
                                <img className="cimage" src={image1} alt='carouselimg1' />
                            </div>
                            <div className="image">
                                <img className="cimage" src={image2} alt='carouselimg2' />
                            </div>
                            <div className="image">
                                <img className="cimage" src={image3} alt='carouselimg3'/>
                            </div>
                        </Carousel> 
                    </div>  
                     
                </div>
                

            </div>
                <Cards/>
                <Footer/>
        </div>
       
)  
}

export default HomePage 

