import React, { Component } from 'react'
import Picker from '../Picker/Picker'
import UploadLogo from '../../static/images/upload.svg';
import FolderLogo from '../../static/images/folder.svg';
import { VideoCard } from './VideoCard';
import { askForSignedURL, askForSubtitles, uploadVideoToGCP } from '../../services/Uploader/VideoApi';

export default class Videos extends Component {

        constructor(props) {
                super(props);
                this.state = {
                        //TODO - Fetch videos where idCourse=current course
                        //TODO - Create an identifier for the videos and do not store <VideoCard/> 
                        //but an array of attributes for each video and then map them to VideoCards
                        videoURL: '',
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

        setName = (newName, key)  => {
                const newVideos = this.props.getVideos();
                console.log(key);
                console.log(this.props.getVideos());
                console.log(newVideos);

                newVideos[key].titleVideo = newName;
                this.props.saveVideos(newVideos);
        };

        uploadDocumentRequest = async ({ video }) => {
                // We use a FormData to send the video
                let data = new FormData();
                data.append('video', video);
                const signedURL = await askForSignedURL(video.name);
                const see = await uploadVideoToGCP(video, signedURL);
                if (see) {
                        const subtitles = await askForSubtitles(video.name);
                        //const newVideo = <VideoCard titleVideo={this.props.videoName} urlVideo={this.props.videoURL} />
                        const newVideos = this.props.getVideos();
                        newVideos.push(
                                {titleVideo:video.name, 
                                videoURL: subtitles.data.videoURL,
                                vttURL: subtitles.data.vttURL
                                }
                                )
                        // Good
                        this.setState({
                                videoURL: subtitles.data.videoURL,
                                message: "Video uploaded with success !",
                                displaySpinner: "none",
                                vttURL: subtitles.data.vttURL,
                                videoInput: '',
                                video: ''
                        });
                        this.props.saveVideos(newVideos)
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
                                                        <h4 style={{ textAlign: "center"}}>{this.state.message}</h4>
                                                        <div style={{ marginRight: "auto", textAlign: "center", marginLeft: "auto", display: this.state.displaySpinner }} className="mb-3" role="status">
                                                                <div className="loader-1 mb-2"><span></span></div>
                                                                <span style={{ textAlign: "center" }} className="sr-only">Uploading...</span>
                                                        </div>
                                                        <div className="mx-auto">
                                                        <button className="btnBlack mt-2" onClick={() => { document.getElementById("inputVideo").click(); }}>
                                                                <input name="video" hidden={true} type="file" id="inputVideo" value={this.state.video} onChange={this.handleChange} accept="video/*" />
                                                                <FolderLogo className="btnBlack-icon" />
                                                                {this.state.videoName ? this.state.videoName : "Pick a video"}
                                                        </button>
                                                                <button className="saveBtn ml-2 mt-2" id="inputVideoLabel" onClick={this.handleClick}>
                                                                <UploadLogo className="btnBlack-icon" />
                                                                Upload
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>

                                        { this.props.getVideos() && this.props.getVideos().length > 0 ?
                                        this.props.getVideos().map( (video, index) => {
                                                const videoCard =
                                                <VideoCard key={index} idVideo={index} titleVideo={video.titleVideo} videoURL={video.videoURL} vttURL={video.vttURL} setName={this.setName}/>
                                                return videoCard;
                                        }) : 
                                        <h1 style={{ textAlign: "center"}}>You have added no videos yet. </h1>
                                        }
                                </div>
                        </>
                )
        }
}