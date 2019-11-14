// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Store
import { createLive } from '../store/actions/index';

// OpenVidu
import { OpenVidu } from 'openvidu-browser';

class Live extends Component {


    constructor(props) {
        super(props);
        this.state = {nameSession: '', descrSession: ''};

    }
     
    handleChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    submit =()=>{
        this.connectLive();
    }

    connectLive = ()=>{
        //We create an instance of OpenVidu
        const OV = new OpenVidu();

        //We retrieve the post request's token
    let token = createLive(this.state.nameSession,this.state.descrSession);
    //     console.log("token res  ***" + token);
       let session = OV.initSession();
       console.log(token)

    //     session.connect(token).then(()=>{

    //         // Add our live video to the DOM
    //         let publisher = OV.initPublisher('video-container',{

    //             audioSource: undefined, // The source of audio. If undefined default microphone
    //             videoSource: undefined, // The source of video. If undefined default webcam
    //             publishAudio: true,  	// Whether you want to start publishing with your audio unmuted or not
    //             publishVideo: true,  	// Whether you want to start publishing with your video enabled or not
    //             resolution: '640x480',  // The resolution of your video
    //             frameRate: 30,			// The frame rate of your video
    //             insertMode: 'APPEND',	// How the video is inserted in the target element 'video-container'
    //             mirror: false       	// Whether to mirror your local video or not
    //     })
    //     //Publish our stream 
    //     session.publish(publisher);

    //     })
    }
    render() {
        return (
            <div className="content">
                <div className="courseShowcase ml-5">
                <label>
                    Name
                    <input name="nameSession" type="text" value={this.state.nameSession} onChange={this.handleChange}/>                </label>
                <label>
                    Description
                    <input name="descrSession" type="text" value={this.state.descrSesssion} onChange={this.handleChange}/>
                </label>
                    <button onClick={this.submit}>  
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { live: state.live }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createLive }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Live);