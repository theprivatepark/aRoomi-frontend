import React, { Component } from 'react';

class CreateListing extends Component {

  state = {
    collegeData: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/colleges")
    .then(response => response.json())
    .then(data => {
      this.setState({
        collegeData: data
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="card m-5">
          <h3 className="font-weight-bold py-3">Create Listing</h3>
          <div className="row">

            <div className="col">
              <div className="card m-5">
                <form>
                  <div className="form-group">
                    <label for="exampleFormControlFile1">Add Listing Image</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                  </div>
                </form>
              </div>
            </div>

            <div className="col">
              <div className="card m-5">
                <form>
                  <div className="form-group">
                    <label for="school-list">Select School</label>
                    <select className="form-control" id="school-list">
                      
                     {this.state.collegeData.sort(function(a, b){return a.name-b.name}).map(college => <option>{college.name}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="address">Address:</label>
                    <input type="text" className="form-control" id="new-address" placeholder="Enter Address" />
                  </div>
                  <div className="form-group">
                    <label for="price">Price/month:</label>
                    <input type="text" className="form-control" id="new-price" placeholder="Enter Price/month" />
                  </div>
                  <div className="form-group">
                    <label for="description">Description:</label>
                    <input type="text" className="form-control" id="new-description" placeholder="Enter Description" />
                  </div>
                  <button type="submit" className="btn1">Submit</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default CreateListing;