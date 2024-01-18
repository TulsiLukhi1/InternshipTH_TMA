import React from 'react'
import UserPanel from '../../../layout/User/UserPanel/uesrpanel'
import { Outlet } from 'react-router-dom'
const UserHome = () => {
  return (
    <>
    <div className='ad-container'>
        <UserPanel/>
        <div style={{flex:1}}>
        <Outlet />
        </div>
    </div>
    </>
  )
}

export default UserHome