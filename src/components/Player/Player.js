import React from 'react';
import VideoThumbnail from './VideoThumbnail';
// Store
import DropdownLogo from '../../static/images/dropdown.svg';

export function Player(props) {

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

  // Create Course Components from data course
  const courseRow = props.courses.data.map((course) => {
      const courseComponent =
          <VideoThumbnail
              key={course.id}
              posterUrl={course.picture}
              course={course} />
      return courseComponent;
    });

  
    return (
      <>
        <div className="content">
          <div className="courseShowcase  ml-5">
            <div className="courseShowcase__head">
              <DropdownLogo onClick={minimize} className="courseShowcase__logoreduce" id="minimizebtn"/>
              <h1 className="courseShowcase__coursetitle">{props.title}</h1>
              <h1>| videos</h1>
            </div>
          

          <div className="courseShowcase__container" id="videos">
          {courseRow}
          </div>
          </div>
          </div>

        <div className="courseShowcase__videoplayer">
          <video className="plyr__video-embed" width="864" height= "482" playsInline controls>
            <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg"/>
          </video>  
        </div>
      </>
    )
}
