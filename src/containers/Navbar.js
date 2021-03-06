import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import NavigationItem from '../components/Navbar/NavigationItem'
import SearchLogo from '../static/images/search-icon.svg';
import PolyTeachLogo from '../static/images/PolyTeach_Logo_RGB.png';
import AddLogo from '../static/images/add.svg';
import RecLogo from '../static/images/rec.svg';
import LogoutLogo from '../static/images/logout.svg';
import DropdownArrow from '../static/images/drop-down-arrow.svg';
import DropdownContent from "../components/Navbar/DropdownContent";

import { connect } from 'react-redux';
import { updateSearchQueryCourse } from '../store/actions';


class navigation extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    scrolling: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  logOut = () => {
    localStorage.clear();
    window.location.replace('/')
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
          <div className="navigation__container--left">
            <SearchLogo className="logo" />
            <input
              onChange={(event) => this.props.updateSearchQueryCourse(event.target.value)}
              className="navigation__container--left__input"
              type="text"
              placeholder="Course name" />
          </div>

          {
            this.props.user === null ? 
                "" 
            :  this.props.user.role === 0 ? "" :
          <Link to="/live" style={{ textDecoration: 'none' }}>
                    <button className="header__container-btnRecCourse">
                    <RecLogo className="header__container-btnAddCourse-add" />
                    Start Live
                    </button>  
                </Link>
        }

          {
            this.props.user === null ? 
                "" 
            :  this.props.user.role === 0 ? "" :
           
                <Link to="/courseEditor" style={{ textDecoration: 'none' }}>
                    <button className="header__container-btnAddCourse">
                    <AddLogo className="header__container-btnAddCourse-add" />
                    Add a new course
                    </button>  
                </Link>
        }    
          <button className="header__container-btnLogout" onClick={this.logOut}>
          <LogoutLogo className="header__container-btnLogout-add"/>
          Log Out
        </button> 
        {
            this.props.user === null ? 
            <DropdownContent name={""} authorized={this.props.user !== null && this.props.user.role === 1}/>
  
            : 
            <DropdownContent name={this.props.user.firstname + " "+ this.props.user.lastname} authorized={this.props.user !== null && this.props.user.role === 1}/>
        }
                 <DropdownArrow className="navigation__container--downArrow" />
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (store) => ({
    user: store.login.user
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchQueryCourse: newQuery => dispatch(updateSearchQueryCourse(newQuery))
});

export default connect(mapStateToProps, mapDispatchToProps)(navigation);
