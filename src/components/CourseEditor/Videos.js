import React, { Component } from 'react'
import Picker from '../Picker/Picker'
import UploadLogo from '../../static/images/upload.svg';
import { VideoCard } from './VideoCard';
import { askForSignedURL, askForSubtitles, uploadVideoToGCP } from '../../services/Uploader/VideoApi';

export default class Videos extends Component {

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
                this.setState({ subtitles: '', display: 'none' });
                if (this.state.videoInput !== '') {
                        // We send the video to the server
                        this.uploadDocumentRequest({ video: this.state.videoInput });

                        // We reset the fields
                        this.setState({ videoName: '', displaySpinner: "block" });
                }
                else {
                        this.setState({ message: 'You need to choose a video !' })
                }

        };

        uploadDocumentRequest = async ({ video }) => {
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
                        this.setState({ displaySpinner: "none", message: "Failed to upload the video !" });
                }
        };

        render() {
                return (
                        <>
                                <div className="container">
                                        <h1>Manage your videos</h1>
                                        <div className="row mt-5 buttonsrow">
                                                <div className="col-md-6">
                                                        <Picker />
                                                </div>



                                                <div className="col-md-6">
                                                        <h5 style={{ textAlign: "center", color: "red" }}>{this.state.message}</h5>
                                                        <div style={{ marginRight: "auto", marginLeft: "auto", display: this.state.displaySpinner }}
                                                                className="spinner-border text-primary" role="status">
                                                                <span style={{ textAlign: "center" }} className="sr-only">Loading...</span>
                                                        </div>

                                                        <button className="btnBlack" onClick={() => { document.getElementById("inputVideo").click(); }}>
                                                                <input name="video" type="file" id="inputVideo" value={this.state.video} onChange={this.handleChange} accept="video/*" />
                                                                <label className="custom-file-label" htmlFor="inputVideo"
                                                                        aria-describedby="inputVideoLabel">{this.state.videoName}</label>
                                                                <UploadLogo className="btnBlack-icon" />
                                                                Pick a video
                        </button>
                                                        <button className="input-group-text" id="inputVideoLabel" onClick={this.handleClick}>Upload</button>
                                                </div>
                                                <div style={{ marginTop: "30px", paddingRight: "20%", paddingLeft: "20%" }} className="input-group mb-3">
                                                        <div className="custom-file">
                                                                <input accept="video/mp4,video/x-m4v,video/*" type="file" className="custom-file-input"
                                                                        id="inputVideo" value={this.state.video} onChange={this.handleChange} />
                                                                <label className="custom-file-label" htmlFor="inputVideo"
                                                                        aria-describedby="inputVideoLabel">{this.state.videoName}</label>
                                                        </div>
                                                        <div className="input-group-append">
                                                                <button className="input-group-text" id="inputVideoLabel" onClick={this.handleClick}>Upload</button>
                                                        </div>
                                                </div>

                                        </div>

                                        <VideoCard />
                                        <VideoCard />

                                </div>
                        </>
                )
        }
}