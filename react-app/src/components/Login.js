import React from 'react';
import '../css/login.css';
import { FaUser,FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='wrapper' style={{paddingTop:"50px"}}> 
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required/>
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required/>
          <FaLock className='icon'/>
        </div>
        <div className='remember-forgot'>
          <label><input type='checkbox'/>Remember me</label>
          <a href='#'>Forgot Password? </a>
        </div>
        <button type='Submit'>Login</button>
        <div className='register-link'>
          <p>Don't have any account?  <a href='#'>Register</a> </p>
        </div>
      </form>
    </div>
  )
}

export default Login
