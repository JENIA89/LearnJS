import React from 'react';
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import Welcome from '../welcome/Welcome'
import './App.css';

function App() {
  return ( <
    div className = "App" >

    <
    Welcome name = 'Мой друг' / >
    <
    Header / >
    <
    Main / >

    <
    Footer / >

    <
    /
    div >
  );
}

export default App;