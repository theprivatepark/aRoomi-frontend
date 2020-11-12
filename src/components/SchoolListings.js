import React from 'react';
import SingleListing from './SingleListing'

const SchoolListings = props => {
  let filtered = props.listingsData.filter(listing =>  listing.college_id === props.searchedSchool )
  return (
    <div className="col-lg-3">
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