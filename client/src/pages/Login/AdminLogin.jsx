import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import './login.css'
import { useState } from 'react'

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log(`Logging in with email: ${email}`);
  };

  return (
    <div>
      <Navbar isVisible={false}  />
      <div className="login-container">
        <div className="login-content">
        <h2 style={{ marginBottom: '20px' }}>Welcome to SYNCIT Admin</h2>
          
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
            Admin Login
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
