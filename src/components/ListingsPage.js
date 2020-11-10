import React from 'react';
import SchoolListings from './SchoolListings';
import ListingShow from './ListingShow';

const ListingsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <SchoolListings />
        <ListingShow/>
      </div>
    </div>
  )
}

export default ListingsPage;