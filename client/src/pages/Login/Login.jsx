import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import './login.css'
import { useState } from 'react'
import './../..'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('')

  const handleLogin = () => {
    // Implement your login logic here
    console.log(`Logging in with email: ${email}`);
  };

  return (
      <div>
        <Navbar isVisible={false} showAdminbtn={true}/>
        <div className="login-container">
        <div className="login-content">
          <h2 className=''>Welcome to SYNCIT</h2>
          <p className=''>To get started, please sign in</p>
          <div className="continue-with-google">
            <button className='g-btn'>Continue with Google</button>
          </div>
          <div className="or-container">
          <div className="or-line"></div>
          <div className="or-text">or</div>
          <div className="or-line"></div>
        </div>
          <div className="email-section">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <p className="signup-message">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
        </div>
            </div>
      </div>
  )
}

export default Login