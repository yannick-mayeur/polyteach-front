import React from 'react';
import { Link } from 'react-router-dom';

const dropdownContent = (props) => (

    <div className="dropdownContainer">
        <div className="navigation__container--userLogo">
            <div className="dropdownContent">
                <div>
                <div className="dropdownContent--user mt-2"></div>
                <p className="dropdownContent--user-text">{props.name}</p>
                    <Link to="/" style={{ textDecoration: 'none' }} className="linkcontent"><p className="dropdownContent-textOutside">Home</p></Link>

                    {props.authorized ?
                        <Link to="/courseEditor" style={{ textDecoration: 'none' }} className="linkcontent"><p className="dropdownContent-textOutside">Create a course</p></Link>
                        : ""
                    }
                    {props.authorized ?
                        <Link to="/live" style={{ textDecoration: 'none' }} className="linkcontent"><p className="dropdownContent-textOutside">Start a live</p></Link>
                        : ""
                    }

                    <p className="dropdownContent-textOutside" 
                    onClick={() => {
                        localStorage.clear();
                        window.location.replace('/')
                        }}>
                    Sign out of PolyTeach</p>
                </div>
            </div>
        </div>
    </div>
);

export default dropdownContent;

