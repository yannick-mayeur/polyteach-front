import React from 'react'
import Picker from '../Picker/Picker'
import UploadLogo from '../../static/images/upload.svg';
import { VideoCard }from './VideoCard';

export function Videos() {

      return (
         <>
        <div className="container">
            <h1>Manage your videos</h1>

                <div className="row mt-5 buttonsrow">
                        <div className="col-md-6">
                        <Picker/>
                        </div>
                        <div className="col-md-6">
                        <button className="btnBlack" onClick={()=>{document.getElementById("uploadvideo").click();}}>
                        <input name="video" type="file" id="uploadvideo" accept="video/*" />
                        <UploadLogo className="btnBlack-icon" />
                        Upload
                        </button>  
                        </div>
                </div>

                <VideoCard/>
                <VideoCard/>

		</div>
         </>
      )
}