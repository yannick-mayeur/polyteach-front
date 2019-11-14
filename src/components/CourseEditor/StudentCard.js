import React from 'react'
import CloseIcon from '../../static/images/close.svg';

export function StudentCard() {
    return(
        <div className="smallcard shadow2">
        <div className="col-md-12 buttonsrow">
            <button className="modal__close" onClick={()=>{alert("remove this student")}}><CloseIcon className="close-btn" /></button>
        </div>
        <div className="row">
            <div className="col-md-12">
                <img className="userpicture" src="../../static/images/avatar-placeholder.gif" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <h1 className="smallcard-head">Jean-Michel Info </h1>
            <h4 className="smallcard-class mt-2">IG0</h4>
            </div>
        </div>
    </div>


    )


}