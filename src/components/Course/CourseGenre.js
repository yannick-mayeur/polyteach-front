import React, { Component } from 'react'

// Components
import Modal from '../UI/Modal';
import CourseDetails from './CourseDetails';

export default class CourseGenre extends Component {
   state = {
      toggleModal: false
   }

   handleToggleModal = () => {
      this.setState({ toggleModal: true });
   }

   closeModal = () => {
      this.setState({ toggleModal: false })
   }

   render() {
      console.log(this.props.course.picture)
      return (
         <>
            <div onClick={() => this.handleToggleModal()}
               className={"courseShowcase__container--course"}>
               <img src={this.props.course.picture} className="courseShowcase__container--course-image" />
               <h3 className="courseShowcase__container--course-title">{this.props.course.name}</h3>
            </div>
            <Modal show={this.state.toggleModal} course={this.props.course} modalClosed={this.closeModal}>
               <CourseDetails course={this.props.course} modalClosed={this.closeModal} />
            </Modal>
         </>
      )
   }
}
