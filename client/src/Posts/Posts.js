import React from 'react'
import { useQuery } from '@apollo/react-hooks' ;
import gql from 'graphql-tag' ;
import './Posts.css' ;

export const Home = () => {
    const { loading, data: { getPosts: posts } = {} } = useQuery(FETCH_POSTS_QUERY) ;

   
    return (
        <div>
        {loading ? (
            <h1>Loading Posts ... </h1> 
            ):(
            posts && posts.map((post) => ( 
                <div className="posts">
                    <h2>{post.username}</h2>
                    <h5>Category: {post.category}</h5>
                    <p>Body: {post.body}</p>
                    <p>Created At : {post.createdAt}</p>
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
        likeCount
        category
        likes{
            username
        }
        commentCount
        comments{
            id username createdAt body
        }
    }}
    ` ;
export default Home ;