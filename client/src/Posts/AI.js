import React, {useContext} from "react";
import Posts from './Posts';
import './Posts.css' ;
import AddPost from '../AddPosts/PostForm' ;
import {AuthContext} from '../context/auth' ;
const AI = () => {
    const {user} = useContext(AuthContext) ;
    return (
        <div className="ai-posts">
        <h2 className="title">Artificial Intelligence</h2>
        {user && 
            <div>                
                <AddPost category={"AI"}/>
            </div>
            
        }
        <Posts category="AI" />
            
    
        </div>
        
    );
}
 
export default AI;