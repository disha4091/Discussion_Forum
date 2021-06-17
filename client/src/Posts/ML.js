import React from "react";
import Posts from './Posts';
import './Posts.css' ;

const ML = () => {
    return (
        <div className="ml-posts">
            <h2 className="title">Machine Learning</h2>
            <Posts category="ML" />
        </div>
        
    );
}
 
export default ML;