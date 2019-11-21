
// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Store
import { get_tokenSession } from '../store/actions';
import { OpenVidu } from 'openvidu-browser';
import Video from '../components/LiveRoom/Video';

export class LiveStudent extends React.Component{
   
    constructor(props) {
        super(props);
        this.state={
            subscriber: undefined,
        };
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

        session.connect(token.value.data);

        this.setState({
            subscriber: subscriber,
        });
      }) 
    }

    render() {
        const sessionId = this.props.match.params.sessionId;

        return(
            
            <div className="content">
                <div className="courseShowcase">
                <div className="video-container" >
                        <div className="row text-center mx-auto">
                            <div className="col-md-12">
                            <h1 className="live-head mb-4"> Session: {sessionId} </h1>
                            <p className="live-description"> Description </p>
                            <h4 className="smallcard-class mt-2"> Teacher Name </h4>
                            </div>
                        </div>     
                    </div>


                    <div className="menubuttonsrow">
                        <button className="quitlivebutton"> Quit</button>
                        <button className="livebutton" onClick={() => (this.joinSession(sessionId))}> Play </button>
                    </div>

                    <div className="row">
                        <div className="video-container mx-auto col-md-12">
                        {this.state.subscriber ?
                                <Video videoManager={this.state.subscriber}/> 
                            : 
                                null 
                        }
                        <div display={this.state.display}/>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    getTokenById: (sessionId) => dispatch(get_tokenSession(sessionId)) 
  });

  export default connect(mapStateToProps, mapDispatchToProps)(LiveStudent);