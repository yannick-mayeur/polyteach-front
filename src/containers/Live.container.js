// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Store
import { createLive } from '../store/actions';

// OpenVidu
import { OpenVidu } from 'openvidu-browser';

class Live extends Component {

  constructor(props) {
    super(props);
    this.state = {nameSession: '', descrSession: '', tokenSession: undefined};

  }

  handleChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  handlerLeaveSessionEvent= (e)=>{
    this.setState({nameSession: '', descrSession: '', session: undefined})
  }

  submit= ()=>{
    this.connectLive();
  }
  leaveSession= ()=>{
    this.state.session.disconnect();
  }
  connectLive = ()=>{
    //We create an instance of OpenVidu
    const OV = new OpenVidu();

    //We retrieve the post request's token
    console.log(this.props);
    this.props.createNewLive(this.state.nameSession,this.state.descrSession)
      .then((res) => {
        // console.log("token res  ***" + token);
        let session = OV.initSession();
        const ovToken = res.value.data;
        this.setState({
          tokenSession: ovToken,
        });
        session.connect(ovToken).then(()=>{
          // Add our live video to the DOM
         let publisher = OV.initPublisher('video-container',{

            audioSource: undefined, // The source of audio. If undefined default microphone
            videoSource: undefined, // The source of video. If undefined default webcam
            publishAudio: true,  	// Whether you want to start publishing with your audio unmuted or not
            publishVideo: true,  	// Whether you want to start publishing with your video enabled or not
            resolution: '640x480',  // The resolution of your video
            frameRate: 30,			// The frame rate of your video
            insertMode: 'APPEND',	// How the video is inserted in the target element 'video-container'
            mirror: false       	// Whether to mirror your local video or not
          })
          //Publish our stream 
          session.publish(publisher);
          this.setState({
            session: session,
          });
        })
      });
  }
  render() {
    return (
      <div className="content">
        <div className="courseShowcase ml-5">
          <label>
            Name
            <input name="nameSession" type="text" value={this.state.nameSession} onChange={this.handleChange}/>
          </label>
          <label>
            Description
            <input name="descrSession" type="text" value={this.state.descrSession} onChange={this.handleChange}/>
          </label>
          <button onClick={this.submit}>  
            Submit
          </button>

          <button onClick={this.leaveSession}>  
            Leave
          </button>
        <div id="video-container" class="col-md-12">
              </div>
       </div>
    </div>
    );
  }
}


const mapStateToProps = (state) => ({
  live: state.ovToken
});

const mapDispatchToProps = (dispatch) => ({
  createNewLive: (nameCourse, description) => dispatch(createLive(nameCourse, description))
});

export default connect(mapStateToProps, mapDispatchToProps)(Live);
