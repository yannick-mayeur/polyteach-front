import React from 'react';
// Components
import CourseGenre from '../components/Course/CourseGenre';

export function ScrollCourses(props) {
    // Create Course Components from data course
    const courseRow = 
    props.courses.fetching?
    <div className="loader-1 mb-2"><span></span></div>
    :
    props.courses.map((course) => {
        const courseComponent =
            <CourseGenre key={course.id} posterUrl={course.picture} course={course}/>
        return courseComponent;
    });

    return (
        <>
            <h1 className="courseShowcase__heading">{props.name}</h1>
            <div className="courseShowcase__container">
                {courseRow}
            </div>
        </>
    )

}
