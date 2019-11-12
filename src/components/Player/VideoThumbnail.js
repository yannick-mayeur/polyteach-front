import React from 'react'

export default function VideoThumbnail(props) {

      return (
         <>
            <div
               className={"courseShowcase__container--course"}>
               <img src={props.course.pictureCourse} className="courseShowcase__container--course-image" />
               <h3 className="courseShowcase__container--course-title">{props.course.nameCourse}</h3>
            </div>
         </>
      )
}
