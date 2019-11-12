import React from 'react'
import Picker from '../Picker/Picker'
import UploadLogo from '../../static/images/upload.svg';
import CloseIcon from '../../static/images/close.svg';

export function Videos() {

      return (
         <>
         <div className="container">
            <h1>Add new videos to this course</h1>
                <div className="row mt-5 text-center mx-auto">
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

                <div class="card shadow2">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="cardimg" src="http://www.bagherra.eu/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png" />
                        </div>
                        <div className="col-md-8">
                        <h1 className="card-head">Video Title</h1>
                        <h4 className="card-duration">MM:SS</h4>
                        </div>
                        <div className="col-md-1">
                        <button className="modal__close" onClick={()=>{alert("remove this video")}}><CloseIcon className="modal__button--close" /></button>
                        </div>
                    </div>
                </div>

                <div class="card shadow2">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="cardimg" src="http://www.bagherra.eu/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png" />
                        </div>
                        <div className="col-md-8">
                        <h1 className="card-head">Video Title</h1>
                        <h4 className="card-duration">MM:SS</h4>
                        </div>
                        <div className="col-md-1">
                        <button className="modal__close" onClick={()=>{alert("remove this video")}}><CloseIcon className="modal__button--close" /></button>
                        </div>
                    </div>
                </div>

		</div>
         </>
      )
}