import React, { Component } from 'react';
import Informations from '../components/CourseEditor/Informations';
import Videos from '../components/CourseEditor/Videos';
import Students from '../components/CourseEditor/Students';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewCourse, updateCourseName, updateCourseDescription, updateCoursePicture } from '../store/actions';
import { fetchStudents, addStudents, clearStudents, removeStudents, removeStudent } from '../store/actions/students.action';
import { uploadVideo, updateNameVideo, removeVideo } from '../store/actions/video.action';

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
    }
  }

  render() {
    let data = [
      {
        title: 'Informations',
        component: <Informations savePicture={this.props.updateCoursePicture} picture={this.props.newCourse.picture} saveName={this.props.updateCourseName} name={this.props.newCourse.name} saveDescription={this.props.updateCourseDescription} description={this.props.newCourse.description} />
      },
      {
        title: 'Videos',
        component: <Videos videos={this.props.newCourse.videos} uploadVideo={this.props.uploadVideo} updateNameVideo={this.props.updateNameVideo} removeVideo={this.props.removeVideo} updateVideoToUpload={this.props.updateVideoToUpload}/>
      },
      {
        title: 'Students',
        component: <Students allStudents={this.props.students} newCourseStudents={this.props.newCourse.students} dispatchAddStudents={this.props.addStudents} dispatchRemoveStudents={this.props.removeStudents} dispatchRemoveStudent={this.props.removeStudent} />
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
                <button onClick={() => this.props.saveNewCourse({
                  name: this.props.newCourse.name,
                  picture: this.props.newCourse.picture.url,
                  description: this.props.newCourse.description,
                  videos: this.props.newCourse.videos.selectedVideos,
                  students: this.props.newCourse.students.selectedStudents
                })} className="saveBtn" >
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
})


const mapDispatchToProps = dispatch => {
  return {
    // dispatching multiple actions
    saveNewCourse: course => dispatch(addNewCourse(course)),
    // Students
    fetchStudents: () => dispatch(fetchStudents()),
    addStudents: (students, fromClass) => dispatch(addStudents(students, fromClass)),
    removeStudents: (students, fromClass) => dispatch(removeStudents(students, fromClass)),
    removeStudent: (student, fromClass) => dispatch(removeStudent(student, fromClass)),
    clearStudents: () => dispatch(clearStudents()),
    // Informations
    updateCourseName: (newName) => dispatch(updateCourseName(newName)),
    updateCourseDescription: (newDescription) => dispatch(updateCourseDescription(newDescription)),
    updateCoursePicture: (newPicture) => dispatch(updateCoursePicture(newPicture)),
    // Videos
    uploadVideo: (video) => dispatch(uploadVideo(video)),
    updateNameVideo: (id, newName) => dispatch(updateNameVideo(id, newName)),
    removeVideo: (id) => dispatch(removeVideo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditor);
