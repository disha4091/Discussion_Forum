import React, { useState, useContext } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks' ;
import gql from 'graphql-tag' ;
import { Button, Icon } from 'semantic-ui-react';

import { FETCH_POSTS_QUERY } from '../util/graphql';

function DeletePost({postId, commentId, callback}) {
    const mutation = commentId ? DELETE_COMMENT:DELETE_POSTS ;

    const [deleteMutation] = useMutation(mutation, {
        update(proxy){
            if(!commentId){
                const data = proxy.readQuery({
                    query: FETCH_POSTS_QUERY
                }) ;

                data.getPosts = data.getPosts.filter((p)=> p.id !== postId) ;
                proxy.writeQuery({  query: FETCH_POSTS_QUERY, data}) ;
                if (callback) callback() ;
                console.log("deleting");
            }
           
        },
        variables: { 
            postId,
            commentId
        }
    });

    function deleteMutationCallBack(){
        deleteMutation();
        window.location.reload();
    }
    return(
        <Button as="div" onClick={deleteMutationCallBack}>
          <Icon name="trash"/>
        </Button>
        
    ) ;

    
}
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
export default DeletePost ;