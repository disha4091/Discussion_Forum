import React,{useContext} from "react";
import Posts from './Posts';
import './Posts.css' ;
import AddPost from '../AddPosts/PostForm' ;
import {AuthContext} from '../context/auth' ;
const Webdev = () => {
    const {user} = useContext(AuthContext) ;
    return (
        <div className="web-posts">
        <h2 className="title">Web Development</h2>
        {user && 
            (<div>                
                <AddPost category={"WebDev"}/>
            </div>
            )
        }
        <Posts category="WebDev" />
        </div>

    );
}
 
export default Webdev;