import React, { useContext, useState } from 'react';
import './LoginForm.css'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';
  

const LoginForm = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: '',
    password: ''
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(
      _,
      {
        data: { login: userData }
      }
    ) {
      context.login(userData);
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  function loginUserCallback() {
    loginUser();
  }
  
  return (
  
    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 550 }}>
        <Header as='h1' style={{ color: "#FDCF60" }} textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large' noValidate
        onSubmit={onSubmit}
        className={loading ? 'loading' : ''}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'
            type="text"
          value={values.username}
          error={errors.username ? true : false}
          onChange={onChange}/>
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
            />

            <Button style={{ backgroundColor: "#FDCF60" }} fluid size='large' type="submit">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">SignUp</Link>
        </Message>
        {Object.keys(errors).length > 0 && (
          <div className="ui error message">
            <ul className="list">
              {Object.values(errors).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </Grid.Column>
    </Grid>
  );
}
const LOGIN_USER = gql`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
    email
    username
    createdAt
    token
  }
  
}
`;
  


export default LoginForm