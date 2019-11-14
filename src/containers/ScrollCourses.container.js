import React from 'react';
// Components
import CourseGenre from '../components/Course/CourseGenre';
import {Spin} from '../components/UI/Spinner';

export function ScrollCourses(props) {
    console.log(props)
    // Create Course Components from data course
    const courseRow = 
    props.courses.fetching? 
    <div>
        <Spin/>
    </div>
    :
    props.courses.data.map((course) => {
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
