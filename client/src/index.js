import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ApolloProvider from './ApolloProvider' ;
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  ApolloProvider,
  document.getElementById('root')
);

reportWebVitals();