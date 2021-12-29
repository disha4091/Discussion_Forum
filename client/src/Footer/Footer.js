import React from 'react'
import './Footer.css' 
const Footer = () => {
    return (
        <div className="Footer ui grid">
            <div className="four wide column">
                <h3>Categories</h3>
                <li>
                <a href="/ai" className="">AI</a>
                </li>
                <li>
                <a href="/ml" className="">ML</a>
                </li>
                <li>
                <a href="/webdev" className="">Web development</a>
                </li>
            </div>
            <div className="four wide column">
                <h3>Contact us</h3>
                <p>Email: test@gmail.com<br/>lorem Ipsum</p>
               
                
            </div>
            <div className="four wide column">
                <h3>About</h3>
               
                
            </div>
        </div>
    )
}

export default Footer
