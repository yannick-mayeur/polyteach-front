// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import { ScrollCourses } from './ScrollCourses.container';

// Store
import { fetchOwnCourses } from '../store/actions/index';


class MainContent extends Component {
  componentWillMount = () => {
    this.props.fetchOwnCourses();
  };

  render() {
    return (
      <div className="container">
        <div className="courseShowcase">
          <ScrollCourses courses={this.props.courses.ownCourses} name="MY COURSES"></ScrollCourses>
          <ScrollCourses courses={this.props.courses.ownCourses} name="🔴 Live Streams"></ScrollCourses>
          <ScrollCourses courses={this.props.courses.ownCourses} name="IG5 Courses"></ScrollCourses>
          <ScrollCourses courses={this.props.courses.ownCourses} name="IG4 Courses"></ScrollCourses>
          <ScrollCourses courses={this.props.courses.ownCourses} name="IG3 Courses"></ScrollCourses>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { courses: state }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchOwnCourses }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);