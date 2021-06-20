import React from 'react';
import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './HomePage/Homepage';
import LoginForm from './Login/LoginForm';
import NotFound from './NotFound/NotFound';
import Signup from './Signup/Signup';
import Navbar from './Navbar/Navbar';
import Webdev from './Posts/Webdev';
import UpdateProfilePage from './UpdateProfilePage/UpdateProfilePage' ;
import ML from './Posts/ML';
import AI from './Posts/AI';
import { Container } from 'semantic-ui-react'

function App() {

  return (
  
      
    <div className="App">
      <Container>
      <AuthProvider>
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Homepage} />
    <AuthRoute path="/login" component={LoginForm} />
    <AuthRoute path="/signup" component={Signup} />
    <Route path="/webposts" component={Webdev} />
    <Route path="/mlposts" component={ML} />
    <Route path="/aiposts" component={AI} />
    <Route path="/updateBio" component={UpdateProfilePage} />

   <Route component={NotFound} />
    </Switch>      
          </Router>
          </AuthProvider>
    </Container>
    
 
    </div>
      
      
    
   
    
  );
}

export default App;
