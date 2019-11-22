// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import { ScrollCourses } from './ScrollCourses.container';
import {LiveCard} from '../components/LiveCard';
const studentLive_URL= 'livestudent/';

// Store
import { fetchAllMyCourses, removeCourse, bookmarkCourse, unbookmarkCourse, rateCourseAndRefresh, updateRateCourseAndRefresh } from '../store/actions/courses.action';
import { getActiveLives } from '../store/actions/index';

class MainContent extends Component {
  componentWillMount = () => {
    this.props.fetchAllMyCourses();
    this.props.getActiveLives();
  };

  toogleBookmarkCourse = (course) => {
    if (course.bookmarked) {
      this.props.unbookmarkCourse(course);
    } else {
      this.props.bookmarkCourse(course);
    };
  }

  rateCourse = (course, rate) => {
    if (course.rating) {
      console.log("rate", course, rate)
      this.props.rateCourseAndRefresh(course, rate)
    } else {
      this.props.updateRateCourseAndRefresh(course, rate)
    }
  }


  render() {
    return (
      <div className="content">
        <div className="courseShowcase ml-5">
                {this.props.courses && this.props.courses.length > 0 && this.props.courses.map(course => course.bookmarked).reduce((acc, current) => acc || current) ?
                    <ScrollCourses user={this.props.user} removeCourse={this.props.removeCourse} rateCourse={this.rateCourse} toogleBookmarkCourse={this.toogleBookmarkCourse} courses={this.props.courses.filter(course => course.bookmarked)} name="My Bookmarked Courses"></ScrollCourses>
                    : <h1 style={{ textAlign: "center" }} className="mt-5">{this.props.user && this.props.user.role === 0? "You have no bookmarked courses yet :(" : ""}</h1>}

        {this.props.courses && this.props.courses.length > 0 ?
          <ScrollCourses user={this.props.user} removeCourse={this.props.removeCourse} rateCourse={this.rateCourse} toogleBookmarkCourse={this.toogleBookmarkCourse} courses={this.props.courses.filter(course => course.name.toLowerCase().includes(this.props.search.toLowerCase()))} name="My Courses"></ScrollCourses>
          : <h1 style={{ textAlign: "center" }} className="mt-5">You have no courses yet :(</h1>}


          <div className="container">
            <div className="card-group">
              <div className="row">
                {(this.props.lives && this.props.lives.length > 0) ?
                    this.props.lives.map(live => {
                      const live_URL = ''+studentLive_URL+ live.idsession;
                      return <LiveCard key={live.id} live={live} liveURL={live_URL} />
                    })
                    :
                    <div className="mx-auto text-center"> <h1>There are no teachers currently livestreaming. </h1> </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { courses: state.courses.myCourses,
            search: state.search.searchQueryCourse,
            user: state.login.user,
            lives: state.courses.myLives,}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllMyCourses, bookmarkCourse, getActiveLives, unbookmarkCourse, rateCourseAndRefresh, updateRateCourseAndRefresh, removeCourse }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
