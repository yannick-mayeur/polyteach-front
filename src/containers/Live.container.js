// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Store
import { createLive, startToRecord, stopRecording, getSession } from '../store/actions';
// OpenVidu
import OpvSession from 'openvidu-react';
import { OpenVidu } from 'openvidu-browser';
import { FormControlLabel, IconButton } from '@material-ui/core';
import { Switch} from '@material-ui/core';
import Video from '../components/LiveRoom/Video';
import ToolbarComponent from '../components/LiveRoom/ToolbarComponent'
import Tooltip from '@material-ui/core/Tooltip';
import Share from '@material-ui/icons/Share';
import Code from '@material-ui/icons/Code';
const OV= new OpenVidu();
const polyteachURL = "https://polyteach.igpolytech.fr";
const localhostURL = "http://localhost:8080";
const num = 0;
class Live extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nameSession: '', 
      descrSession: '',
      session: undefined,
      publisher: undefined,
      checked: false,
      record: '',
      audioActive: true,
      videoActive: true,
      screenShareActive: false,
    };
  }

  
  handleChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value })
  }

  leaveSession = () => {

    this.props.checked ? 
      (this.props.stopRecording(recordId).then(()=>{
           this.state.session.disconnect();
      }))
      : this.state.session.disconnect(); 

    this.setState({
      nameSession: '', 
      descrSession: '', 
      session: undefined,
      publisher: undefined,
      checked: false,
      record: '',
      audioActive: true,
      videoActive: true,
      screenShareActive: false,
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
  /********* media manager functions ************/
  isAudioActive = () => {
    return this.state.audioActive;
  }

  isVideoActive = () =>{
    return this.state.videoActive;
  }

  isScreenShareActive = ()=> {
    return this.state.screenShareActive;
  }

  micStatusChanged = () =>{
    this.state.publisher.publishAudio(!this.isAudioActive());
    this.sendSignalChanged("isAudioActive:" + !this.isAudioActive());
    
    this.setState({
      audioActive: !(this.state.audioActive)
    })
  }

  camStatusChanged = () => {
    this.state.publisher.publishVideo(!this.isVideoActive());
    this.sendSignalChanged("isVideoActive:" + !this.isVideoActive());
    
    this.setState({
      videoActive: !(this.state.videoActive)
    })
  }

  sendSignalChanged = (data)=>{
    this.state.session.signal( data,'userChanged');
  }

  sourceChanged = () => {
    this.isScreenShareActive() ? this.stopScreenShare() : this.screenShare();
  }

  screenShare = () => {

    const videoSource = navigator.userAgent.indexOf('Firefox') !== -1 ? 'window' : 'screen';

    const publisher = OV.initPublisher(undefined, {
        videoSource: videoSource,
        publishAudio: this.isAudioActive(),
        publishVideo: this.isVideoActive(),
        mirror: false
    },  (error) => {
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

        this.state.session.unpublish(this.state.publisher);
        this.setState({publisher: publisher});

        this.state.session.publish(this.state.publisher).then(() =>{
        this.setState({screenShareActive: true});
        this.sendSignalChanged("isScreenShareActive:"+ this.isScreenShareActive());
        });

      });

      publisher.on('streamPlaying', () =>{
        this.state.publisher.publishVideo(true);

      });
  }


  stopScreenShare = () => {
   this.state.session.unpublish(this.state.publisher);
   this.connectWebCam();
  }
 
  connectWebCam = () =>{
    const publisher = OV.initPublisher(undefined, {
      audioSource: undefined,
      videoSource: undefined,
      publishAudio: this.isAudioActive(),
      publishVideo: this.isVideoActive(),
      resolution: '640x480',
      frameRate: 30,
      insertMode: 'APPEND'
    });
    
    this.state.session.publish(publisher);
    this.setState({
      screenShareActive: false,
      publisher: publisher
    })
    this.sendSignalChanged( "isScreenShareActive:"+ this.isScreenShareActive());
  }

  toggleFullscreen = () =>{
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

   /********* recording manager functions ************/
  /**
   * @param  {string} mode => "default" or "customized"
   * @param  {} newProperties => optional{"session", "name", "outputMode", "hasAudio", "hasVideo", 
   * "resolution", "recordingLayout", "customLayout"}
   */
  startRecording = (mode, newProperties) => {

    let session= this.state.session.sessionId;
    let name= this.state.nameSession;

    (mode === "default") ? 
      (this.props.startNewRecording(session, name, '').then((res) =>{
          this.setState({
            record: res.value.data
          })
     
      })) : 
     (this.props.startNewRecording(session, name, newProperties));
   
  }


  connectLive = () => {

    let session = OV.initSession();
    //We retrieve the post request's token
    this.props.createNewLive(this.state.nameSession,this.state.descrSession)
      .then((res) => {
        const ovToken = res.value.data;

        this.setState({
          session: session,
        });
        session.on('streamCreated', (event) => {
          num= num+1;
          console.log("NUUUUUUUUUUUUU"+ num);
        // Subscribe to the Stream to receive it
        // HTML video will be appended to element with 'video-container' id
        const subscriber = session.subscribe(event.stream, 'video-container');
     
      });
        session.connect(ovToken).then(()=>{

          if (this.state.checked){
            this.startRecording("default");
          }
        

        const defaultProperties = {
          audioSource: undefined, // The source of audio. If undefined default microphone
          videoSource: undefined, // The source of video. If undefined default webcam
          publishAudio: true,  	// Whether you want to start publishing with your audio unmuted or not
          publishVideo: true,  	// Whether you want to start publishing with your video enabled or not
          resolution: '640x480',  // The resolution of your video
          frameRate: 30,			// The frame rate of your video
          insertMode: 'APPEND',	// How the video is inserted in the target element 'video-container'
          mirror: false       	// Whether to mirror your local video or not
        };
         // Add our live video to the DOM
         let publisher = OV.initPublisher(undefined, defaultProperties);

          //Publish our stream 
          session.publish(publisher);

          this.setState({
            session: session,
            publisher: publisher
          });
      }) 
    });
  }

  copy=()=>{
    let copyText = document.getElementById("liveURL"); 
    console.log("copyt"+copyText);
    copyText.select();
    document.execCommand("copy");



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
         
 
      ( <div className="content">
        <div className="courseShowcase">
         {this.state.publisher!== undefined ? (
           <div>
               <div className="video-container" >
                 <Video videoManager= {this.state.publisher}/>
               </div>   
               </div>   
               ) : null};
               <div class="col-md-12">
    
            <div class="panel-heading">
             
              <IconButton color="default">
                <Share color= 'primary' ></Share>
              </IconButton>

              <label >Share Stream</label>
             </div>

             <div class="panel-body">
           
               <label>⚪️ Live URL</label>
               <div className='input-group'>
               <input type="text" value={localhostURL+"/livestudent/"+this.state.session.sessionId}  id="liveURL"  readOnly="readonly"/>
          
               <Tooltip title="Copy">
               <IconButton color="default" onClick={()=>(this.copy())}>
                <Code color= 'primary' ></Code>
              </IconButton>
              </Tooltip>
           
              </div>

              <div><label >Title: {this.state.nameSession}</label>
              </div>
              <div>  <label >Description: {this.state.descrSession}</label></div>
            
              <label> Date: {new Date().toLocaleString( "en-US",{weekday: "long", year: "numeric", month: "long", day: "numeric", hour12: false })}</label>
  
        
             </div>
    
         </div>
              
               <ToolbarComponent
                    audioActive= {this.state.audioActive}
                    videoActive= {this.state.videoActive}
                    screenShareActive= {this.state.screenShareActive}
                    camStatusChanged= {this.camStatusChanged}
                    micStatusChanged= {this.micStatusChanged}
                    sourceChanged= {this.sourceChanged}
                    toggleFullscreen= {this.toggleFullscreen}
                    leaveSession= {this.leaveSession}
                    />     

         </div>
         )}
    </div>
    )};
    </div>
    )}
  }


const mapStateToProps = (state) => ({
  live: state.ovToken, 
  record : state.record
});

const mapDispatchToProps = (dispatch) => ({
  createNewLive: (nameCourse, description) => dispatch(createLive(nameCourse, description)),
  startNewRecording: (session, name, properties) => dispatch(startToRecord(session, name, properties)),
  stopRecording: (recordId) => dispatch(stopRecording(recordId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Live);
