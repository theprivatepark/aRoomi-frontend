import React, { Component, useState } from 'react';
import Body from './containers/Body';
import Header from './layouts/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-rom'; 

import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) //useState returns an array. HOOKS
  const onClickHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }
    return (
      <div className="App">
      <Header isLoggedIn={isLoggedIn}/>
      {/* <button onClick={onClickHandler}>Login/Logout!</button> */}
      <Body/> 
      </div>
    );
  
}

export default App;
