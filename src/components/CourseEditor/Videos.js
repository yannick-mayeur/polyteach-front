import React, { Component } from 'react'
import Picker from '../Picker/Picker'
import UploadLogo from '../../static/images/upload.svg';
import FolderLogo from '../../static/images/folder.svg';
import { VideoCard } from './VideoCard';


export default function Videos(props) {
  return (
    <>
      <div className="container">
        <h1>Manage your videos</h1>
        <div className="row mt-5 buttonsrow">
          <div className="col-md-6">
            <Picker />
          </div>
          <div className="col-md-6">
            <h4 style={{ textAlign: "center" }}>{props.videos.message}</h4>
            <div style={{ marginRight: "auto", textAlign: "center", marginLeft: "auto", display: props.videos.displaySpinner ? "block" : "none" }} className="mb-3" role="status">
              <div className="loader-1 mb-2"><span></span></div>
              <span style={{ textAlign: "center" }} className="sr-only">Uploading...</span>
            </div>
            <div className="mx-auto">
              <button className="btnBlack mt-2" onClick={() => { document.getElementById("inputVideo").click(); }}>
                <input name="video" hidden={true} type="file" id="inputVideo" onChange={(event) => props.uploadVideo(event.target.files.item(0))} accept="video/*" />
                <FolderLogo className="btnBlack-icon" />
                Upload a new video
              </button>
            </div>
          </div>
        </div>

        {props.videos.selectedVideos && props.videos.selectedVideos.length > 0 ?
            props.videos.selectedVideos.map((video, index) => {
              const videoCard =
                <VideoCard key={index + video.title} idVideo={index} title={video.title} videoURL={video.videoURL} vttURL={video.vttURL} setName={props.updateNameVideo} removeVideo={props.removeVideo} />
              return videoCard;
            }) :
              <h1 style={{ textAlign: "center" }}>You have added no videos yet. </h1>
        }
      </div>
    </>
  )
}
