// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import { Player } from '../components/Player/Player';

// Store
import { fetchOwnCourses } from '../store/actions/index';


class PlayerLayout extends Component {

  componentWillMount = () => {
    this.props.fetchOwnCourses();
  };

  render() {
    return (
          <Player courses={this.props.courses.ownCourses} title= {"Web Applications and Interoperability"}/>
    );
  }
}

const mapStateToProps = (state) => {
  return { courses: state }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchOwnCourses }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerLayout);