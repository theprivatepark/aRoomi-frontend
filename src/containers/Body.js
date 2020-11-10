import React, { Component } from 'react';
import SearchPage from '../components/SearchPage'

class Body extends Component {
  render() {
    return(
      <div className="container">
      <SearchPage handleChange={this.props.handleChange}/>
      </div>
    )
  }
}

export default Body;