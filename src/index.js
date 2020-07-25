import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

// Interceptor for all requests
// We need to pass a function that will be executed for each re uests
axios.interceptors.request.use(request => {
  console.log(request);
  return request;
}, error => {
  console.log(error);
  // Return error to component if any pecific operation is to be performed there
  return Promise.reject(error);
});

// Interceptors for all response
axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  // Return error to component if any pecific operation is to be performed there
  return Promise.reject(error);
});

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// Addading a common header
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// Adding header to specific requests eg. get or post requests
axios.defaults.headers.post['Content-Type'] = "application/json"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
