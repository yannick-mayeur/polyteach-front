import React, { Component } from 'react';
import { connect } from 'react-redux';
import {VideoSelector} from '../components/Player/VideoSelector'; 
import {VideoPlayer} from '../components/Player/VideoPlayer';

// Store
import { selectVideo, rateVideo } from '../store/actions/video.action';
import { fetchCourseWithVideo } from '../store/actions/courses.action';

class PlayerContainer extends Component {

    constructor(props) {
        super(props);
    };
  
    componentWillMount = () => {
        this.props.fetchCourse(this.props.match.params.courseID)
    };

    render() {
        return (
            <div>
                <div>
                    {
                    this.props.course && this.props.course.videos[0] && this.props.course.selectedSubtitles? 
                    <div>
                        <VideoSelector course={this.props.course} selectVideo = {this.props.selectVideo}/>

                        <VideoPlayer rateVideo={this.props.rateVideo} video={this.props.course.videos.find(video => video.id == this.props.course.selectedCourse)} subtitles={this.props.course.selectedSubtitles} />
                    </div>
                    :
                    <div className="content">
                    <div className="courseShowcase ml-5">
                    <h1 style={{ textAlign: "center" }} className="mt-5">This course is empty !</h1>
                    </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => ({
    course: store.video,
    fetching: store.video.fetching,
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCourse: (courseID) => dispatch(fetchCourseWithVideo(courseID)),
        selectVideo: (video) => dispatch(selectVideo(video)),
        rateVideo: (videoID, rating) => dispatch(rateVideo(videoID, rating)),
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlayerContainer);

