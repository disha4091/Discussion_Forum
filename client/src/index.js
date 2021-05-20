import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ApolloProvider from './ApolloProvider' ;


ReactDOM.render(
  ApolloProvider,
  document.getElementById('root')
);

reportWebVitals();