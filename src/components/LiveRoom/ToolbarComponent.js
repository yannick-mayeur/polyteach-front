
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
import { red } from '@material-ui/core/colors';

export default class ToolbarComponent extends Component{

    constructor(props) {
        super(props);
    } 

    micStatusChanged=() =>{
        this.props.micStatusChanged();
        }


    camStatusChanged=() => {
            this.props.camStatusChanged();
            console.log("def ====" + this.props);
        }


    screenShare=()=> {
         this.props.screenShare();
     }


    stopScreenShare=()=> {
         this.props.stopScreenShare();
     }


    toggleFullscreen=()=> {
         this.setState({ fullscreen: !this.state.fullscreen });
         this.props.toggleFullscreen();
     }
    
    
     leaveSession=()=> {
         this.props.leaveSession();
     }

     toggleChat=()=> {
         this.props.toggleChat();
     }

     

    //  this.camStatusChanged = this.camStatusChanged.bind(_this);
    //  this.micStatusChanged = this.micStatusChanged.bind(_this);
    //  this.screenShare = this.screenShare.bind(_this);
    //  this.stopScreenShare = this.stopScreenShare.bind(_this);

    //  this.leaveSession = this.leaveSession.bind(_this);
    //  this.toggleChat = this.toggleChat.bind(_this);
    //  return _this;


    render() {
         const mySessionId = this.props.sessionId;
         const localUser = this.props.user;
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
                         { color: 'black', className: 'navButton', id: 'navMicButton', onClick: this.micStatusChanged },
                        true ? React.createElement(Mic, null) : React.createElement(MicOff, { color: 'primary' })
                     ),
                     React.createElement(
                         IconButton,
                         { color: 'black', className: 'navButton', id: 'navCamButton', onClick: this.camStatusChanged },
                         true ? React.createElement(Videocam, null) : React.createElement(VideocamOff, { color: 'primary' })
                     ),
                     React.createElement(
                         IconButton,
                         { color: 'black', className: 'navButton', onClick: this.screenShare },
                         true ? React.createElement(PictureInPicture, null) : React.createElement(ScreenShare, null)
                     ),
                     true && React.createElement(
                         IconButton,
                         { onClick: this.stopScreenShare, id: 'navScreenButton' },
                         React.createElement(StopScreenShare, { color: 'primary' })
                     ),
                     React.createElement(
                         IconButton,
                         { color: 'black', className: 'navButton', onClick: this.toggleFullscreen },
                         true ? React.createElement(FullscreenExit, null) : React.createElement(Fullscreen, null)
                     ),
                     React.createElement(
                         IconButton,
                         { color: 'secondary', className: 'navButton', onClick: this.leaveSession, id: 'navLeaveButton' },
                         React.createElement(PowerSettingsNew, null)
                     ),
                     React.createElement(
                         IconButton,
                         { color: 'black', onClick: this.toggleChat, id: 'navChatButton' },
                         false && React.createElement('div', { id: 'point', className: '' }),
                         React.createElement(
                             Tooltip,
                             { title: 'Chat' },
                             React.createElement(QuestionAnswer, null)
                         )
                     )
                 )
             )
         );
     }

    }

