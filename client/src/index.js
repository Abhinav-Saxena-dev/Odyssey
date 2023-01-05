import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './redux/store';

let token =  localStorage.getItem("token") ? localStorage.getItem("token") : null

    if(token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.interceptors.request.use(request => {     
    
        return request;
    }, error => {
      //  console.log(error);
        return Promise.reject(error);
    });

    axios.interceptors.response.use(response => {
        // Edit response config
        //console.log(response);
        return response;
    }, error => {
        console.log(error.response);
        return Promise.reject(error);
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
