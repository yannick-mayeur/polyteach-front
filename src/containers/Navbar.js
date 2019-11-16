import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import NavigationItem from '../components/Navbar/NavigationItem'
import SearchLogo from '../static/images/search-icon.svg';
import PolyTeachLogo from '../static/images/PolyTeach_Logo_RGB.png';
import AddLogo from '../static/images/add.svg';
import LogoutLogo from '../static/images/logout.svg';
import DropdownArrow from '../static/images/drop-down-arrow.svg';
import DropdownContent from "../components/Navbar/DropdownContent";


class navigation extends Component {
  state = {
    scrolling: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /** changes the scrolling state depending on the Y-position */
  handleScroll = (event) => {
    if (window.scrollY === 0) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY > 50) {
      this.setState({ scrolling: true });
    }
  }


  render() {
    const { scrolling } = this.state;
    //const { showCourses } = this.props;

    return (
      <nav className={"navigation " + (scrolling ? "black" : "")} >
        <ul className="navigation__container">
          <NavigationItem link="/" exact><img className="navigation__container--logo" src={PolyTeachLogo} alt="" /></NavigationItem>
          <Link to="/" style={{ textDecoration: 'none' }}><div className="navigation__container-link pseudo-link">My Courses</div></Link>
          <Link to="/bookmarks" style={{ textDecoration: 'none' }}><div className="navigation__container-link pseudo-link">Bookmarks</div></Link>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}><div className="navigation__container-link pseudo-link">Dashboard</div></Link>
      
          <div className="navigation__container--left">
            <SearchLogo className="logo" />
            <input
              //onChange={showCourses}
              className="navigation__container--left__input"
              type="text"
              placeholder="Title, genres, people" />
          </div>
          <Link to="/courseEditor" style={{ textDecoration: 'none' }}>
          <button className="header__container-btnAddCourse">
          <AddLogo className="header__container-btnAddCourse-add" />
          Add a new course
        </button>  
        </Link>
          <button className="header__container-btnLogout">
          <LogoutLogo className="header__container-btnLogout-add" />
          Log Out
        </button> 
          <DropdownContent />
          <DropdownArrow className="navigation__container--downArrow" />
        </ul>
      </nav>
    )
  }
}

export default navigation; 