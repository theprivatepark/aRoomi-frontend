import React from 'react';
import CarouselImg from './CarouselImg';
import { Link } from "react-router-dom";

const ListingShow = props => {
  return (
    <div className="col-lg-9">
      <div className="card mt-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-3">
              LISTING OWNER'S PHOTO HERE
              <Link to="/profile">
                <button type="button" class="btn btn-outline-warning">View Profile</button>
              </Link>
            </div>
            <div className="col">
              <CarouselImg />
            </div>
          </div>
        </div>
        <div className="card-body">
          <h3 className="card-title">Room Header</h3>
          <p>Description: {props.clickedListing.description}</p>
          <p>Address:</p>
          <p>College:</p>
          <p>Price:</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default ListingShow;