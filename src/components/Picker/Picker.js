import React, { Component } from 'react'
import GooglePicker from '../../services/GooglePicker/react-google-picker';
import DriveLogo from '../../static/images/drive.svg';

const SCOPE = ['https://www.googleapis.com/auth/drive.readonly',
               'https://www.googleapis.com/auth/drive.file'];


               
class Picker extends Component {

constructor(props) {
    super();
    this.state = {
      oauth_tok: "none",
      selected_folder: "none"
  };
}

onAuth(token) {
  this.setState({
    oauth_tok: token
  });
  console.log(token)
}

onSelection(folder) {
  if (folder.action == google.picker.Action.PICKED) {
    var fileId = folder.docs[0].id;
    this.setState({
      selected_folder: fileId
    });
  }
}

render() {
  return (
  <div>
    <GooglePicker clientId={CLIENT_ID}
                          children="drivebtn"
                          developerKey={DEVELOPER_KEY}
                          scope={SCOPE}
                          onChange={data => this.onSelection(data)}
                          onAuthFailed={data => console.log('on auth failed:', data)}
                          onAuthenticate={(token) => this.onAuth(token)}
                          multiselect={false}
                          navHidden={true}
                          authImmediate={false}
                          viewId={'FOLDERS'}
                          createPicker={ (google, oauthToken) => {
                              const googleViewId = google.picker.ViewId.FOLDERS;
                              const docsView = new google.picker.DocsView(googleViewId)
                                  .setIncludeFolders(true)
                                  .setMimeTypes('application/vnd.google-apps.folder')
                                  .setSelectFolderEnabled(true);

                              const picker = new window.google.picker.PickerBuilder()
                                  .addView(docsView)
                                  .setOAuthToken(oauthToken)
                                  .setDeveloperKey(DEVELOPER_KEY)
                                  .setCallback(data => this.onSelection(data));
                              picker.build().setVisible(true);
                          }}
      >
          <DriveLogo className="btnBlack-icon"/>
          Sync from Google Drive
      </GooglePicker>
      <hr/>
      <p>The oauth token is: {this.state.oauth_tok} </p>
      <p>You have selected the folder: {this.state.selected_folder.toString()} </p>
    </div>
  )}
}

export default Picker;
