import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './HomePage/Homepage';
import Posts from './Posts/Posts';
import LoginForm from './Login/LoginForm';
import NotFound from './NotFound/NotFound';
import Signup from './Signup/Signup';
import Navbar from './Navbar/Navbar';

function App() {

  return (
  
      
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={Signup} />
   <Route component={NotFound} />
    </Switch>      
    </Router>
 
    </div>
      
      
    
   
    
  );
}

export default App;
