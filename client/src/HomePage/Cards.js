import React from 'react'
import ML from './Images/ML.jpg' ;
import WebDevelopment from './Images/WebDevelopment.png' ;
import AI from './Images/AI.jpg' ;
import './Cards.css' ;
import { Link } from 'react-router-dom';
const Cards = () => {
    return (
        <div class="features ui grid noMargin" >
        <div class="ui huge header">Explore Domains</div>
            <br></br>
            <div class="ui three stackable cards">
                <div className="ML">
                <div class="ui card">
                    <div class="content">
                        <div class="header">Machine Learning</div>
                    </div>
                    
                    <img src={ML} className="CardImg"/>

                    <div class="extra content">
                        <Link to="/ml">
                            <button class="ui button">Explore</button>
                        </Link>
                        
                    </div>
                </div>
                </div>
            </div>
            <div class="ui three stackable cards">
                <div className="WebDevelopment">
                <div class="ui card">
                    <div class="content">
                        <div class="header">Web Development</div>
                    </div>
                    
                    <img src={WebDevelopment} className="CardImg"/>

                    <div class="extra content">
                    <Link to="/webdev">
                            <button class="ui button">Explore</button>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            <div class="ui three stackable cards">
                <div className="AI">
                        <div class="ui card">
                            <div class="content">
                                <div class="header">Artificial Intelligence</div>
                            </div>
                            
                            <img src={AI} className="CardImg"/>
                    
                            <div class="extra content">
                            <Link to="/ai">
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
