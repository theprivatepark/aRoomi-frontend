import React from 'react';

const SingleListing = props => {
  return (
    <div className="card m-3" onClick={() => props.clickedListingHandler(props.listing)}>
     
        <p>Address: {props.listing.address}</p>
        <p>Description: {props.listing.description}</p>
        <p>Price/month: ${props.listing.price}</p>
     
    </div>
  )
}

export default SingleListing;