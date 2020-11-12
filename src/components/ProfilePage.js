import React, { Component } from 'react';
import { Link } from "react-router-dom";



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
              <form>
                <div className="form-group">
                  <p className="lead">
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Biography:</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Has Pets:</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option>True</option>
                        <option>False</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Smoker:</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option>True</option>
                        <option>False</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Gender:</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option>Female</option>
                        <option>Male</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="allergies">Allergies:</label>
                      <input type="text" class="form-control" id="allergies" />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Able to Meet Payments On Time:</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option>True</option>
                        <option>False</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Weekend Activites:</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>


                  </p>
                </div>
                <button type="submit" className="btn1">Submit</button>

              </form>

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage;