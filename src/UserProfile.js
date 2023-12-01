// UserProfile.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="app-info">
        <h1>Money Analysis App | </h1>
      </div>
      {/* Add a Link to AddNewSpending page */}
      <Link to="/" className='link1'>Home</Link>
      <Link to="/add-new-spending" className='link2'>Add New Spending</Link>
          
      <div className="user-info">
      <img
          src="https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png"
          alt="User"
          className="profile-picture"
        />
        <div className="text-info">
          <span className="username">Ilir Dema</span>
          <span className="bank-name">Scotia Bank</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

