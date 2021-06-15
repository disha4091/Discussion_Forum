import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './HomePage/Homepage';
import Posts from './Posts/Posts';
import LoginForm from './Login/LoginForm';
import NotFound from './NotFound/NotFound';
import Signup from './Signup/Signup';
import Navbar from './Navbar/Navbar';
import Home from './Posts/Posts';
import Webdev from './Posts/Webdev';
import ML from './Posts/ML';
import AI from './Posts/AI';

function App() {

  return (
  
      
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={Signup} />
    <Route path="/webposts" component={Webdev} />
    <Route path="/mlposts" component={ML} />
    <Route path="/aiposts" component={AI} />

   <Route component={NotFound} />
    </Switch>      
    </Router>
 
    </div>
      
      
    
   
    
  );
}

export default App;
