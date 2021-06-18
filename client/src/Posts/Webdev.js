import React from "react";
import Posts from './Posts';
import './Posts.css' ;

const Webdev = () => {
    return (
        <div className="web-posts">
            <h2 className="title">Web Development<button className="AddQ">New Question</button></h2>
            <Posts category= "WebDev" />
        </div>

    );
}
 
export default Webdev;