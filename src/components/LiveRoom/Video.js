import React, { Component } from 'react';

export default class Video extends Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidUpdate(props) {
        if (props && !!this.videoRef) {
            this.props.videoManager.addVideoElement(this.videoRef.current);
        }
    }

    componentDidMount() {
        if (this.props && !!this.videoRef) {
            this.props.videoManager.addVideoElement(this.videoRef.current);
        }
    }

    render() {
        return <video 
        style={{ display: 'flex',
        marginRight: "auto",
        marginLeft: "auto",}}
        controls ref={this.videoRef} />
    }

}