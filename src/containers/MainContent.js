// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import { ScrollCourses } from './ScrollCourses.container';

// Store
import { fetchOwnCourses } from '../store/actions';


class MainContent extends Component {
  componentWillMount = () => {
    this.props.fetchOwnCourses();
  };

  render() {
    return (
      <div className="content">
        <div className="courseShowcase ml-5">
          <ScrollCourses courses={{data: this.props.courses.data.filter(course => course.name.toLowerCase().includes(this.props.searchQueryCourse.toLowerCase())), fetching: this.props.courses.fetching}} name="MY COURSES"></ScrollCourses>
          <ScrollCourses courses={{data: this.props.courses.data.filter(course => course.name.toLowerCase().includes(this.props.searchQueryCourse.toLowerCase())), fetching: this.props.courses.fetching}} name="🔴 Live Streams"></ScrollCourses>
          <ScrollCourses courses={{data: this.props.courses.data.filter(course => course.name.toLowerCase().includes(this.props.searchQueryCourse.toLowerCase())), fetching: this.props.courses.fetching}} name="IG5 Courses"></ScrollCourses>
          <ScrollCourses courses={{data: this.props.courses.data.filter(course => course.name.toLowerCase().includes(this.props.searchQueryCourse.toLowerCase())), fetching: this.props.courses.fetching}} name="IG4 Courses"></ScrollCourses>
          <ScrollCourses courses={{data: this.props.courses.data.filter(course => course.name.toLowerCase().includes(this.props.searchQueryCourse.toLowerCase())), fetching: this.props.courses.fetching}} name="IG3 Courses"></ScrollCourses>
        
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    courses: state.ownCourses,
    searchQueryCourse: state.search.searchQueryCourse
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchOwnCourses }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
