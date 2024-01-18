import React from "react";
import { Link } from "react-router-dom";
import "./sidepanel.css";

const SidePanel = () => {
  const isAdmin = true;
  return (
    <>
      <div className="side-panel" style={{ "backgroundColor": isAdmin ? '#efefef' : '#2c2c2c' }}>

        <div className="logo-container sidepanel-container">
          <Link to="/" className="inline-con">
            <h4 className="appName adminName" style={{"color": isAdmin ? '#333333' : '#ef5757'}}>SYNCIT</h4>
          </Link>
        </div>
        <div className="break-line"></div>
        <div className="links">
          <div className="">
            <Link to='/admin/workspace' className="workspace">My Workspace</Link>
          </div>
          <div className="break-line"></div>
          <div className="link-div" >
            <Link to='/admin/management' className="link">Management</Link>
          </div>
          <div className="link-div" >
            <Link to='/admin/developers' className="link">Developers List</Link>
          </div>
          <div className="link-div" >
            <Link to='/admin/teams' className="link">Teams</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
