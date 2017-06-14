import * as React from "react";
import * as MainPage from "./MainPage";


export interface VideoFrame extends MainPage.VideoDetails {
    shouldAutoplay: boolean;
}

export class VideoFrameComponent extends React.Component<VideoFrame, {}> {
    constructor(props: VideoFrame) {
        super(props);
    }

    render() {
        return (
            <div className="video-frame-container">
                <div className="video-spot">
                    <video src={this.props.fileName} controls autoPlay={this.props.shouldAutoplay}> Sorry, this browser doesn't support embedded videos.</video>
                </div>
                <div><span className="video-label">{this.props.name}: </span>{this.props.description}</div>
            </div>
        );
    }
}