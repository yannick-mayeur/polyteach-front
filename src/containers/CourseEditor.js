import React, { Component } from 'react';
import { Informations } from '../components/CourseEditor/Informations';
import { Videos } from '../components/CourseEditor/Videos';
import { Students } from '../components/CourseEditor/Students';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewCourse } from '../store/actions';
  
  class CourseEditor extends Component {

    constructor(props) {
      super(props);
      this.state = {
        index: 0,
        course: {
          name: "",
          picture: "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-7.jpg",
          description: ""
        }
      }
    }

    saveName = (name) => {
      this.setState({ 
        course:{
          description: this.state.course.description,
          name: name,
          picture: this.state.course.picture
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
        course:{
          description: description,
          name: this.state.course.name,
          picture: this.state.course.picture
        }
       })
    }

    savePicture = (picture) => {
      this.setState({ 
        course:{
          description: this.state.course.description,
          name: this.state.course.name,
          picture: picture
        }
       })
    }

    data = [
        {
          title: 'Informations',
          component: <Informations saveName={this.saveName} name={this.getName} saveDescription={this.saveDescription} description={this.getDescription}/>
        },
        {
          title: 'Videos',
          component: <Videos/>
        },
        {
           title: 'Students',
           component: <Students/>
        }
      ]
    
    render() {
      return (
        <div className="content">
        <div className="courseShowcase">
            <div className="main">
                <div className="tab">
                <ul className="tab-list">
                    {
                    this.data.map( (tab, i) =>
                        <li key={i}
                        data-active={ this.state.index === i }
                        onClick={() => this.setState({ index: i })} className="mx-auto pannel">
                          <h1 className="tabtitle">{tab.title}</h1>  
                        </li>
                    )
                    }
                </ul>
                <div className="tab-content">
                    <div data-content={this.state.index + 1}>
                    {this.data[this.state.index].component}
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


const mapStateToProps = (state) => ({
  newCourse: state.newCourse
})

const mapDispatchToProps = (dispatch) => ({
  saveNewCourse: course => dispatch(addNewCourse(course))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditor);
  