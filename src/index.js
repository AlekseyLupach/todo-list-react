import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';
import './styles/style.scss';

const store = configureStore({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-82lzi14v.eu.auth0.com"
        clientId="FjpUwByL5BiQZq9iUqhfBkvkNDyMPjzG"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
