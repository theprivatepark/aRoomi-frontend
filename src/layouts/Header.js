import React from 'react';
import image from '../assets/images/aroomi-logo.png'

const Header = props => {
  return (
    <div className="container-fluid">

      <div className="row align-items-center">
        <div className="col">
          <img src={image} id="landing-page-img" />
        </div>
        <div className="col-8">
        </div>
        <div className="col-3">
          <div className="align-right">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-primary">
                <input type="radio" /> Profile
              </label>
              <label className="btn btn-link">
                <input type="radio" /> Create Listing
              </label>
              <label className="btn btn-link">
                <input type="radio" /> Logout
              </label>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header;