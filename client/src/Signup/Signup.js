import React, {useState, useContext} from "react";
import {Link} from 'react-router-dom'
import "./Signup.css";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Input,
  TextArea,
} from "semantic-ui-react";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';

const Signup = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio:''
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(
      _,
      {
        data: { register: userData }
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
  function registerUser() {
    addUser();
  }

  return (
    <Grid textAlign="center" style={{ height: "80vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 550 }}>
        <Header as="h1" style={{ color: "#FDCF60" }} textAlign="center">
          Create your account
        </Header>
        <Form size="large"
          noValidate
          onSubmit={onSubmit}
          className={loading ? 'loading' : ''}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              type="text"
              name="username"
              value={values.username}
              error={errors.username ? true : false}
              onChange={onChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              error={errors.password ? true : false}
              value={values.password}
              onChange={onChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              error={errors.confirmPassword ? true : false}
              onChange={onChange}
            />
            <Form.Field
              control={Input}
              icon="at"
              iconPosition="left"
              placeholder="Email-id"
              type="email"
              name="email"
              error={errors.email ? true : false}
              value={values.email}
              onChange={onChange}
            />
            <Form.Field
              control={TextArea}
              style={{ resize: "none" }}
              type="text"
              placeholder="Tell us more about you...
          Eg Undergraduate at PICT"
          name="bio"
              value={values.bio}
              error={errors.bio ? true : false}
          onChange={onChange}
            />
            <Button style={{ backgroundColor: "#FDCF60" }} fluid size="large" type="submit">
              Signup
            </Button>
          </Segment>
        </Form>
        <Message>Already have an account? <Link to="/login">Login</Link></Message>
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
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $bio: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        bio: $bio
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;


export default Signup;
