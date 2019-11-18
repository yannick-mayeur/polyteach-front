import React, { Component } from 'react';
import Informations from '../components/CourseEditor/Informations';
import Videos from '../components/CourseEditor/Videos';
import Students from '../components/CourseEditor/Students';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewCourse } from '../store/actions';
import { fetchStudents, addStudents, clearStudents, removeStudents, removeStudent } from '../store/actions/students.action';
import { uploadVideo } from '../store/actions/video.action';

class CourseEditor extends Component {

  componentWillMount = () => {
    this.props.clearStudents();
    this.props.fetchStudents();
  };

  //TODO - Fetch original course from id if exists
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      course: {
        name: "",
        picture: "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-7.jpg",
        description: "",
        videos: [],
        students: []
      }
    }
  }

  saveName = (name) => {
    this.setState({
      course: {
        description: this.state.course.description,
        name: name,
        picture: this.state.course.picture,
        videos: this.state.course.videos,
        students: this.state.students
      }
    })
  }

  getName = () => {
    return this.state.course.name
  }

  getDescription = () => {
    return this.state.course.description
  }

  saveDescription = (description) => {
    this.setState({
      course: {
        description: description,
        name: this.state.course.name,
        picture: this.state.course.picture,
        videos: this.state.course.videos,
        students: this.state.students
      }
    })
  }

  savePicture = (picture) => {
    this.setState({
      course: {
        description: this.state.course.description,
        name: this.state.course.name,
        picture: picture,
        videos: this.state.course.videos,
        students: this.state.students
      }
    })
  }

  getPicture = () => {
    return this.state.course.picture
  }

  saveStudents = (students) => {
    this.setState({
      course: {
        description: this.state.course.description,
        name: this.state.course.name,
        picture: this.state.picture,
        videos: this.state.course.videos,
        students: students
      }
    })
  }

  // Function for VIDEOS

  uploadVideo = (video) => {
    this.props.uploadVideo(video).then(data => {
      this.state.course.videos.push(data.value);
      this.setState(this.state);
    })
  }

  saveVideos = (videos) => {
    this.setState({
      course: {
        name: this.state.course.name,
        picture: this.state.course.picture,
        description: this.state.course.description,
        videos: videos,
        students: this.state.students
      }
    })
  }

  getVideos = () => {
    return this.state.course.videos
  }

  // END Function for VIDEOS

  render() {
    let data = [
      {
        title: 'Informations',
        component: <Informations savePicture={this.savePicture} getPicture={this.getPicture} saveName={this.saveName} name={this.getName} saveDescription={this.saveDescription} description={this.getDescription} />
      },
      {
        title: 'Videos',
        component: <Videos saveVideos={this.saveVideos} getVideos={this.getVideos} uploadVideo={this.uploadVideo} displaySpinner={this.props.displaySpinner}/>
      },
      {
        title: 'Students',
        component: <Students saveStudents = {this.saveStudents} allStudents={this.props.students} newCourseStudents={this.props.newCourse.students} dispatchAddStudents={this.props.addStudents} dispatchRemoveStudents={this.props.removeStudents} dispatchRemoveStudent={this.props.removeStudent} />
      }
    ]
    return (
      <div className="content">
        <div className="courseShowcase">
          <div className="main">
            <div className="tab">
              <ul className="tab-list">
                {
                  data.map((tab, i) =>
                    <li key={i}
                    data-active={this.state.index === i}
                    onClick={() => this.setState({ index: i })} className="mx-auto pannel">
                    <h1 className="tabtitle">{tab.title}</h1>
                  </li>
                  )
                }
              </ul>
              <div className="tab-content">
                <div data-content={this.state.index + 1}>
                  {data[this.state.index].component}
                </div>
              </div>
            </div>

            <div className="row mt-5 menubuttonsrow col-md-6">
              <div className="col-md-6">
                <Link to="/">
                  <button className="cancelBtn" >
                    CANCEL
                  </button>
                </Link>
              </div>
              <div className="col-md-6">
                <button onClick={() => this.props.saveNewCourse(this.state.course)} className="saveBtn" >
                  {this.props.newCourse.fetching ? "SENDING..." : "SAVE"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (store) => ({
  newCourse: store.newCourse,
  students: store.students,
  displaySpinner: store.video.displaySpinner
})


const mapDispatchToProps = dispatch => {
  return {
    // dispatching multiple actions
    saveNewCourse: course => dispatch(addNewCourse(course)),
    fetchStudents: () => dispatch(fetchStudents()),
    addStudents: (students, fromClass) => dispatch(addStudents(students, fromClass)),
    removeStudents: (students, fromClass) => dispatch(removeStudents(students, fromClass)),
    removeStudent: (student, fromClass) => dispatch(removeStudent(student, fromClass)),
    clearStudents: () => dispatch(clearStudents()),
    uploadVideo: (video) => dispatch(uploadVideo(video)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditor);
