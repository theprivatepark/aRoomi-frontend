import React from 'react';
import CarouselImg from './CarouselImg';

const SingleListing = () => {
  return (
    <div className="col-lg-9">
      <div className="card mt-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-3">
              1 of 2
            </div>
            <div className="col">
              <CarouselImg/>         
            </div>
          </div>
        </div>
        <div className="card-body">
          <h3 className="card-title">Room Header</h3>
          <p>Description:</p>
          <p>Address:</p>
          <p>College:</p>
          <p>Price:</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default SingleListing;