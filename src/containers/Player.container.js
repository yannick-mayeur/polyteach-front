import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Player} from '../components/Player/Player'; 

// Store
import { fetchCourse } from '../store/actions/courses.action';

class PlayerContainer extends Component {
    state = {
    }


    componentWillMount = () => {
        this.props.fetchCourse(this.props.match.params.courseID);
        console.log(this.props.course);
    };

    render() {
        return (
            <Player course={this.props.course}></Player>
        );
    }
}

const mapStoreToProps = (store) => ({
    course: store.video,
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCourse: (courseID) => dispatch(fetchCourse(courseID)),
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlayerContainer);

