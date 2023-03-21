import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import BlogPost from './container/BlogPost/BlogPost';
import Mahasiswa from './container/Mahasiswa/Mahasiswa';


const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(
  <React.StrictMode>
    <Mahasiswa />
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();