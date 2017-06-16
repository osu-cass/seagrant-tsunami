import * as React from "react";
import * as MainPage from "./MainPage";


export interface VideoFrame extends MainPage.VideoDetails {
    shouldAutoplay: boolean;
}

export class VideoFrameComponent extends React.Component<VideoFrame, {}> {

    videoRef: HTMLVideoElement

    componentDidUpdate() {
        if (this.props.shouldAutoplay) this.videoRef.play()
    }

    render() {
        return (
            <div className="video-frame-container">
                <div className="video-spot">
                    <video ref={v => this.videoRef = v} src={this.props.fileName} preload="auto" autoPlay> Sorry, this browser doesn't support embedded videos.</video>
                </div>
                <div><span className="video-label">{this.props.name}: </span>{this.props.description}</div>
            </div>
        );
    }
}