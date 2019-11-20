
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
        // })
        return(
            
            <div className="container" style={{paddingTop:50}}>
                
                <div className="row">
                    <div className="video-container col-md-9">
                    
                   {this.state.subscriber ? <Video videoManager={this.state.subscriber}/> : null };
                    <div display={this.state.display}>
                        
                    </div>
                    </div>
                        <div style={{textAlign:"center"}}>
                            <button>Quitter</button>
                            <button className="livebutton" onClick={() => (this.joinSession(sessionId))}> Play </button>
                        </div>
                    <div className="col-md-3" style={{backgroundColor:"white",textAlign:"center"}}>
                        <h1 style={{backgroundColor:"red"}}>Nom du cours : {sessionId}</h1>
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
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    getTokenById: (sessionId) => dispatch(get_tokenSession(sessionId)) 
  });

  export default connect(mapStateToProps, mapDispatchToProps)(LiveStudent);