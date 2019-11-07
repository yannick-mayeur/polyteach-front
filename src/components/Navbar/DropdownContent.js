import React from 'react';


const dropdownContent = () => (

  <div className="dropdownContainer">
    <div className="navigation__container--userLogo">
      <div className="dropdownContent">
        <div>
          <div className="dropdownContent--user"></div>
          <p className="dropdownContent--user-text">Hard Coded</p>
        </div>
        <div>
          <div className="dropdownContent--user dropdownContent--user-2"></div>
          <p className="dropdownContent--user-text">Accounts</p>
        </div>
        <div>
          <div className="dropdownContent--user dropdownContent--user-3"></div>
          <p className="dropdownContent--user-text">Nico</p>
        </div>
        <p className="dropdownContent-text">Manage Profiles</p>

      </div>
      <div className="dropdownContent dropdownContent--2">
        <p className="dropdownContent-textOutside">My Profile</p>
        <p className="dropdownContent-textOutside">Dashboard</p>
        <p className="dropdownContent-textOutside">Sign out of PolyTeach</p>
      </div>
    </div>
  </div>
);

export default dropdownContent;

