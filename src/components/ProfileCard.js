import React from 'react';
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return(
    <div>
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
                <Link to="/">
                <button type="submit" className="btn1">Submit</button>
                </Link>
              </form>
    </div>
  )
}

export default ProfileCard;