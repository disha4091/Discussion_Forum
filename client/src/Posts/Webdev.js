import React from "react";
import Posts from './Posts';
import './Posts.css' ;

const Webdev = () => {
    return (
        <div className="web-posts">
            <h2 className="title">Web Development</h2>
            <Posts category= "WebDev" />
        </div>

    );
}
 
export default Webdev;