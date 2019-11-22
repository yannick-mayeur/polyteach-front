
// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Store
import { get_tokenSession, get_data, isActive } from '../store/actions';
import { OpenVidu } from 'openvidu-browser';
import Video from '../components/LiveRoom/Video';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export class LiveStudent extends React.Component{

   
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            stillAvailable: false,
            finished: false,
            logged: undefined,
            redirect:false
        };
        let sessionId= this.props.match.params.sessionId;
    }

    componentDidMount(){
        let sessionId= this.props.match.params.sessionId;
        this.props.getDataById(sessionId).then(()=>
        {
            this.setState({
                loading: false
            })
        }).catch(() => this.setState({error: true}));

      this.props.isActiveSession(sessionId).then(()=>{
          this.setState({
          stillAvailable : this.props.status
      })
      }
      );

    }

    joinSession=(sessionId)=>{
        this.props.getTokenById(sessionId).then(token => {

        const OV= new OpenVidu();
        let session=OV.initSession();
        let subscriber = null;
        session.on('streamCreated', (event) => {

            subscriber = session.subscribe(event.stream, 'video-container');
            this.setState({
                subscriber: subscriber,
            });
        });

        session.on('streamDestroyed', (event) => {
            this.setState({
                finished: true
            })
        });

        session.connect(token.value.data);

        this.setState({
            subscriber: subscriber,
        });
      }) 
    };

    quitSession=()=> {
        this.setState({
            redirect: true
        })
    }


    render() {
        if (this.state.error){
            return <h1>Error</h1>
        }
        if (this.state.loading){
            return null;
        }
        const data = this.props.data;
        const createdOn = new Intl.DateTimeFormat('en-US',
            {year: 'numeric', month: '2-digit',day: '2-digit'}).format(data.timestartlive);
        const createdAt = new Intl.DateTimeFormat('en-US',
            { hour: '2-digit', minute: '2-digit'}).format(data.timestartlive);


        return(
            
            <div className="content">
                <div className="courseShowcase">
                <div className="video-container" >
                        <div className="row text-center mx-auto">
                            {this.state.stillAvailable ?  null     :
                                <p className="unavailable">  This live is not available anymore </p>
                            }
                            {this.state.finished ?
                                <p className="available">  {data.namesession} is now closed by the teacher</p> : null

                            }
                            <div className="col-md-12">
                            <h1 className="live-head mb-4"> Session: {data.namesession} </h1>
                                <h5 className="datecard-class mt-2">Created on {createdOn} </h5>
                                <h5 className="datecard-class mt-2"> {createdAt} </h5>
                            <p className="live-description"> Description {data.descriptionlive} </p>
                            <h4 className="smallcard-class mt-2"> Teacher Name {data.nameteacher}</h4>



                            </div>
                        </div>     
                    </div>


                    <div className="menubuttonsrow">
                        <button className="quitlivebutton" onClick={() => (this.quitSession())}> Quit</button>
                        <button className="livebutton" onClick={() => (this.joinSession(data.idsession))}> Play </button>

                    </div>

                    <div className="row">

                        <div className="video-container mx-auto col-md-12">
                        {this.state.subscriber ?
                                <Video videoManager={this.state.subscriber}/> 
                            : 
                                null 
                        }
                            <div>

                                <Dialog
                                    open={this.state.redirect}
                                    keepMounted
                                    aria-labelledby="alert-dialog-slide-title"
                                    aria-describedby="alert-dialog-slide-description">
                                    <DialogTitle>{"You are about to leave the live"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Are you sure you want to leave this session?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <button onClick={() => (this.setState({redirect: false}))} color="primary">
                                            Not really
                                        </button>
                                        <button onClick={() => (this.props.history.push('/'))} color="primary">
                                            Yes
                                        </button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        <div display={this.state.display}/>
                        </div>
                    </div>

                </div>

            </div>
            )
    }
}
const mapStateToProps = (state) => ({
 data: state.live.infosLive,
    status: state.live.sessionStatus,
    user: state.login.user
});

const mapDispatchToProps = (dispatch) => ({
    getTokenById: (sessionId) => dispatch(get_tokenSession(sessionId)),
    getDataById:(sessionId) => dispatch(get_data(sessionId)),
    isActiveSession: (sessionId) => dispatch(isActive(sessionId))
});

  export default connect(mapStateToProps, mapDispatchToProps)(LiveStudent);