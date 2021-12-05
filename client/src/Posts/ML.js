import React, {useState,useContext} from "react";
import Posts from './Posts';
import './Posts.css' ;
import AddPost from '../AddPosts/PostForm' ;
import {AuthContext} from '../context/auth' ;
const ML = () => {
    const {user} = useContext(AuthContext) ;
    
    return (
        
        <div className="ml-posts">
            <h2 className="title">Machine Learning</h2>
            <div classname="addbtn">
            {user && 
                (<div>                    
                    <AddPost category={"ML"}/>
                </div>
                )
            }
            </div>
            <Posts category="ML" />
        </div>
        
    );
}
 
export default ML;