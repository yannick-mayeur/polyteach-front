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

          <ScrollCourses courses={this.props.courses} name="MY COURSES"></ScrollCourses>
          <ScrollCourses courses={this.props.courses} name="🔴 Live Streams"></ScrollCourses>
          <ScrollCourses courses={this.props.courses} name="IG5 Courses"></ScrollCourses>
          <ScrollCourses courses={this.props.courses} name="IG4 Courses"></ScrollCourses>
          <ScrollCourses courses={this.props.courses} name="IG3 Courses"></ScrollCourses>
        
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { courses: state.ownCourses }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchOwnCourses }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);