import React,{ useState,useContext } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './UpdateProfilePage.css' ;
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag' ;
import { Message } from "semantic-ui-react";
import { AuthContext } from "../context/auth";

const UpdateProfilePage = () => {

    const {user, logout} = useContext(AuthContext) ;
    const [currBio, setCurrBio] = useState(user.bio) ;
    const [errors, setErrors] = useState({}) ;
    const [formError, setFormError] = useState(false) ;
    const [submitted, setSubmitted] = useState(false) ;
    const [values, setValues] = useState({username:'', newBio: ''}) ;
    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value}) ;
        
    }

    const[updateBio, {loading}] = useMutation(UPDATEBIO,{
        update(_, result){
            console.log(result);
            setFormError(false) ;
            setCurrBio(values.newBio) ;
        },
        onError(err){
            console.log(err.graphQLErrors[0].extensions.exception.errors);
            setErrors(err.graphQLErrors[0].extensions.exception.errors) ;
            setFormError(true) ;
        },
        variables:{
          username:user.username,
          newBio: values.newBio
        } 
    })

    const onSubmit = (event) => {
        event.preventDefault() ;
        setSubmitted(true) ;
        updateBio() ;
    }


    return (
       <div className="form">
       <div className="Info">
        <h1>Profile</h1>
        <h2>{user.username}</h2>
        <h4>{currBio}</h4>
        <h4>{user.email}</h4>
        
       </div>
        <form class="ui form" noValidate classname={loading ? "loading" : ''}>
        
          
            <div class="field">
                <label className="label">Update your bio here!</label>
                <input type="text" name="newBio" placeholder="Write here!"
                value={values.newBio} onChange={onChange}
                error = {errors.newBio ? true : false}/>
            </div>
            
            <button primary class="ui button" type="submit" onClick={onSubmit} >Update</button>
            {(submitted && !formError  ) ? (

                <Message
                  positive
                  header="Update Successful!"
                  content="Your bio is now updated!"
                />
              ) : (
                (submitted === true)?(<Message
                    negative
                    header="Cannot update!"
                    list={Object.values(errors).map(value=>(
                        <li key={value} > {value}</li>
                    ))}
                    />):(<div></div>)
                
              )}
        </form>
       
        
       </div>
    )
}

const UPDATEBIO = gql`
  mutation updateBio(
    $username: String!
    $newBio: String!
  ) {
    updateBio(
        username: $username
        newBio: $newBio
    ) {

      username
      bio
    }
  }
`;
export default UpdateProfilePage
