import React from 'react';
import SchoolListings from './SchoolListings';
import SingleListing from './SingleListing';

const ListingsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <SchoolListings />
        <SingleListing/>
      </div>
    </div>
  )
}

export default ListingsPage;