import React from 'react';
import SingleListing from './SingleListing'

const SchoolListings = () => {

  return (
    <div className="col-lg-3">
      <div className="card mt-4" id="listings-container">
        <h1 className="my-4">Listings</h1>

        <div className="nav anyClass">
        
        <SingleListing/>
          
        </div>

      </div>
    </div>
  )

}

export default SchoolListings;