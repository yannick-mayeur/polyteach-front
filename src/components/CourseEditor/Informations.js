import React, { Component } from 'react'
import {uploadImageToGCP, askForSignedImageURL} from '../../services/Uploader/ImageApi';
import UploadLogo from '../../static/images/upload.svg';
export default class  Informations extends Component {

   constructor(props) {
      super(props);
      this.state = {
              pictureURL: 'http://www.bagherra.eu/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png',
              pictureName: '',
              pictureInput: '',
              message: '',
              image: '',
              picture: '',
              displaySpinner: "none"
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
}

   // To handle changes on the input file
   handleChange = (event) => {
   this.setState({
            pictureInput: event.target.files.item(0),
            pictureName: event.target.files.item(0).name,
            message: ''
      });
   };

   // Action when we click on the "upload" button
   handleClick = (event) => {
      event.preventDefault();
      if (this.state.pictureInput !== '') {
              // We send the image to the server
              this.uploadDocumentRequest({ picture: this.state.pictureInput });

              // We reset the fields
              this.setState({ pictureName: '', displaySpinner: "block" });
      }
      else {
              this.setState({ message: 'You need to choose a picture !' })
      }
   };

   uploadDocumentRequest = async ({ picture }) => {
      const result = await askForSignedImageURL(picture.name);
      const see = await uploadImageToGCP(picture, result.data.signedURL);
      if (see) {
              // Good
              this.setState({
                  pictureURL: result.data.pictureURL,
                  message: "Image uploaded with success !",
                  displaySpinner: "none",
                  pictureInput: '',
                  picture: ''
              });
              //this.props.saveVideos(newVideos)
      } else {
              // Bad
              this.setState({ displaySpinner: "none", message: "Failed to upload the picture !" });
      }
};

render(){
   return (
      <>
      <div className="container">
         <div className="row mt-5">
         <div className="text-center mx-auto">
            <form>
            <div className="row mt-4">
         <label>
            <h1 className="text-center mb-2">Name</h1>  
            <input onChange={(event) => {this.props.saveName(event.target.value)}} className="forminput" type="text" name="name" placeholder="Name..." defaultValue={this.props.name()} />
         </label>
         </div>
         <div className="row mt-4">
         <label className="mt-5">
             <h1 className="text-center mb-2">Description</h1>  
            <textarea onChange={(event) => {this.props.saveDescription(event.target.value)}} className="formfield" type="text" name="name" placeholder="Description..." maxLength="500" defaultValue={this.props.description()}/>
         </label>
         </div>

         <div className="row mt-5">
         <div className="file-drop-area mx-auto" id="file-drop-area">
            <span className="fake-btn">Choose thumbnail</span>
            <h4 style={{ textAlign: "center"}}>{this.state.message}</h4>
            <div style={{ marginRight: "auto", textAlign: "center", marginLeft: "auto", display: this.state.displaySpinner }} className="mb-3" role="status">
                     <div className="loader-1 mb-2"><span></span></div>
                     <span style={{ textAlign: "center" }} className="sr-only">Uploading...</span>
            </div>
            <span className="file-msg">{this.state.pictureName ? this.state.pictureName : "Currently using default thumbnail"}</span>
            <input className="file-input" id="file-input" type="file" value={this.state.image} onChange={this.handleChange} accept="image/*"/>
         </div>
         <button className="saveBtn ml-2 mt-2" id="inputVideoLabel" onClick={this.handleClick}>
            <UploadLogo className="btnBlack-icon" />
            Upload
            </button>
         </div>

         <div className="row mt-3">
            <img className="thumbimg" src={this.state.pictureURL} />
         </div>
         </form>
         </div>
         </div>
      </div>
      </>
   )
}
     
}