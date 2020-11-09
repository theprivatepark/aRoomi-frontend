import React from 'react';
// import { Link }from 'react-router-dom';

const CreateAccount = () => {
  return (
    <form>
      <div className="form-group">
        <label for="firstname">First Name</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="first name"/>
      </div>
      <div className="form-group">
        <label for="lastname">Last Name</label>
        <input type="password" className="form-control" id="exampleInputPassword1"placeholder="last name"/>
      </div>
      <div className="form-group">
        <label for="username">Username</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="username"/>
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="******"/>
      </div>
   
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default CreateAccount; 