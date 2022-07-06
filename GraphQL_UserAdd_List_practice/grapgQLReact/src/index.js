import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const client = new ApolloClient({
    uri: 'http://localhost:4700/graphql',
    cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client} >
      <App/>
    </ApolloProvider>
  </React.StrictMode>
);
