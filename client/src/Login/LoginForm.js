import React from 'react'
import './LoginForm.css'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 550 }}>
      <Header as='h1' style={{color: "#FDCF60"}} textAlign='center'>
       Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button style={{backgroundColor: "#FDCF60"}} fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to="/signup">SignUp</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm