import React, { Component } from 'react';
import Navigation from './Navigation'
import SearchPage from '../components/SearchPage'

class Body extends Component {
  render() {
    return(
      <div>
      <Navigation />
      <SearchPage />
      </div>
    )
  }
}

export default Body;