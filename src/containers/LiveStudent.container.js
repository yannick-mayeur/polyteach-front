import React from 'react';
import {withRouter} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";

export class liveStudent extends React.Component{
    render() {
        const courseId = this.props.match.params.courseId;
        return(
            <div className="container" style={{paddingTop:50}}>
                <div className="row">
                    <div className="video-container col-md-9">
                        <video className="col-md-12" controls>
                        </video>
                        <div style={{textAlign:"center"}}>
                            <button>Quitter</button>
                        </div>
                    </div>
                    <div className="col-md-3" style={{backgroundColor:"white",textAlign:"center"}}>
                        <h1 style={{backgroundColor:"red"}}>Nom du cours : {courseId}</h1>
                        <div>
                            <h1>Description</h1>
                        </div>
                        <div>
                            <h1>Nom du prof</h1>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default withRouter(liveStudent);