import React from 'react'
import Backdrop from './Backdrop'

export default function Modal(props) {
   const backgroundStyle = {
      backgroundSize: "cover",
      backgroundImage: `url(${props.course.pictureCourse})`,
   }

   return (
      <>
         <Backdrop show={props.show} toggleBackdrop={props.modalClosed} />
         <div
            style={backgroundStyle}
            className={(props.show ? "modal show" : "modal hide")}>
            {props.children}
         </div>
      </>
   )
}
