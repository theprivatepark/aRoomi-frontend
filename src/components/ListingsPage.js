import React from 'react';
import SchoolListings from './SchoolListings';
import ListingShow from './ListingShow';

const ListingsPage = props => {
  return (
    <div className="container">
      <div className="row">
        <SchoolListings searchedSchool={props.searchedSchool} listingsData={props.listingsData}/>
        <ListingShow/>
      </div>
    </div>
  )
}
 export default ListingsPage;