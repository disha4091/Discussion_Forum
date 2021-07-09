import { ValuesOfCorrectTypeRule } from 'graphql'
import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from '../util/hooks'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
const PostForm = () => {

    const { values, onChange, onSubmit } = useForm(createPostCallback, {
        body: ''
    });

    const [createPost, { error }] = useMutation( CREATE_POST_MUTATION, {
        variables: values,
        update(_, result){
            console.log(result)
            values.body = ''
        }
        
    })

    function createPostCallback(){
        createPost();
    }
    return (
        <div className="post-form">
            <Form onSubmit={} >
                <h2> Create a post: </h2> 
                <Form.Field>
                    <Form.Input
                        placeholder="Study Clans"
                        name= "body"
                        onChange={onChange}
                        value={Values.body}
                        />
                    <Button type="submit">
                        Submit    
                    </Button>      
                </Form.Field>
            </Form>

        </div>
    );
}
 
const CREATE_POST_MUTATION = gql`
mutation createPost($body: String!){
    createPost(body: $body){
        id body createdAt username
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
    }
}
`

export default PostForm;