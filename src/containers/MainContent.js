// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import { ScrollCourses } from './ScrollCourses.container';

// Store
import { fetchAllMyCourses, removeCourse, bookmarkCourse, unbookmarkCourse, rateCourse, updateRateCourse } from '../store/actions/courses.action';


class MainContent extends Component {
  componentWillMount = () => {
    this.props.fetchAllMyCourses();
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
      this.props.rateCourse(course, rate)
    } else {
      this.props.updateRateCourse(course, rate)
    }
  }


  render() {
    return (
      <div className="content">
        <div className="courseShowcase ml-5">
        {this.props.courses && this.props.courses.length > 0 ?
          <ScrollCourses user={this.props.user} removeCourse={this.props.removeCourse} rateCourse={this.rateCourse} toogleBookmarkCourse={this.toogleBookmarkCourse} courses={this.props.courses.filter(course => course.name.toLowerCase().includes(this.props.search.toLowerCase()))} name="My Courses"></ScrollCourses>
          : <h1 style={{ textAlign: "center" }} className="mt-5">You have no courses yet :(</h1>}
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { courses: state.courses.myCourses,
            search: state.search.searchQueryCourse,
            user: state.login.user }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllMyCourses, bookmarkCourse, unbookmarkCourse, rateCourse, updateRateCourse, removeCourse }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
