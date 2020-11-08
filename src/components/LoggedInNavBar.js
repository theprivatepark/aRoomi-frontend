import React from 'react';

const LoggedInNavBar = props => {
  return (
    <nav class="navbar navbar-light bg-light static-top">
      <div class="container">
        <a class="navbar-brand" href="#">aRoomi</a>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">

          <label class="btn btn-primary">
            <input type="radio"/> Profile
          </label>

          <label class="btn btn-link">
            <input type="radio" /> View Your Listing
          </label>

        </div>
      </div>
    </nav>
  )
}

export default LoggedInNavBar;