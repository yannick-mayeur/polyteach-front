import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import DropdownLogo from '../../static/images/dropdown.svg';


export function VideoSelector(props) {

  const minimize = () => {
    var x = document.getElementById("videos");
    var b = document.getElementById("minimizebtn")
    if (x.style.display === "none") {
      x.style.display = "flex";
      b.style.webkitTransform = 'rotate('+0+'deg)'; 
      b.style.mozTransform    = 'rotate('+0+'deg)'; 
      b.style.msTransform     = 'rotate('+0+'deg)'; 
      b.style.oTransform      = 'rotate('+0+'deg)'; 
      b.style.transform       = 'rotate('+0+'deg)'; 
    } else {
      x.style.display = "none";
      b.style.webkitTransform = 'rotate('+180+'deg)'; 
      b.style.mozTransform    = 'rotate('+180+'deg)'; 
      b.style.msTransform     = 'rotate('+180+'deg)'; 
      b.style.oTransform      = 'rotate('+180+'deg)'; 
      b.style.transform       = 'rotate('+180+'deg)'; 
    }
  };

  const courseRow = props.course.videos ?
  props.course.videos.map((course) => {
      const courseComponent =
          <VideoThumbnail
              selectVideo={props.selectVideo}
              key={course.id}
              course={course} />
              return courseComponent;
    }) : null;

    return (
      <>
        <div className="content">
          <div className="courseShowcase  ml-5">
            <div className="courseShowcase__head mt-5">
              <DropdownLogo onClick={minimize} className="courseShowcase__logoreduce" id="minimizebtn"/>
              <h1 className="courseShowcase__coursetitle">{props.course.name}</h1>
              <h1>| videos</h1>
            </div>
            <div className="courseShowcase__container" id="videos">
                {courseRow}
            </div>
          </div>
        </div>

      </>
    )
}
