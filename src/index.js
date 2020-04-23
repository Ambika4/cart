import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALCLXcQ8stOQqrB_zfg5Bjen4l3tLaeVQ",
  authDomain: "cart-f957c.firebaseapp.com",
  databaseURL: "https://cart-f957c.firebaseio.com",
  projectId: "cart-f957c",
  storageBucket: "cart-f957c.appspot.com",
  messagingSenderId: "712148687584",
  appId: "1:712148687584:web:ceada910bba47be825ce85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



