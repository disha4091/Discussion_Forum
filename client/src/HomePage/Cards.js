import React from 'react'
import ML from './Images/ML.jpg' ;
import WebDevelopment from './Images/WebDevelopment.png' ;
import AI from './Images/AI.jpg' ;
import './Cards.css' ;
import { Link } from 'react-router-dom';
const Cards = () => {
    return (
        <div class="ui grid container">
            <div className="heading">Explore Domains!</div>
            <br></br>
            <div class="four wide column">
                <div className="ML">
                <div class="ui card">
                    <div class="content">
                        <div class="header">Machine Learning</div>
                    </div>
                    
                    <img src={ML} className="CardImg"/>

                    <div class="extra content">
                        <Link to="/mlposts">
                            <button class="ui button">Explore</button>
                        </Link>
                        
                    </div>
                </div>
                </div>
            </div>
            <div class="four wide column">
                <div className="WebDevelopment">
                <div class="ui card">
                    <div class="content">
                        <div class="header">Web Development</div>
                    </div>
                    
                    <img src={WebDevelopment} className="CardImg"/>

                    <div class="extra content">
                    <Link to="/webposts">
                            <button class="ui button">Explore</button>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            <div class="four wide column">
                <div className="AI">
                        <div class="ui card">
                            <div class="content">
                                <div class="header">Artificial Intelligence</div>
                            </div>
                            
                            <img src={AI} className="CardImg"/>
                    
                            <div class="extra content">
                            <Link to="/aiposts">
                            <button class="ui button">Explore</button>
                            </Link>
                            </div>
                        </div>
                        </div>
            </div>
 
</div>

        

        
        
        

       
 
        
        
    )
}

export default Cards
