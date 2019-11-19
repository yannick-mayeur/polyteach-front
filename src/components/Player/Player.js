import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import StarRatings from 'react-star-ratings';
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

  const minimizeText = () => {
    var x = document.getElementById("vttText");
    var b = document.getElementById("minimizeTextbtn")
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
  const courseRow = props.course.videos.map((course) => {
      const courseComponent =
          <VideoThumbnail
              course={course} />
      return courseComponent;
    });

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

        <div className="courseShowcase__videoplayer">
          <video className="plyr__video-embed" width="864" height= "482" playsInline controls>
            <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg"/>
          </video>  
        </div>

        <div className="courseShowcase_videoplayer ">
          <div className="row justify-content-md-center">
          <StarRatings
                rating={3}
                changeRating={(newRating, name) => { alert("rating changed:" + newRating) }}
                starRatedColor='rgb(47,72,223)'
                starHoverColor='rgb(50,75,240)'
                starDimension='25px'
                starSpacing='5px'
                numberOfStars={5}
                name='rating'
          />
          </div>
        <div className="row justify-content-md-center">
              <DropdownLogo onClick={minimizeText} className="courseShowcase__logoreduce" id="minimizeTextbtn" />
              <h1 className="titlevideo mb-2">Video title</h1>
              {/*(!props.course.video[idVideo].vote_average) ? 0 :  props.course.video[idVideo].vote_average / 2*/}
        </div>

        <div className="vttTextField col-md-11 mx-auto" id="vttText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit lacus eleifend, blandit sapien ac, fermentum sem. Praesent pretium fermentum ornare. Vivamus a ornare massa, vitae bibendum diam. Proin molestie justo at sodales tincidunt. Proin finibus placerat accumsan. Duis ut nisl ac enim condimentum faucibus. Sed rutrum elementum velit. Sed dignissim tincidunt odio, nec mollis nulla convallis eu. Vivamus ac consectetur ipsum. Donec pulvinar ipsum eu egestas euismod. Pellentesque dignissim nisl sem, nec rutrum ligula malesuada ac. Aenean auctor consectetur sapien, eget pellentesque tellus fermentum vel.
        Pellentesque nec sem congue, efficitur sem at, hendrerit libero. Etiam lacus lectus, placerat at quam ac, pharetra commodo neque. Fusce mauris mi, lacinia dignissim elementum sed, egestas vitae elit. Vestibulum massa ante, pellentesque a cursus a, condimentum sed nunc. Aliquam sagittis vel lorem sed aliquet. Suspendisse volutpat pretium justo at condimentum. Nulla aliquet quam eros, ut pharetra quam varius ut. Etiam eget scelerisque neque, pellentesque dapibus purus. Nullam sollicitudin dui vel erat fringilla, id mattis enim ullamcorper. Nulla facilisi. Phasellus dui metus, faucibus ac malesuada vel, dignissim a odio. Curabitur magna risus, congue id nisl porttitor, porta pretium sapien.
        Cras ante erat, commodo a leo a, hendrerit dignissim ipsum. Praesent urna quam, pretium vel purus et, elementum sagittis mauris. Integer elementum ut tellus ut tincidunt. Praesent eleifend ligula sed arcu blandit, consectetur laoreet libero tristique. Pellentesque sed urna in sapien tempor ullamcorper non sed erat. Fusce hendrerit libero ac lorem elementum dignissim. Vivamus metus libero, pellentesque non nibh vel, luctus aliquam purus. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer et purus a justo dignissim auctor quis id nunc. Ut gravida leo vitae imperdiet sodales. Maecenas et auctor mauris, sit amet luctus ipsum.
        Praesent fermentum lacinia tellus, nec laoreet mi tincidunt non. Nullam a interdum arcu. Sed pulvinar sit amet justo quis malesuada. In dictum urna ligula, ac gravida erat convallis ut. Nam pellentesque lacus mauris, non ultrices arcu ornare et. Maecenas quam lorem, pharetra et magna vitae, imperdiet porttitor eros. Aenean ac mi vestibulum lorem posuere scelerisque. Nullam eu mattis leo. Aenean et augue laoreet, aliquet arcu ut, semper nibh. Suspendisse sit amet mattis nisl, et facilisis lectus. Donec scelerisque auctor egestas. Praesent vulputate mattis nisi, eu fringilla erat dignissim varius. Vestibulum ligula tortor, varius ac enim vitae, lacinia rutrum nisl. Pellentesque pharetra, dolor et posuere lacinia, mauris quam tristique arcu, nec finibus eros nisi sed purus. Etiam mattis vel erat ac convallis. Nullam molestie nec massa id consequat.
        Ut pharetra lorem sed nulla semper, quis fringilla eros eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras cursus imperdiet eros finibus varius. Vivamus cursus, metus eget dapibus ultrices, quam arcu fringilla mauris, eget lacinia ipsum libero sed tortor. Etiam finibus velit ut dolor posuere tincidunt. Ut eu dignissim purus, quis posuere nibh. Integer non accumsan nibh.
      </div>
        </div>
      </>
    )
}
