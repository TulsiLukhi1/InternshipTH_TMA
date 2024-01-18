import React from "react";
import { Link } from "react-router-dom";
import "./userpanel.css";
const UserPanel = () => {
  const isAdmin = false;
  return (
    <>
      <div className="user-panel">
        <div className="logo-container userpanel-container">
          <Link to="/" className="inline-con">
            <h4
              className="appName"
              style={{ color: isAdmin ? "#333333" : "#ef5757" }}
            >
              SYNCIT
            </h4>
          </Link>
        </div>

        <div className="userpanel-breakline"></div>


        <div className="user-links">
          <div className="">
            <Link to='/user/task' className="task">My Task</Link>
          </div>
          <div className="">
            <Link to='/user/inbox' className="inbox">Inbox</Link>
          </div>
          <div className="userpanel-breakline"></div>
          <div className="userpanel-link-div" >
            <Link to='/user/dashboard' className="user-link">Dashboard</Link>
          </div>
          <div className="userpanel-link-div" >
            <Link to='/user/portfolio' className="user-link">Portfolio</Link>
          </div>
          <div className="userpanel-link-div" >
            <Link to='/user/teams' className="user-link">Teams</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPanel;
