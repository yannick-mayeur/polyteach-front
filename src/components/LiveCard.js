import React from 'react'

export function LiveCard(props) {
    return(
        <div className="smallcard shadow2" onClick={() => {window.location.replace(props.liveURL)}}>
        <div className="col-md-12 buttonsrow">
        </div>
        <div className="row">
            <div className="col-md-12">
                <img className="userpicture" src="../static/images/avatar-placeholder.gif" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <h1 className="smallcard-head">{props.live.nameteacher}  </h1>
            <p className="smallcard-head">{props.live.namesession}</p>
            <h4 className="smallcard-class mt-2">{props.live.description}</h4>
            </div>
        </div>
    </div>
    )
}
