import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import './../Login/login.css'
import { useState } from 'react'

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Logging in with email: ${email}`);
  };

  return (
    <div>
      <Navbar isVisible={false}  />
      <div className="login-container">
        <div className="login-content">
        <h2 style={{ marginBottom: '20px' }}>Welcome to SYNCIT Admin</h2>
          
          <div className="email-section">
            <label htmlFor="email" className='cus-label'>Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              className='cus-input'
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className='cus-label'>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              className='cus-input'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            Admin Login
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
