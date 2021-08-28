import React, { useState, useContext, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks' ;
import gql from 'graphql-tag' ;
import './Posts.css' ;
import { useHistory } from 'react-router-dom' ;
import moment from 'moment' ;
import { AuthContext  } from '../context/auth';
import { Button, Icon } from 'semantic-ui-react';
import LikeCount from './LikeCount';
import  DeletePost  from '../DeletePost/DeletePost' ;
import AddAnswer from '../AddAnswer/AddAnswer';
export const Home = ({category}) => {
    const history = useHistory() ;
    const { user } = useContext(AuthContext);
    const [userData , setUserData] = useState([])
    const { loading, data: { getPosts: posts } = {} } = useQuery(FETCH_POSTS_QUERY) ;
    const [showComments, setShowComments] = useState(false);
    const [showCommentId, setShowCommentId] = useState('');
    

    function CommentHandler(id){
        if(showComments === false){
            setShowComments(true);
        }else{
            setShowComments(false);
        }
        
    }

    

    const [toggle, setToggle] = useState(true);
    useEffect(()=>{     
        setUserData(posts);
        console.log("reload");
    });
    function postCallback(){
        setToggle(!toggle);
        alert('Post Deleted') ;
    }

    return (
        <div>
        
        {loading ? (
            <div class="ui segment">
            <div class="ui active loader"></div>
            <p></p>
           </div>
            ):(
                userData && userData.filter(post => post.category === category).map((post) => ( 
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
                                    <LikeCount user={ user } post={post}/>
                                    { user && user.username === post.username && (
                                        <DeletePost postId={post.id} callback={postCallback}/>
                                    )}
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
                        
                            <div></div>
                            {user && <AddAnswer post={post}/>}
                        </div>
                    </div>
                    
                    )
                )
            )
        } 
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
            id
            username
        }
        likeCount
        commentCount
        comments{
            id username bio createdAt body
        }
    }}
    ` ;

const DELETE_POSTS = gql `
    mutation deletePost($postId: ID!) {
        deletePost(postId: $postId)
    }
` ;

const DELETE_COMMENT = gql `
    mutation deleteComment($postId: ID!, $commentId: ID!) {
        deleteComment(postId: $postId, commentId: $commentId){
            id
            comments
            {
                id
                username
                createdAt
                body
            }
            commentCount
        }
    }
`;
export default Home ;