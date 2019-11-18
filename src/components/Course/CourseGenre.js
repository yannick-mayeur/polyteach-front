import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import Modal from '../UI/Modal';
import CourseDetails from './CourseDetails';

// Actions
import { fetchAllInfosOnCourse } from '../../store/actions/courses.action';

class CourseGenre extends Component {
   state = {
      toggleModal: false
   }

   componentWillMount = () => {
      this.props.fetchAllInfosOnCourse(this.props.course);
   }

   handleToggleModal = () => {
      this.setState({ toggleModal: true });
   }

   closeModal = () => {
      this.setState({ toggleModal: false })
   }

   render() {
      return (
         <>
            <div onClick={() => this.handleToggleModal()}
               className={"courseShowcase__container--course"}>
               <img src={this.props.posterUrl} className="courseShowcase__container--course-image" />
               <h3 className="courseShowcase__container--course-title">{this.props.course.name}</h3>
            </div>
            <Modal show={this.state.toggleModal} course={this.props.course} modalClosed={this.closeModal}>
               <CourseDetails course={this.props.course} modalClosed={this.closeModal} />
            </Modal>
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return {  }
 }
 
 const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ fetchAllInfosOnCourse }, dispatch)
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(CourseGenre);