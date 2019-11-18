import React from 'react'
import CloseIcon from '../../static/images/close.svg';

export function StudentCard(props) {
    return(
        <div className="smallcard shadow2">
        <div className="col-md-12 buttonsrow">
            <button className="modal__close" onClick={()=>{props.dispatchRemoveStudent(props.student, props.student.class)}}><CloseIcon className="close-btn" /></button>
        </div>
        <div className="row">
            <div className="col-md-12">
                <img className="userpicture" src="../../static/images/avatar-placeholder.gif" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <h1 className="smallcard-head">{props.student.firstName} {props.student.lastName} </h1>
            <p className="smallcard-head">{props.student.email}</p>
            <h4 className="smallcard-class mt-2">{props.student.class}</h4>
            </div>
        </div>
    </div>
    )
}
