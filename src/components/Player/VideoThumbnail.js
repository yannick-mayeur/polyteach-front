import React from 'react'

export default function VideoThumbnail(props) {

      return (
         <>
            <div
               className={"courseShowcase__container--course"}>
               <img src={props.course.picture} className="courseShowcase__container--course-image" />
               <h3 className="courseShowcase__container--course-title">{props.course.name}</h3>
            </div>
         </>
      )
}
