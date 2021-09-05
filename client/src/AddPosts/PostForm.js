
import React from 'react'
import { Button, Header, Image, Modal , Form, FormGroup} from 'semantic-ui-react'
import { useForm } from '../util/hooks'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { FETCH_POSTS_QUERY } from '../util/graphql'
import './PostForm.css' ;


const PostForm = ({category}) => {
    const [open, setOpen] = React.useState(false)

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
        window.location.reload();
    }
    return (
        <div className="post-form">
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>New question</Button>}
      >
        <Modal.Header>Add a new question</Modal.Header>
        <Modal.Content image>
          
          <Modal.Description>
         
          <textarea className="inputbox"
              name= "body"
              onChange={onChange}
              value={values.body}
              error={error ? true : false }
              />    
              {error && (<div className="ui error message">
              <ul className="list">
                  <li>{error.graphQLErrors[0].message}</li>
              </ul>
          </div>) }
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='blue' onClick={() => setOpen(false)} onClick={onSubmit}>
            Add
          </Button>
         
        </Modal.Actions>
      </Modal>
        

            
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





