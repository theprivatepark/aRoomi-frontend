import React from 'react';
import image from '../assets/images/aroomi-logo.png'
import { Link } from "react-router-dom";


const Header = props => {
  return (
    <div className="container-fluid mt-3">

      <div className="row align-items-center">
        <div className="col">
          <Link to="/">
          <img src={image} id="aroomi-logo" alt=""/>
          </Link>
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
                <Link to="/createlisting">
                <input type="radio" /> Create Listing
                </Link>
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