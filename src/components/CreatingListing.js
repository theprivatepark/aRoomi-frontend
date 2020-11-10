import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



class CreateListing extends Component {

  state = {
    collegeData: [],
    dropdownCollege: "",
    isSubmitted: false
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

  handleChange = (e) => {
    this.setState({ dropdownCollege: e.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault()
    
    const newListing = {
      price: event.target.price.value, 
      description: event.target.description.value,
      address: event.target.address.value,
      college_id: this.state.dropdownCollege
    }


    return fetch("http://localhost:3001/listings", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newListing)
    })
    .then(r => r.json())
    .then(data => {this.setState({isSubmitted:!this.state.isSubmitted})})
  }

  render() {
    if (this.state.isSubmitted) {
      return <Redirect to={'/'}/>
    }
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

                <form onSubmit={(event) => {this.submitHandler(event)}}>
                    <div className="form-group">
                      <label for="school-list">Select School</label>
                      <select className="form-control" id="school-list" onChange={this.handleChange}>
                        
                      {this.state.collegeData.map(college => <option value={college.id} >{college.name}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="address">Address:</label>
                      <input type="text" className="form-control" id="address" placeholder="Enter Address" />
                    </div>
                    <div className="form-group">
                      <label for="price">Price/month:</label>
                      <input type="text" className="form-control" id="price" placeholder="Enter Price/month" />
                    </div>
                    <div className="form-group">
                      <label for="description">Description:</label>
                      <input type="text" className="form-control" id="description" placeholder="Enter Description" />
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