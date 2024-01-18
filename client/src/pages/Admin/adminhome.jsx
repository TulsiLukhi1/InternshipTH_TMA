import React from 'react'
import SidePanel from '../../layout/Admin/SidePanel/sidepanel'
import { Outlet } from 'react-router-dom'


const AdminHome = () => {
  return (
    <>
    <div className='ad-container'>
        <SidePanel/>
        <div style={{flex:1}}>
        <Outlet />
        </div>
    </div>
    </>
  )
}

export default AdminHome