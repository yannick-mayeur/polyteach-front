// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import { ScrollCourses } from './ScrollCourses.container';

// Store
import { fetchAllMyCourses, removeCourse, bookmarkCourse, unbookmarkCourse, rateCourseAndRefresh, updateRateCourseAndRefresh } from '../store/actions/courses.action';


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
      this.props.rateCourseAndRefresh(course, rate)
    } else {
      this.props.updateRateCourseAndRefresh(course, rate)
    }
  }


  render() {
    return (
      <div className="content">
        <div className="courseShowcase ml-5">
          {this.props.courses && this.props.courses.length > 0 && this.props.courses.map(course => course.bookmarked).reduce((accumulator, current) => accumulator || current) ?
            <ScrollCourses removeCourse={this.props.removeCourse} rateCourse={this.rateCourse} toogleBookmarkCourse={this.toogleBookmarkCourse} courses={this.props.courses.filter(course => course.bookmarked)} name="Bookmarked Courses"></ScrollCourses>
            : <h1 style={{ textAlign: "center" }} className="mt-5">You have no bookmarked courses yet :(</h1>}
          {this.props.courses && this.props.courses.length > 0 ?
            <ScrollCourses removeCourse={this.props.removeCourse} rateCourse={this.rateCourse} toogleBookmarkCourse={this.toogleBookmarkCourse} courses={this.props.courses.filter(course => course.name.toLowerCase().includes(this.props.search.toLowerCase()))} name="My Courses"></ScrollCourses>
            : <h1 style={{ textAlign: "center" }} className="mt-5">You have no courses yet :(</h1>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { courses: state.courses.myCourses,
            search: state.search.searchQueryCourse }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllMyCourses, bookmarkCourse, unbookmarkCourse, rateCourseAndRefresh, updateRateCourseAndRefresh, removeCourse }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
