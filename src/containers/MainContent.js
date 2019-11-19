// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import { ScrollCourses } from './ScrollCourses.container';

// Store
import { fetchAllMyCourses } from '../store/actions/courses.action';


class MainContent extends Component {
  componentWillMount = () => {
    this.props.fetchAllMyCourses();
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
        {this.props.courses && this.props.courses.length > 0 ?
          //this.createScrollCourses(this.props.courses)
          <ScrollCourses courses={this.props.courses.filter(course => course.name.toLowerCase().includes(this.props.search.toLowerCase()))} name="My Courses"></ScrollCourses>
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
  return bindActionCreators({ fetchAllMyCourses }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
