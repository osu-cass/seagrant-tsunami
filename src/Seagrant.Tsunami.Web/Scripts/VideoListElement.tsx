import * as React from "react";
import * as MainPage from "./MainPage";

export interface VideoListElement {
    video: MainPage.VideoDetails;
    videoClickHandler(video: MainPage.VideoDetails): void;
}

export class VideoListElementComponent extends React.Component<VideoListElement, {}> {
    constructor(props: VideoListElement) {
        super(props);
    }

    clickHandler = () => {
        this.props.videoClickHandler(this.props.video);
    }

    render() {
        const video = this.props.video;
        return (
            <li value={this.props.video.name} key={this.props.video.name}>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
                <div className="video-name" onClick={this.clickHandler}>  {this.props.video.name}</div>
            </li>
        );
    }
}
