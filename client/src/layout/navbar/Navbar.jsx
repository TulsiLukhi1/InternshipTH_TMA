import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = ({showNav,showAdminbtn}) => {
  return (
    <header className='hdr'>

      <div className='logo-container'>
        <Link to='/'>
          <h4 className='appName'>SYNCIT</h4>
        </Link>
      </div> 
      <nav style={{visibility: showNav ? 'visible' : 'hidden'}}>
        <ul className='nav__links'>
          <li>
            <Link to="/about"  className='navbar-li'>About</Link>
          </li>
          <li>
            <Link to="/contact"  className='navbar-li'>Contact</Link>
          </li>
        </ul>
      </nav>

      {showAdminbtn ? (
        <Link to="/admin/login">
          <button className='btn'>Admin Login</button>
        </Link>
      ) : (
        <Link to="/user/login">
          <button className='btn'>Login</button>
        </Link>
      )}


      
    </header>
  )
}

// #737373
// #ff5757
//e4dfdf


export default Navbar