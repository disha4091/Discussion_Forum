import React from "react";
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
const Signup = () => {
  return (
    <Grid textAlign="center" style={{ height: "80vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 550 }}>
        <Header as="h1" style={{ color: "#FDCF60" }} textAlign="center">
          Create your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
            />
            <Form.Field
              control={Input}
              icon="at"
              iconPosition="left"
              placeholder="Email-id"
            />
            <Form.Field
              control={TextArea}
              style={{ resize: "none" }}
              placeholder="Tell us more about you...
          Eg Undergraduate at PICT"
            />
            <Button style={{ backgroundColor: "#FDCF60" }} fluid size="large">
              Signup
            </Button>
          </Segment>
        </Form>
        <Message>Already have an account? <Link to="/login">Login</Link></Message>
      </Grid.Column>
    </Grid>
  );
};

export default Signup;
