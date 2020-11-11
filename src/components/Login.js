import React, { Component } from 'react';
import image from '../assets/images/ourlogo.png';
// import { Link }from 'react-router-dom';

class Login extends Component {

  state = {  
    username: "",
    password: "",
    
   }


   handleUserChange = (event) => {
     this.setState({
       username: event.target.value
     })
   }

   handlePassChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
   

   handleSubmit = (event) => {
    event.preventDefault()

    const newObj = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(newObj)

    fetch('http://localhost:3001/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObj)
    })
    .then(r => r.json())
    .then(response => {
    if (response.logged_in) {
      this.props.setCurrentUser(response)
    } else {
      console.log(response.errors)
      }
    })
   }

  render() {
    return(
      <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img src={image} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-7 px-5 pt-5">
              <h4 className="font-weight-bold py-3">Sign into your account</h4>
  
              <form  onSubmit={this.handleSubmit} >
                <div className="form-row">
                  <div className="col-lg-7">
                    <input type="text" name="username" value={this.state.username} id="username" placeholder="Username" className="form-control my-3 p-4" onChange={this.handleUserChange}/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input type="password" value={this.state.password} id="password" placeholder="Password" className="form-control my-3 p-4" onChange={this.handlePassChange}/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="submit" className="btn1" mt-3>Login</button>
                  </div>
                </div>
                <p>Don't have an account? <a href="#">Register Here</a></p>
              </form>
  
            </div>
          </div>
        </div>
      </section>
    )

    }
}

export default Login; 