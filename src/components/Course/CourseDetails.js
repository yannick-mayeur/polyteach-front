import React from 'react';

import StarIcon from '../../static/images/star.svg';
import CloseIcon from '../../static/images/close.svg';
import PlayIcon from '../../static/images/play-button.svg';
import StarRatings from 'react-star-ratings';

export default function CourseDetails(props) {
  return (
    <>
      <div className="modal__container">
        <span><button className="modal__close" onClick={props.modalClosed}><CloseIcon className="modal__btn--close" /></button></span>
        <h1 className="modal__title">
          {props.course.name}
        </h1>
        <p className="modal__info">
          <span className="modal__rating">
            {/* Rating: {props.course.vote_average * 10}%{" "} */}
            Rating: XX%  
          </span>
          </p>

          <p className="modal__info">
          <span>
            {/*Released: {props.course.release_date}  by: Teacher Name Link*/}
            Released JJ-MM-AAA by: Teacher Profile Link
          </span>
          </p>

       

        <StarRatings
          rating= {(!props.course.vote_average) ? 0 :  props.course.vote_average / 2}
          changeRating= {(newRating, name) => {alert("rating changed:" + newRating)}}
          starRatedColor='rgb(47,72,223)'
          starHoverColor= 'rgb(50,75,240)'
          starDimension = '25px'
          starSpacing = '5px'
          numberOfStars={5}
          name='rating'
        />

        <p className="modal__overview">{props.course.description}</p>
        <button className="modal__btn modal__btn--purple" onClick={()=>{alert("Route vers player")}}>
          <PlayIcon className="modal__btn--icon" />
          Play
        </button>
        <button className="modal__btn" onClick={()=>{alert("Ajouter aux bookmarks")}}>
          <StarIcon className="modal__btn--icon" />
          Bookmark
        </button>
      </div>
    </>
  );
}