// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import { ScrollCourses } from './ScrollCourses.container';

// Store
import { fetchAllMyCoursesByClass } from '../store/actions/courses.action';


class MainContent extends Component {
  componentWillMount = () => {
    this.props.fetchAllMyCoursesByClass();
  };

  createScrollCourses = (classCourses) => {
    return classCourses.map(classCourse => {
      return <ScrollCourses courses={classCourse.courses} name={classCourse.name}></ScrollCourses>
    })
  }

  render() {
    return (
      <div className="content">
        <div className="courseShowcase ml-5">
          {this.createScrollCourses(this.props.coursesByClass)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { coursesByClass: state.courses.myCoursesByClass }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllMyCoursesByClass }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
