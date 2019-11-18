import React from 'react'
import CloseIcon from '../../static/images/close.svg';

export function VideoCard(props) {
    return(
        <div className="card shadow2">
        <div className="row">
            <div className="col-md-3">
            <video id="videoPlayer" className="plyr__video-embed" width="200" height= "110" playsInline controls>
                <source src={props.videoURL} type="video/ogg"/>
            </video> 
            </div>
            <div className="col-md-8">
            <input onChange={(event) => {props.setName(event.target.value, props.idVideo)}} className="card-head" type="text" name="name" defaultValue={props.titleVideo} />
            <h4 className="card-duration mt-3">{}</h4>
            </div>
            <div className="col-md-1">
            <button className="modal__close"><CloseIcon className="close-btn" onClick={()=>{props.removeVideo(props.idVideo)}}/></button>
            </div>
        </div>
    </div>


    )


}