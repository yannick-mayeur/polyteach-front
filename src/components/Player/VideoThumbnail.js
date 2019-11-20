import React from 'react'

export default function VideoThumbnail(props) {

      return (
         <>
            <div
               className={"courseShowcase__container--course"} 
               onClick={() => props.selectVideo(props.course)}>
                <video id="videoPlayer" className="plyr__video-embed" width="200" height= "110" playsInline>
                <source src={props.course.videoUrl} type="video/ogg"/>
                </video> 
               <h3 className="courseShowcase__container--course-title">{props.course.title}</h3>
            </div>
         </>
      )
}
