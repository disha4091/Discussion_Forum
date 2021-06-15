import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ApolloProvider from './ApolloProvider' ;


ReactDOM.render(
  ApolloProvider,
  document.getElementById('root')
);

reportWebVitals();