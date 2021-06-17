import React from "react";
import Posts from './Posts';
import './Posts.css' ;

const AI = () => {
    return (
        <div className="ai-posts">
            <h2 className="title">Artificial Intelligence</h2>
            <Posts category="AI"/>
        </div>
        
    );
}
 
export default AI;