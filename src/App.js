import React, { Component } from 'react';
import Body from './containers/Body';
import Header from './layouts/Header';
import Login from './components/Login';
import ListingsPage from './components/ListingsPage';
import CreateAccount from './components/CreateAccount';
import CreateListing from './components/CreatingListing';
import ProfilePage from './components/ProfilePage';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {
    searchedSchool: null,
    listingsData: [],
    isLoggedIn: false,
    user: {}
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/listings")
      .then(response => response.json())
      .then((listingData) => this.setState({ listingsData: listingData }))
      
  }

  handleChange = (e) => {
    this.setState({
      searchedSchool: e.value
    })
  }

  setCurrentUser = (userData) => {
    this.setState({ 
      user: userData.user,
      isLoggedIn: true
     })
  }
    
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  logout = () => {
    fetch("http://localhost:3001/logout")
    .then(response => response.json())
    .then(console.log)
  }



  render() {
    // if (this.state.searchedSchool) {
    //   return <Redirect to={'/listings'}/>
    // }
    // this.state.searchedSchool ?  <Redirect to='/listings'/> : console.log("boo")
    return (

      <div className="App">
        <Header logout={this.logout}/>
        <Switch>
          <Route exact path="/" render={() => this.state.searchedSchool ? <Redirect to='/listings'/> : <Body handleChange={this.handleChange} />} />
          <Route exact path="/login" render={() => this.state.isLoggedIn ? <Body handleChange={this.handleChange} /> : <Login setCurrentUser={this.setCurrentUser} />} />
          <Route exact path="/createaccount" component={CreateAccount} />
          <Route exact path="/listings" render={() => <ListingsPage searchedSchool={this.state.searchedSchool} listingsData={this.state.listingsData} />} />
          <Route exact path="/createlisting" component={CreateListing} />
          <Route exact path="/profile" component={ProfilePage} />
        
        </Switch>
      </div>

    );
  }
}

export default App;
