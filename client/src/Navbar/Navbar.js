import React from 'react'
import './nav.css'
const Navbar = () => {
    return ( 
        <div className="nav">
            <div class="ui large secondary inverted pointing menu ">
                <div class="header item">
                    Discussion Forum
                </div>
                <a class="active item">
                    Home
                </a>
                <a class="item">
                    Posts
                </a>
                <div class="right menu">
                    <a class="ui inverted button">
                        Login
                    </a>
                    <a class="ui inverted button">
                        Signup
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;