import React from 'react';

const LoggedInBar = props => {
  return (
 
      <div class="container">
        
        <div class="btn-group btn-group-toggle" data-toggle="buttons">

          <label class="btn btn-primary">
            <input type="radio"/> Profile
          </label>

          <label class="btn btn-link">
            <input type="radio" /> View Your Listing
          </label>

        </div>
      </div>

  )
}

export default LoggedInBar;