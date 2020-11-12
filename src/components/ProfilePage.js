import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ProfileCard from './ProfileCard';

class ProfilePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Link to="/listings">
          <button type="button" className="btn btn-outline-warning">Back to Listing</button>
        </Link>
        <div className="card m-5">
          <div className="row m-5">
            <div className="col-md-5">
              <img src="http://via.placeholder.com/300x250" />
            </div>
            <div className="col-md-7">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage;