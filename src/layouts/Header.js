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
          {props.isLoggedIn ? <div className="align-right">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-primary">
                <input type="radio" /> Profile
              </label>
              <label class="btn btn-link">
                <input type="radio" /> Create Listing
              </label>
            </div>
          </div>
            : null}
        </div>
      </div>

    </div>
  )
}

export default Header;