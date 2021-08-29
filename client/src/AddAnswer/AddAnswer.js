import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import './AddAnswer.css';
const AddAnswer = ({post: {id, comments, commentCount}}) => {

    const [comment, setComment] = useState('');

    function SubmitCommentHandler(){
        submitComment();
        window.location.reload();
    }
    const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
        update(){
            setComment('');
        },
        variables: {
            postId: id,
            body: comment
        
        }
    });

    
    return (
        <div class="extra content">
            <div class="ui large transparent right icon input">
                <input 
                className="AnsInput"
                type="text" 
                style={{width: '40vw'}}
                placeholder="Add Answer..." 
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                /> 
                <button 
                class="ui button" 
                disabled={comment.trim() === ''}
                onClick= {SubmitCommentHandler}
                >Add</button>             
            </div>
        </div>
    );
}
const SUBMIT_COMMENT_MUTATION = gql `
    mutation createComment($postId: String!, $body: String!){
        createComment(postId: $postId, body: $body){
            id
            comments{
                id
                username
                createdAt
                body
            }
            commentCount
        }
    }
`;
export default AddAnswer;