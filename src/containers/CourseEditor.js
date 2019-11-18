import React, { Component } from 'react';
import Informations from '../components/CourseEditor/Informations';
import Videos from '../components/CourseEditor/Videos';
import Students from '../components/CourseEditor/Students';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewCourse, updateCourseName, updateCourseDescription, updateCoursePicture } from '../store/actions';
import { fetchStudents, addStudents, clearStudents, removeStudents } from '../store/actions/students.action';

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
    console.log("received new state: ")
    console.log(this.state)
  }

  getVideos = () => {
    return this.state.course.videos
  }

  render() {
    let data = [
      {
        title: 'Informations',
        component: <Informations savePicture={this.props.updateCoursePicture} picture={this.props.newCourse.picture} saveName={this.props.updateCourseName} name={this.props.newCourse.name} saveDescription={this.props.updateCourseDescription} description={this.props.newCourse.description} />
      },
      {
        title: 'Videos',
        component: <Videos saveVideos={this.saveVideos} getVideos={this.getVideos} />
      },
      {
        title: 'Students',
        component: <Students allStudents={this.props.students} newCourseStudents={this.props.newCourse.students} dispatchAddStudents={this.props.addStudents} dispatchRemoveStudents={this.props.removeStudents}/>
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
  students: store.students
})


const mapDispatchToProps = dispatch => {
  return {
    // dispatching multiple actions
    saveNewCourse: course => dispatch(addNewCourse(course)),
    fetchStudents: () => dispatch(fetchStudents()),
    addStudents: (students, fromClass) => dispatch(addStudents(students, fromClass)),
    removeStudents: (students, fromClass) => dispatch(removeStudents(students, fromClass)),
    clearStudents: () => dispatch(clearStudents()),
    updateCourseName: (newName) => dispatch(updateCourseName(newName)),
    updateCourseDescription: (newDescription) => dispatch(updateCourseDescription(newDescription)),
    updateCoursePicture: (newPicture) => dispatch(updateCoursePicture(newPicture))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditor);
