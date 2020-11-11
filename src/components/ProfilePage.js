import React, { Component } from 'react';
import { Link } from "react-router-dom";



class ProfilePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Link to="/listings">
        <button type="button" class="btn btn-outline-warning">Back to Listing</button>
        </Link>
        <div className="card m-5">
          <div className="row m-5">
            <div className="col-md-5">

              <img src="http://via.placeholder.com/300x250" />

            </div>

            <div className="col-md-7">
              <p className="lead">
                <h2>Name: </h2>
                <p id="biography">Biography:</p>
                <p id="age">Age:</p>
                <p id="gender">Gender:</p>
                <p id="has_pets">Has Pets:</p>
                <p id="smoker">Smoker:</p>
                <p id="allergies">Allergies:</p>
                <p id="weekend_activities">Weekend Activities:</p>
                <p id="able_to_meet_payments">Able to Meet Payments:</p>
              </p>

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage;