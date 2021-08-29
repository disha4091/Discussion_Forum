import React, { useEffect, useState } from 'react';
import {  useQuery } from '@apollo/react-hooks' ;
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import moment from 'moment' ;
import { Button, Label, Icon } from 'semantic-ui-react';

const Comments = ({postId}) => {
    
    const [userData , setUserData] = useState([]) ;
    const { loading, data: { getPosts: posts } = {} } = useQuery(FETCH_POSTS_QUERY) ;
    useEffect(()=>{     
        setUserData(posts);
        console.log("reload");
    },[]);
    return (
        <div>
        {posts.filter(post => post.id === postId).map((post) => (
            <div className="">
            {(post.comments).map((comment) => (
                <div className="comments">
                    <p>{comment.username}  ({comment.bio}) <p className="commentTime">{ moment(comment.createdAt).fromNow()} </p></p>
                    <p className="commentBody">{comment.body}</p>
                    
                </div>
            ))}
            </div>
        ))}
            
        </div>
    )
}

export default Comments


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