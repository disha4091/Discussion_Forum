
import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from '../util/hooks'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { FETCH_POSTS_QUERY } from '../util/graphql'
const PostForm = ({category}) => {

    const { onChange, onSubmit, values  } = useForm(createPostCallback, {
        body: '',
        category: category
      });
    
    

    const [createPost, { error }] = useMutation( CREATE_POST_MUTATION, {
        variables: values,
        update(proxy, result){
            console.log(result)
            const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY
            })
            data.getPosts = [result.data.createPost, ...data.getPosts] ;
            proxy.writeQuery({ query: FETCH_POSTS_QUERY, data }) ;
            values.body = ''
            values.category = ''
        }
        
    })

    function createPostCallback(){
        createPost();
    }
    return (
        <div className="post-form">
        
            <Form onSubmit={onSubmit}>
                <h2> Create a post: </h2> 
                <Form.Field>
                    <Form.Input
                        placeholder="Study Clans"
                        name= "body"
                        onChange={onChange}
                        value={values.body}
                        error={error ? true : false }
                        />
                        
                    <Button type="submit">
                        Submit    
                    </Button>      
                </Form.Field>
            </Form>
            {error && (<div className="ui error message">
                <ul className="list">
                    <li>{error.graphQLErrors[0].message}</li>
                </ul>
            </div>) }
            
        </div>
    );
}
 
const CREATE_POST_MUTATION = gql`
mutation createPost($body: String!, $category:String!){
    createPost(body: $body , category: $category){
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