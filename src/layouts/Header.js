import React from 'react';
import image from '../assets/images/aroomi-logo.png'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'



const Header = props => {
  return (
    <div className="container-fluid mt-3">

      <div className="row align-items-center">
        <div className="col">
          <Link to="/">
            <img src={image} id="aroomi-logo" alt="" />
          </Link>
        </div>
        <div className="col-8">
        </div>
        <div className="col-3">
          <div className="align-right">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <Button variant="light">
                <Link to="/profile">
                  <input type="radio" /> Profile
                </Link>
              </Button>
                <Button variant="light">
                <Link to="/createlisting">
                  <input type="radio" /> Create Listing
                </Link>
              </Button>

                <Button variant="light" onClick={props.logout}>
                  <Link to="/login">
                <input type="radio" /> Logout
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header;