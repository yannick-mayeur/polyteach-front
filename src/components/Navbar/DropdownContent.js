import React from 'react';
import { Link } from 'react-router-dom';


const dropdownContent = () => (

  <div className="dropdownContainer">
    <div className="navigation__container--userLogo">
      <div className="dropdownContent">
        <div>
        <p className="dropdownContent-textOutside">My Dashboard</p>
        <Link to="/" style={{textDecoration: 'none'}} className="linkcontent"><p className="dropdownContent-textOutside">Home</p></Link>
        <Link to="/courseEditor" style={{textDecoration:'none'}} className="linkcontent"><p className="dropdownContent-textOutside">Create a course</p></Link>
        <p className="dropdownContent-textOutside">Sign out of PolyTeach</p>
        </div>
      </div>
    </div>
  </div>
);

export default dropdownContent;

