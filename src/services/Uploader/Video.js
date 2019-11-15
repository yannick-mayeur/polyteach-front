import React from 'react';
import {askForSignedURL, askForSubtitles, uploadVideoToGCP} from '../api/VideoApi';

export default class Video extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videoURL: '',
            subtitles: '',
            display: "none",
            videoName: '',
            videoInput: '',
            video: '',
            message: '',
            vttURL: '',
            displaySpinner: "none"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // To handle changes on the input file
    handleChange = (event) => {
        this.setState({
            videoInput: event.target.files.item(0),
            videoName: event.target.files.item(0).name,
            message: ''
        });
    };

    // Action when we click on the "upload" button
    handleClick = (event) => {
        event.preventDefault();
        this.setState({subtitles: '', display: 'none'});
        if(this.state.videoInput !== '') {
            // We send the video to the server
            this.uploadDocumentRequest({video: this.state.videoInput});

            // We reset the fields
            this.setState({videoName: '', displaySpinner: "block"});
        }
        else{
            this.setState({message: 'You need to choose a video !'})
        }

    };

    uploadDocumentRequest = async ({video}) => {
        // We use a FormData to send the video
        let data = new FormData();
        data.append('video', video);
        const signedURL = await askForSignedURL(video.name);
        const see = await uploadVideoToGCP(video, signedURL);
        if (see) {
            const subtitles = await askForSubtitles(video.name);
            // Good
            this.setState({
                subtitles: subtitles.data.transcription.map((value, index) => <p onClick={this.changeVideoSec}
                                                                                 id={subtitles.data.timings[index][0]}
                                                                                 key={index}>{value}</p>),
                display: "block",
                videoURL: subtitles.data.videoURL,
                message: "Video uploaded with success !",
                displaySpinner: "none",
                vttURL: subtitles.data.vttURL,
                videoInput: '',
                video: ''
            });
        } else {
            // Bad
            this.setState({displaySpinner: "none", message: "Failed to upload the video !"});
        }
    };

        
    changeVideoSec = (evt) => {
        const video = document.getElementById('video');
        video.currentTime = evt.target.id
    };

    render() {
        return (
            <div>
               <h1 style={{textAlign: "center", marginTop: "30px"}}>Polyteach POC - Front</h1>
                <h5 style={{margin: "30px"}}>Upload a video: </h5>
                <h5 style={{textAlign: "center", color: "red"}}>{this.state.message}</h5>
                <div style={{marginRight: "auto", marginLeft: "auto", display: this.state.displaySpinner}}
                     className="spinner-border text-primary" role="status">
                    <span style={{textAlign: "center"}} className="sr-only">Loading...</span>
                </div>
                <div style={{marginTop: "30px", paddingRight: "20%", paddingLeft: "20%"}} className="input-group mb-3">
                    <div className="custom-file">
                        <input accept="video/mp4,video/x-m4v,video/*" type="file" className="custom-file-input"
                               id="inputVideo" value={this.state.video} onChange={this.handleChange}/>
                            <label className="custom-file-label" htmlFor="inputVideo"
                                   aria-describedby="inputVideoLabel">{this.state.videoName}</label>
                    </div>
                    <div className="input-group-append">
                        <button className="input-group-text" id="inputVideoLabel" onClick={this.handleClick}>Upload</button>
                    </div>
                </div>
                <div style={{display: this.state.display, margin: "30px"}}>
                    <video id="video" style={{
                        display: 'flex',
                        marginRight: "auto",
                        marginLeft: "auto",
                        marginTop: '50px',
                        marginBottom: '50px'
                    }} key={this.state.videoURL} preload="auto" crossOrigin="anonymous" controls width={"70%"}>
                        <source src={this.state.videoURL} type="video/mp4"/>
                        <track default kind="subtitles"
                               srcLang="en"
                               src={this.state.vttURL}/>
                    </video>
                    <div id="subtitles">
                        <h5>Video subtitles:</h5>
                        {
                            this.state.subtitles
                        }
                    </div>
                </div>
            </div>
        )
    }
}