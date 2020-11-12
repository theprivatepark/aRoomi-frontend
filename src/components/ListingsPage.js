import React, {Component} from 'react';
import SchoolListings from './SchoolListings';
import ListingShow from './ListingShow';

class ListingsPage extends Component {

  state = {
    clickedListing: null
  }

  clickedListingHandler = listing => {
    this.setState({
      clickedListing: listing
    })
  }

  render() {
  return (
    <div className="container">
      <div className="row">
        <SchoolListings searchedSchool={this.props.searchedSchool} listingsData={this.props.listingsData} clickedListingHandler={this.clickedListingHandler}/>
        {this.state.clickedListing ? <ListingShow clickedListing={this.state.clickedListing}/> 
        : 
        null}
        
      </div>
    </div>
  )
  }
}
 export default ListingsPage;