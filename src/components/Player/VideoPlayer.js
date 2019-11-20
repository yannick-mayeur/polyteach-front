import React from 'react';
import StarRatings from 'react-star-ratings';
import DropdownLogo from '../../static/images/dropdown.svg';

export function VideoPlayer(props) {

    console.log("player props",props.video)
    const changeVideoSec = (evt) => {
        const video = document.getElementById('video');
        video.currentTime = evt.target.id
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

    return (
        <div>
            <video 
                id="video" style={{
                display: 'flex',
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: '50px',
                marginBottom: '50px'
            }} key={props.video.videoUrl} preload="auto" crossOrigin="anonymous" controls width={"75%"}>
                <source src={props.video.videoUrl} type="video/mp4"/>
                <track default kind="subtitles"
                       srcLang="en"
                       src={props.video.vttUrl}/>
            </video>
            

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
              <h1 className="titlevideo mb-2">{props.video.title}</h1>
        </div>

        <div className="vttTextField col-md-11 mx-auto" id="vttText">
        {
         props.subtitles.subtitles.map((value, index) => <p onClick={changeVideoSec}
                                                            id={props.subtitles.timings[index]}
                                                            key={index}>{value}</p>
                                                            )
        }
        </div>
        </div>
        </div>
    );
}