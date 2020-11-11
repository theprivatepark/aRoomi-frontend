import React from 'react';

const SingleListing = props => {
  return (
    <div className="container">
      <p>{props.listing.address}</p>
      <p>{props.listing.description}</p>
      <p>{props.listing.price}</p>

    </div>
  )
}

export default SingleListing;