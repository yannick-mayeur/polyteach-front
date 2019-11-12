import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import { ScrollCourses } from './ScrollCourses.container';

// Store
import { fetchOwnCourses } from '../store/actions/index';
import DropdownLogo from '../static/images/dropdown.svg';


class Bookmarks extends Component {



  minimize() {
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
  }


  render() {
    return (
      <>
      <div className="container">
        <div className="courseShowcase">
          <div className="courseShowcase__head">
            <DropdownLogo onClick={this.minimize} className="courseShowcase__logoreduce" id="minimizebtn"/>
            <h1 className="courseShowcase__coursetitle">Web Applications and Interoperability</h1>
            <h1>| videos</h1>
          </div>
        </div>
      </div>

         <div className="movieShowcase__container" id="videos">
          
        </div>

      <div className="courseShowcase__videoplayer">
        <video className="plyr__video-embed" width="864" height= "482" playsinline controls>
          <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg"/>
        </video>  
      </div>
      </>
    )
  }
}


export default Bookmarks;
