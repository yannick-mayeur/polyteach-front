// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Store
import { createLive, startToRecord, stopRecording, saveLive } from '../store/actions';
// OpenVidu
import { OpenVidu } from 'openvidu-browser';
import { FormControlLabel, IconButton } from '@material-ui/core';
import { Switch } from '@material-ui/core';
import Video from '../components/LiveRoom/Video';
import ToolbarComponent from '../components/LiveRoom/ToolbarComponent'
import Tooltip from '@material-ui/core/Tooltip';
import Share from '@material-ui/icons/Share';
import Code from '@material-ui/icons/Code';
const OV = new OpenVidu();
const polyteachURL = "https://polyteach.igpolytech.fr";
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
            recordingURL: undefined
        };
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    leaveSession = () => {


        if(this.state.checked){
            let recordId = this.props.record;


            this.state.session.disconnect();

            const recordings_url='https://igpolytech.fr:4443/recordings/';
            const namesession =this.state.nameSession;
            let videoURL = recordings_url+ recordId+ '/'+ namesession+'.mp4';
            this.setState({
                videoURL: videoURL
            })
        }

        else{this.state.session.disconnect();}

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

    isAudioActive = () => {
        return this.state.audioActive;
    }

    isVideoActive = () => {
        return this.state.videoActive;
    }

    isScreenShareActive = () => {
        return this.state.screenShareActive;
    }

    micStatusChanged = () => {
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

    sendSignalChanged = (data) => {
        this.state.session.signal(data, 'userChanged');
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
        }, (error) => {
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

        publisher.once('accessAllowed', () => {

            this.state.session.unpublish(this.state.publisher);
            this.setState({ publisher: publisher });

            this.state.session.publish(this.state.publisher).then(() => {
                this.setState({ screenShareActive: true });
                this.sendSignalChanged("isScreenShareActive:" + this.isScreenShareActive());
            });

        });

        publisher.on('streamPlaying', () => {
            this.state.publisher.publishVideo(true);

        });
    }


    stopScreenShare = () => {
        this.state.session.unpublish(this.state.publisher);
        this.connectWebCam();
    }

    connectWebCam = () => {
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
        this.sendSignalChanged("isScreenShareActive:" + this.isScreenShareActive());
    }

    toggleFullscreen = () => {
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


    startRecording = (mode, newProperties) => {

        let session = this.state.session.sessionId;
        let name = this.state.nameSession;

        (mode === "default") ?
            (this.props.startNewRecording(session, name, '').then((res) => {
                this.setState({
                    record: res.value.data
                })

            })) :
            (this.props.startNewRecording(session, name, newProperties));

    }

    saveSession = () => {

        let params = {
            id: this.state.session.sessionId,
            name: this.state.nameSession,
            descr: this.state.descrSession,
            nameteacher: this.props.teacher.firstname + ' ' + this.props.teacher.lastname,
        }
        this.props.saveNewLive(params.id, params.name, params.descr,params.nameteacher);
    }


    connectLive = () => {

        let session = OV.initSession();
        //We retrieve the post request's token
        this.props.createNewLive(this.state.nameSession, this.state.descrSession)
            .then((res) => {
                const ovToken = res.value.data;

                this.setState({
                    session: session,
                });
                session.on('streamCreated', (event) => {
                    // Subscribe to the Stream to receive it
                    // HTML video will be appended to element with 'video-container' id
                    const subscriber = session.subscribe(event.stream, 'video-container');

                });
                session.connect(ovToken).then(() => {

                    this.saveSession();

                    if (this.state.checked) {
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

                    let publisher = OV.initPublisher(undefined, defaultProperties);
                    session.publish(publisher);

                    this.setState({
                        session: session,
                        publisher: publisher
                    });
                })
            });
    }

    copy = () => {
        let copyText = document.getElementById("liveURL");
        copyText.select();
        document.execCommand("copy");
    }


    render() {
        const today = new Date().toLocaleString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour12: false });
        return (
            <div>
                {this.state.session === undefined && this.state.recordingURL === undefined ?
                    <div className="content">
                        <div className="courseShowcase">
                            <div className="login-page">
                                <div className="row mt-3">
                                    <h1 className="liveheader logohead">🔴 NEW LIVE</h1>
                                </div>
                                <div className="form mt-5">
                                    <input type="text" name="nameSession" value={this.state.nameSession} onChange={this.handleChange} placeholder="Name..." />
                                    <input type="textarea" name="descrSession" value={this.state.descrSession} onChange={this.handleChange} placeholder="Description..." />
                                    <div>
                                        <FormControlLabel
                                            control={<Switch checked={this.state.checked} onChange={this.toggleChecked} />}
                                            label="Recording"
                                            className="mb-4"
                                        />
                                    </div>
                                    <button className="livebutton" onClick={this.submit}> Play </button>
                                </div>
                                <p className="smallcard-head">{this.state.videoURL?"Here is your live video download:" + this.state.videoURL : ""}</p>
                            </div>
                        </div>
                    </div>

                    :

                    <div className="content">
                        <div className="courseShowcase">
                            {this.state.publisher !== undefined ?
                                        <div>
                                            <div className="video-container" >
                                            <div className="row text-center mx-auto">
                                            <div className="col-md-12">
                                            <h1 className="live-head mb-4"> {this.state.nameSession} </h1>
                                            <p className="live-description"> {this.state.descrSession} </p>
                                            <h4 className="smallcard-class mt-2"> {today} </h4>
                                            </div>
                                        </div>     
                                        <Video videoManager={this.state.publisher} />
                                    </div>
                                </div>
                                : null
                            }


                            <div>
                            <div className="row toolbar">
                                <div className="col-md-12">
                                   <IconButton color="default">
                                        <Share color='primary'></Share>
                                    </IconButton>
                                    <label className="live-description">Share your Stream</label>
                                </div>
                            </div>
                            <div className="row">
                            <div className='sharesheet row text-center mx-auto'>
                                    <Tooltip title="Copy">
                                        <IconButton color="default" onClick={() => (this.copy())}>
                                            <Code color='primary'></Code>
                                        </IconButton>
                                    </Tooltip>
                                    <input type="text" value={polyteachURL + "/livestudent/" + this.state.session.sessionId} id="liveURL" readOnly="readonly" size="50" />
                                </div>
                            </div>   
                            </div>                             
                            

                            <ToolbarComponent
                                audioActive={this.state.audioActive}
                                videoActive={this.state.videoActive}
                                screenShareActive={this.state.screenShareActive}
                                camStatusChanged={this.camStatusChanged}
                                micStatusChanged={this.micStatusChanged}
                                sourceChanged={this.sourceChanged}
                                toggleFullscreen={this.toggleFullscreen}
                                leaveSession={this.leaveSession}
                            />

                        </div>

                        )}
                    </div>
                };
        </div>

        )
    }
}


const mapStateToProps = (state) => ({
    live: state.ovToken,
    record: state.live.recordId,
    teacher: state.login.user
});

const mapDispatchToProps = (dispatch) => ({
    createNewLive: (nameCourse, description) => dispatch(createLive(nameCourse, description)),
    saveNewLive: (sessionId, nameSession, description, nameTeacher) => dispatch(saveLive(sessionId, nameSession, description, nameTeacher)),
    startNewRecording: (session, name, properties) => dispatch(startToRecord(session, name, properties)),
    stopRecording: (recordId) => dispatch(stopRecording(recordId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Live);
