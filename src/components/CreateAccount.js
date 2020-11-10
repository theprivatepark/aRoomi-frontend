import React, { Component } from 'react';
import image from '../assets/images/ourlogo.png';
// import { Link }from 'react-router-dom';


class CreateAccount extends Component {


  submitHandler = (event) => {
    event.preventDefault()
    const newObj = {
      first_name: event.target.firstname.value,
      last_name: event.target.lastname.value,
      username: event.target.username.value,
      password: event.target.password.value
    }
    
    fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newObj)
    }).then(r => r.json())
    .then(data => console.log(data))

  }

  render() {
    return (
      <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img src={image} class="img-fluid" alt="" />
            </div>
            <div className="col-lg-7 px-5 pt-5">
              <h3 className="font-weight-bold py-3">Create Account</h3>

              <form onSubmit={(e) => this.submitHandler(e)}>
              <div class="form-group">
                  <label for="firstname">First Name</label>
                  <input type="text" class="form-control" id="firstname" placeholder="Enter First Name"/>
                </div>

                <div class="form-group">
                  <label for="lastname">Last Name</label>
                  <input type="text" class="form-control" id="lastname"placeholder="Enter Last Name"/>
                </div>

                <div class="form-group">
                  <label for="Username">Username</label>
                  <input type="text" class="form-control" id="username" placeholder="Enter Username"/>
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="*******"/>
                </div>
              
                <button type="submit" class="btn1">Submit</button>
              </form>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CreateAccount; 