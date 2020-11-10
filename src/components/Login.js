import React from 'react';
import image from '../assets/images/ourlogo.png';
// import { Link }from 'react-router-dom';

const Login = () => {
  return(
    <section className="Form my-4 mx-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img src={image} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h4 className="font-weight-bold py-3">Sign into your account</h4>
            <form>
              <div className="form-row">
                <div className="col-lg-7">
                  <input type="email" placeholder="Username" className="form-control my-3 p-4"/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input type="password" placeholder="Password" className="form-control my-3 p-4"/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <button type="button" className="btn1" mt-3>Login</button>
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

export default Login; 