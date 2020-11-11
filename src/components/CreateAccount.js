import React, { Component } from 'react';
import image from '../assets/images/ourlogo.png';
import { Redirect } from 'react-router-dom';


class CreateAccount extends Component {

  state = {
    isCreated: false
  }

  submitHandler = (event) => {
    event.preventDefault()
    const newObj = {
      first_name: event.target.firstname.value,
      last_name: event.target.lastname.value,
      username: event.target.username.value,
      password: event.target.password.value
    }

    return fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObj)
    })
    .then(r => r.json())
    .then(data => this.setState({isCreated: true}))

  }

  render() {
    if (this.state.isCreated) {
      return <Redirect to={'/'}/>
    }
    return (
      <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-7 px-5 pt-5">
              <h3 className="font-weight-bold py-3">Create Account</h3>

              <form onSubmit={(e) => this.submitHandler(e)}>
                <div className="form-group">
                  <label for="firstname">First Name</label>
                  <input type="text" className="form-control" id="firstname" placeholder="Enter First Name" />
                </div>

                <div className="form-group">
                  <label for="lastname">Last Name</label>
                  <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name" />
                </div>

                <div className="form-group">
                  <label for="Username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter Username" />
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="*******" />
                </div>

                <button type="submit" className="btn1">Submit</button>
              </form>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CreateAccount; 