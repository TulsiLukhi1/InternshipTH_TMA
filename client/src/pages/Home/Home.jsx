import React from 'react'
import './home.css'
import Navbar from '../../layout/navbar/Navbar'

export const Home = () => {
  return (
    <>
    <Navbar showNav={true}/>
    <div className="home-container">
      <div className='random-text-1'>A better online task management for work </div>
      <div className='random-text-2'>It makes it easier for a team organize everthing</div>
    </div>

    </>
    
  )
}
