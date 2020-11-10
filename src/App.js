import React, { Component } from 'react';
import Body from './containers/Body';
import Header from './layouts/Header';
import Login from './components/Login';
import ListingsPage from './components/ListingsPage';
import CreateAccount from './components/CreateAccount';
import CreateListing from './components/CreatingListing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {
    searchedSchool: "",
    schoolData: [],
    listingsData: []
  }

  theySearched = () => {
    console.log("hey")
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Body theySearched={this.theySearched}/>} />
            <Route path="/login" exact component={Login} />
            <Route path="/Create" exact component={CreateAccount} />
            <Route path="/Listings" exact component={ListingsPage} />
            <Route path="/CreateListing" exact component={CreateListing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
