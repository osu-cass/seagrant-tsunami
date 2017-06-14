/// <reference types="google.analytics" />

import * as React from "react";
import * as VideoListElement from "./VideoListElement";
import * as MainPage from "./MainPage";

export interface VideoList {
    videos: MainPage.VideoDetails[];
    updateVideoSelection(video: MainPage.VideoDetails): void;
}

interface State {
    description: string;
}

export class VideoListComponent extends React.Component<VideoList, State> {

    constructor(props: VideoList) {
        super(props);
        this.state =
            {
                description: props.videos[0].description
            };
    }

    videoClickHandler = (video: MainPage.VideoDetails) => {
        ga("send", "event", "Videos", "SelectedVideo", video.name);
        this.setState({
            description: video.description
        });
        this.props.updateVideoSelection(video);
    }

    render() {
        const videos = this.props.videos.map((v: MainPage.VideoDetails) => {
            return <VideoListElement.VideoListElementComponent video={v} videoClickHandler={this.videoClickHandler} key={v.name} />
        });
        return (
            <div id="DescList" className="DescListClass">
                <h2>Evacuation Videos</h2>
                <ul className="VideoListClass">
                    {videos}
                </ul>
            </div>
        );
    }

}