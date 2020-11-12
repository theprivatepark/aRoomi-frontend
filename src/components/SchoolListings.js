import React from 'react';
import SingleListing from './SingleListing';
import { Link } from 'react-router-dom';

const SchoolListings = props => {
  let filtered = props.listingsData.filter(listing =>  listing.college_id === props.searchedSchool )
  return (
    <div className="col-lg-3">
      <Link to="/">
      <button type="button" className="btn btn-outline-warning">Back to Search</button>
      </Link>
      <div className="card mt-4" id="listings-container">
        <h3 className="m-4">Listings</h3>
        <div className="nav anyClass">
          
          {filtered.map(listing => <SingleListing key={listing.id} listing={listing} clickedListingHandler={props.clickedListingHandler}/>)}
        
        </div>
      </div>
    </div>
  )

}

export default SchoolListings;