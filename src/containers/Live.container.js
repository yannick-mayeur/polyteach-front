// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Store
import { createLive, startToRecord, stopRecording } from '../store/actions';
// OpenVidu
import OpvSession from 'openvidu-react';
import { OpenVidu } from 'openvidu-browser';
import { FormControlLabel } from '@material-ui/core';
import { Switch} from '@material-ui/core';
import Video from '../components/LiveRoom/Video';
import ToolbarComponent from '../components/LiveRoom/ToolbarComponent'

class Live extends Component {


  constructor(props) {
    super(props);

    this.state = {
      nameSession: '', 
      descrSession: '',
      tokenSession: undefined,
      session: undefined,
      publisher: undefined,
      checked: false,
      record: '',
      audioActive: false,
      videoActive: false,
      screenShareActive: false,
    };
  }

  
  handleChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value })
  }

  leaveSession = () => {

    this.props.checked ? ( this.props.stopRecording(recordId).then(()=>{
           this.state.session.disconnect();
    }))
    : this.state.session.disconnect(); 

    this.setState({
      nameSession: '', 
      descrSession: '', 
      tokenSession: '',
      session: undefined,
      publisher: undefined,
      checked: false,
      record: ''

    });
  
  }

  submit = () => {
    this.connectLive();
  }

  toggleChecked = (event) => {
    this.setState({ 
      checked: event.target.checked 
    }); 
  }

  isAudioActive=() =>{
      return this.state.audioActive;
        }

  isVideoActive=() =>{
      return this.state.videoActive;
        }
  isScreenShareActive=()=> {
      return this.state.screenShareActive;
        }

  micStatusChanged=() =>{
    this.setState({
      audioActive: !(this.state.audioActive)
    })
    this.state.publisher.publishAudio(this.isAudioActive());
    this.sendSignalChanged("isAudioActive:" + this.isAudioActive());

    }


  camStatusChanged=() => {
  this.setState({
    videoActive: !(this.state.videoActive)
  })
  this.state.publisher.publishVideo(this.isVideoActive());
  this.sendSignalChanged("isVideoActive:" + this.isVideoActive());
    }

  sendSignalChanged=(data)=>{
      this.state.session.signal( data,'userChanged');
  }

  screenShare=()=> {
    const OV= new OpenVidu();
      const videoSource = navigator.userAgent.indexOf('Firefox') !== -1 ? 'window' : 'screen';
  
            const publisher = OV.initPublisher(undefined, {
                videoSource: videoSource,
                publishAudio: this.isAudioActive(),
                publishVideo: this.isVideoActive(),
                mirror: false
            },  function(error)  {
                if (error && error.name === 'SCREEN_EXTENSION_NOT_INSTALLED') {
                    this.setState({ showExtensionDialog: true });
                } else if (error && error.name === 'SCREEN_SHARING_NOT_SUPPORTED') {
                    alert('Your browser does not support screen sharing');
                } else if (error && error.name === 'SCREEN_EXTENSION_DISABLED') {
                    alert('You need to enable screen sharing extension');
                } else if (error && error.name === 'SCREEN_CAPTURE_DENIED') {
                    alert('You need to choose a window or application to share');
                }
            });
            
            publisher.once('accessAllowed', () =>{
                this.state.session.unpublish(this.publisher);
                this.setState({publisher: publisher});
                this.state.session.publish(this.state.publisher).then(() =>{
                  this.setState({screenShareActive: true});
                  this.sendSignalChanged("isScreenShareActive:"+ this.isScreenShareActive());
                });
            });
 }


stopScreenShare=()=> {
  console.log("stpss");
 }


 toggleFullscreen=()=>{
  const document = window.document;
  const fs = document.getElementById('local-video-undefined');
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (fs.requestFullscreen) {
          fs.requestFullscreen();
      } else if (fs.msRequestFullscreen) {
          fs.msRequestFullscreen();
      } else if (fs.mozRequestFullScreen) {
          fs.mozRequestFullScreen();
      } else if (fs.webkitRequestFullscreen) {
          fs.webkitRequestFullscreen();
      }
  } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      }
  }
}

 toggleChat=()=> {
   console.log("chat");
 }

 
  /**
   * @param  {string} properties => "default" or "customized"
   * @param  {} newProperties => optional{"session", "name", "outputMode", "hasAudio", "hasVideo", 
   * "resolution", "recordingLayout", "customLayout"}
   */
  startRecording = (properties, newProperties) => {

    let session= this.state.session.sessionId;
    console.log("session Id "+ session);
    let name= this.state.nameSession;
   (properties === "default") ? 
   (this.props.startNewRecording(session, name, '').then((res) =>{
     this.setState({
       record: res.value.data
     })
     console.log("recordId du starting => *****" + this.state.record);
    })) : 
   (this.props.startNewRecording(session, name, newProperties));
   
  }

  connectLive = () => {

    //We create an instance of OpenVidu
    const OV = new OpenVidu();
    let session = OV.initSession();

    //We retrieve the post request's token
    this.props.createNewLive(this.state.nameSession,this.state.descrSession)
      .then((res) => {
        // console.log("token res  ***" + token);
        //let session = OV.initSession();
        const ovToken = res.value.data;
        this.setState({
          tokenSession: ovToken,
          session: session,
        });


        session.connect(ovToken).then(()=>{

          if (this.state.checked){
            this.startRecording("default");
          }
          // Add our live video to the DOM
         let publisher = OV.initPublisher(undefined,{

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
            publisher: publisher
          });
        })
        
       
      });
  }
  render() {
    
    return (
      <div>
    {this.state.session === undefined ? (

        <div className="content">
          <div className="courseShowcase">
            <div className="login-page">
                <div className="row mt-3">
                    <h1 className="liveheader logohead">🔴 NEW LIVE</h1>
                </div>
               <div className="form mt-5">
                 <input type="text" name="nameSession"  value={this.state.nameSession} onChange={this.handleChange} placeholder="Name..." />
                 <input type="textarea" name="descrSession"  value={this.state.descrSession} onChange={this.handleChange} placeholder="Description..."/>
                 <div>
                 <FormControlLabel
                    control={<Switch checked={this.state.checked} onChange={this.toggleChecked} />}
                    label="Recording"
                  />
                  </div>
                <button className="livebutton" onClick={this.submit}> Play </button>

              </div>
          </div>
        </div>
      </div>         
          ): 


    // {/*   */}
         (
    /*    <div>
        <div id="title">
        </div>
        <div >
          <OpvSession
         id="opv-session"
         sessionName={this.state.nameSession}
         user="Live"
         token= {this.state.tokenSession}
         leaveSession={this.handlerLeaveSessionEvent}
         error={this.handlerErrorEvent} /> 
           </div>
           </div> 
          
*/ 
 
       <div className="content">
         {this.state.publisher!== undefined ? (
            <div className="courseShowcase">
               <div id="video-container" >
                 <Video videoManager= {this.state.publisher} />
               </div>
               <ToolbarComponent
                    sessionId= {"jnfjnjnjnjnjnjfn"}
                    user= {'localUser'}
                    showNotification= {false}
                    camStatusChanged= {this.camStatusChanged}
                    micStatusChanged= {this.micStatusChanged}
                    screenShare= {this.screenShare}
                    stopScreenShare= {this.stopScreenShare}
                    toggleFullscreen= {this.toggleFullscreen}
                    leaveSession= {this.leaveSession}
                    toggleChat= {this.toggleChat}
                    />
               <button onClick={this.leaveSession}>  
            Leave
          </button>

          
           </div>
            ) : null};
         </div>
         )}
</div>
    );
  }

  }

const mapStateToProps = (state) => ({
  live: state.ovToken, 
  record : state.record
});

const mapDispatchToProps = (dispatch) => ({
  createNewLive: (nameCourse, description) => dispatch(createLive(nameCourse, description)),
  startNewRecording: (session, name, properties) => dispatch(startToRecord(session, name, properties)),
  stopRecording: (recordId) => dispatch(stopRecording(recordId))

});

export default connect(mapStateToProps, mapDispatchToProps)(Live);
