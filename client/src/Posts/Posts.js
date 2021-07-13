import React, { useState, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks' ;
import gql from 'graphql-tag' ;
import './Posts.css' ;
import moment from 'moment' ;

export const Home = ({category}) => {
    
    const { loading, data: { getPosts: posts } = {} } = useQuery(FETCH_POSTS_QUERY) ;
    const [showComments, setShowComments] = useState(false);
    function CommentHandler(){
        if(showComments === false){
            setShowComments(true);
        }else{
            setShowComments(false);
        }
        
    }
    return (
        <div>
        
        {loading ? (
            <div class="ui segment">
            <div class="ui active loader"></div>
            <p></p>
           </div>
            ):(
            posts && posts.filter(post => post.category === category).map((post) => ( 
            <div className="Posts">
            <div class="ui card">
            <div class="content">
                <div class="right floated meta">{moment(post.createdAt).fromNow()}</div>
                 <p className="username">{post.username}</p>{post.bio}
                 
            </div>
            <div className="body">
               {post.body} 
            </div>
            <div class="content">
                <span class="right floated">
                <i class="heart outline like icon"></i>
                <p>{post.likeCount} likes</p>
                </span>
                <i class="comment icon" onClick={CommentHandler}></i>
                <p>{post.commentCount} answers</p>
               {showComments && ((post.comments).map((comment) => (
                   <div className="comments">
                    <p>{comment.username}  ({comment.bio})</p>
                    
                    <p className="commentTime">{ moment(comment.createdAt).fromNow()} </p>
                    <p className="commentBody">{comment.body}</p>
                    
                   </div>
                   
                )))}
            </div>
           
            <div>
             </div>
            <div class="extra content">
                <div class="ui large transparent left icon input">
                <i class="heart outline icon"></i>
                <input className="AnsInput"type="text" placeholder="Add Answer..." />
               
                </div>
            </div>
           </div>
            </div>
            
                ))
            )} 
        </div>
    );
}
       

const FETCH_POSTS_QUERY  = gql`
   { 
       getPosts{
        id 
        body 
        createdAt 
        username 
        bio
        likeCount
        category
        likes{
            username
        }
        likeCount
        commentCount
        comments{
            id username bio createdAt body
        }
    }}
    ` ;
export default Home ;