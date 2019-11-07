import React, { Component } from 'react';

// Component
import MainContent from './MainContent';

class Layout extends Component {
  render() {
    return (
      <MainContent/>
    )
  }
}

export default Layout; 






// A remettre depuis le début du component (Refaire les imports.)
//state = {
  //   /** Toggles the course list when the user starts typing. */
  //   toggleCourseList: true,

  //   /** An array that will hold all of our course Components. */
  //   CourseList: [],

  //   /** Toggles the modal when a course is clicked. */
  //   toggleModal: false,

  //   /** Holds the course information for a single course. */
  //   courseOverview: {},
  // }

  // /** Make API call as soon as the user starts typing.  */
  // makeAipCall = (searchItem) => {
  //   axios.get(url)
  //     .then(res => {
  //       const results = res.data.results;
  //       let courseImageUrl;
  //       /** Will hold all our courses Components */
  //       let courseRows = [];

  //       /** Loop through all the courses */
  //       results.forEach((course) => {
  //         /** Manually build our image url and set it on the Course component. */
  //         if (course.poster_path !== null && course.media_type !== "person") {
  //           courseImageUrl = course.picture;

  //           /** Set the course object to our Course component */
  //           const courseComponent = <Course
  //             courseDetails={() => this.selectCourseHandler(course)}
  //             key={course.id}
  //             courseImage={courseImageUrl}
  //             course={course} />

  //           /** Push our course component to our courseRows array */
  //           courseRows.push(courseComponent);
  //         }
  //       })
  //       /** Set our CourseList array to the courseRows array */
  //       this.setState({ CourseList: courseRows });
  //     }).catch(error => {
  //       console.log(error);
  //     });
  // }

  // /** Get the user input  */
  // onSearchHandler = (event) => {
  //   /** Display the course list. */
  //   this.setState({
  //     toggleCourseList: false
  //   });

  //   const userInput = event.target.value;
  //   /** Pass in the user input to make the API call. */
  //   this.makeAipCall(userInput);

  //   /** If the input is empty don't display the course list. */
  //   if (userInput === "") {
  //     this.setState({
  //       toggleCourseList: true
  //     });
  //   }
  // }

  // /* Get the appropriate details for a specific course that was clicked */
  // selectCourseHandler = (course) => {
  //   this.setState({ toggleModal: true });
    
  //   let url;
  //   /** Make the appropriate API call to get the details for a single course or tv show. */
  //   if (course.media_type === "course") {
  //     const courseId = course.id;
  //     url = `https://api.thecoursedb.org/3/course/${courseId}?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0`;

  //   } else if (course.media_type === "tv") {
  //     const tvId = course.id
  //     url = `https://api.thecoursedb.org/3/tv/${tvId}?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0`;
  //   }

  //   axios.get(url)
  //     .then(res => {
  //       const courseData = res.data;

  //       this.setState({ courseOverview: courseData });
  //     }).catch(error => {
  //       console.log(error);
  //     });
  // closeModal = () => {
  //   this.setState({ toggleModal: false });
  // }
  // }

  // LE RENDER 

  // return (
  //   <div>
  //     {/*<Navbar showCourses={this.onSearchHandler} />*/}
  //     { 
  //       this.state.toggleCourseList ? <MainContent /> : 
  //       <div className="search-container">
  //         {this.state.CourseList}
  //       </div>
  //     }

  //     <Modal show={this.state.toggleModal}
  //       modalClosed={this.closeModal}
  //       course={this.state.courseOverview}>
  //       <CourseDetails course={this.state.courseOverview}/>
  //     </Modal>
  //   </div>

  // );