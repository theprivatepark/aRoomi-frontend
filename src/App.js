import React, { Component, useState } from 'react';
import Body from './containers/Body';
import Header from './layouts/Header';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) //useState returns an array. HOOKS
  const onClickHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }
    return (
      <Router>
        <div className="App">
        <Header isLoggedIn={isLoggedIn}/>
        <button onClick={onClickHandler}>TESTING Login/Logout!</button>
        <Body/> 
        <Login/>
        </div>
      </Router>
    );
  
}

export default App;
