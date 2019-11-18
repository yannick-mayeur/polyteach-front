
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Mic from '@material-ui/icons/Mic';
import MicOff from '@material-ui/icons/MicOff';
import Videocam from '@material-ui/icons/Videocam';
import VideocamOff from '@material-ui/icons/VideocamOff';
import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';
import PictureInPicture from '@material-ui/icons/PictureInPicture';
import ScreenShare from '@material-ui/icons/ScreenShare';
import StopScreenShare from '@material-ui/icons/StopScreenShare';
import Tooltip from '@material-ui/core/Tooltip';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';

export default class ToolbarComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            fullscreen: false
        }
    } 

    micStatusChanged = () =>{
        this.props.micStatusChanged();

        }


    camStatusChanged = () => {
            this.props.camStatusChanged();
            console.log("def ====" + this.props);
        }

    sourceChanged = () => {
        this.props.sourceChanged();
       
    }

    toggleFullscreen = () => {
         this.setState({ fullscreen: !this.state.fullscreen });
         this.props.toggleFullscreen();
     }
    
    
     leaveSession = () => {
         this.props.leaveSession();
     }

     toggleChat = () => {
         this.props.toggleChat();
     }


    render() {
         const mySessionId = this.props.sessionId;
         console.log("audio Active :  " + this.props.audioActive);
         console.log("video Active :  " + this.props.videoActive);
         console.log("screenshare Active :  " + this.props.screenShareActive);
         
         return React.createElement(
             AppBar,
             { className: 'appbar', id: 'header', color:"inherit"},
             React.createElement(
                 Toolbar,
                 { className: 'toolbar' },
                 React.createElement(
                     'div',
                     { id: 'navSessionInfo' },
                     this.props.sessionId && React.createElement(
                         'div',
                         { id: 'titleContent' },
                         React.createElement(
                             'span',
                             { id: 'session-title' },
                             mySessionId
                         )
                     )
                 ),
                
                 React.createElement(
                     'div',
                     { className: 'buttonsContent' },
                     React.createElement(
                         IconButton,
                         { color: 'default', className: 'navButton', id: 'navMicButton', onClick: this.micStatusChanged },
                        this.props.audioActive ? React.createElement(Mic, null) : React.createElement(MicOff, { color: 'primary' })
                     ),
                     React.createElement(
                         IconButton,
                         { color: 'default', className: 'navButton', id: 'navCamButton', onClick: this.camStatusChanged },
                        this.props.videoActive ? React.createElement(Videocam, null) : React.createElement(VideocamOff, { color: 'primary' })
                     ),
                     React.createElement(
                         IconButton,
                         { color: 'default', className: 'navButton', onClick: this.sourceChanged },
                         !this.props.screenShareActive ?  React.createElement(ScreenShare, null) :
                         React.createElement(StopScreenShare, { color: 'secondary' })
                    ),
                     React.createElement(
                         IconButton,
                         { color: 'default', className: 'navButton', onClick: this.toggleFullscreen },
                         this.state.fullscreen ? React.createElement(FullscreenExit, null) : React.createElement(Fullscreen, null)
                     ),
                     React.createElement(
                         IconButton,
                         { color: 'secondary', className: 'navButton', onClick: this.leaveSession, id: 'navLeaveButton' },
                         React.createElement(PowerSettingsNew, null)
                     ),
                 )
             )
         );
     }

    }

