import React from 'react'
import CloseIcon from '../../static/images/close.svg';

export function VideoCard() {
    return(
        <div className="card shadow2">
        <div className="row">
            <div className="col-md-3">
                <img className="cardimg" src="http://www.bagherra.eu/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png" />
            </div>
            <div className="col-md-8">
            <input className="card-head" type="text" name="name" defaultValue="Video Title" />
            <h4 className="card-duration mt-3">MM:SS</h4>
            </div>
            <div className="col-md-1">
            <button className="modal__close" onClick={()=>{alert("remove this video")}}><CloseIcon className="close-btn" /></button>
            </div>
        </div>
    </div>


    )


}