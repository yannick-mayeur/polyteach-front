import React from 'react';

import StarIcon from '../../static/images/star.svg';
import CloseIcon from '../../static/images/close.svg';
import PlayIcon from '../../static/images/play-button.svg';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

// helpers
import { formatDate } from '../utils/date.helper';

export default function CourseDetails(props) {
  return (
    <>
      <div className="modal__container">
        <span><button className="modal__close" onClick={props.modalClosed}><CloseIcon className="modal__button--close" /></button></span>
        <h1 className="modal__title">
          {props.course.name}
        </h1>
        <p className="modal__info">
          <span className="modal__rating">
            Rating: {(props.course.averageRating) ? props.course.averageRating * 20 + "%" : "None"}  
          </span>
        </p>

        <p className="modal__info">
          <span>
            {/*Released: {props.course.release_date}  by: Teacher Name Link*/}
            Released {formatDate(props.course.creationdate)} : {props.course.teacher.firstname + " " + props.course.teacher.lastname}
          </span>
        </p>
        {props.user !== null && props.user.role === 0 ? 
        <StarRatings
          rating={(!props.course.rating) ? 0 : props.course.rating}
          changeRating={(newRating) => { props.rateCourse(props.course, newRating) }}
          starRatedColor='rgb(47,72,223)'
          starHoverColor='rgb(50,75,240)'
          starDimension='25px'
          starSpacing='5px'
          numberOfStars={5}
          name='rating'
        /> : ""}
        
        <p className="modal__overview">{props.course.description}</p>
        <Link to={"/player/" + props.course.id} style={{ textDecoration: 'none' }}>
          <button className="modal__button modal__button--purple">
            <PlayIcon className="header__container-btnLogout-add" />
            Play
          </button>
        </Link>

        {props.user !== null && props.user.role === 0 ? 
        <button className="modal__button" onClick={() => { props.toogleBookmarkCourse(props.course) }}>
          <StarIcon className={props.course.bookmarked ? "header__container-btnLogout-pressed" : "header__container-btnLogout-add"} />
          {props.course.bookmarked ? "Bookmarked" : "Bookmark" }
        </button> : ""
        }

       {props.user !== null && props.user.id === props.course.idteacher? 
              <div className="row">
               <button className="modal__button modal__button--delete" onClick={() => props.removeCourse(props.course.id)}>
                 Delete
               </button>
              </div>
              : null}

      </div>
    </>
  );
}
