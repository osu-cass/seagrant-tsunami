import * as React from "react";
import * as ReactDOM from "react-dom";

import * as VideoFrame from "./VideoFrame";
import * as VideoList from "./VideoList";
import * as PlacesList from "./PlacesList";

export interface VideoDetails {
    fileName: string;
    name: string;
    description: string;
}

export interface Place {
    name: string;
    description: string;
    videos: VideoDetails[];
}

namespace MainPage {

    export interface PageVM {
        places: Place[];
        demoMode: boolean;
    }

    interface State {
        currentPlace: Place;
        currentVideo: VideoDetails;
        shouldAutoplay: boolean;
    }

    export class Container extends React.Component<PageVM, State> {
        timeoutHandle: number;
        timeoutDuration: number = 90000;

        state = {
            currentPlace: this.props.places[0],
            currentVideo: this.props.places[0].videos[0],
            shouldAutoplay: false
        }

        resetTimer = () => {
            clearTimeout(this.timeoutHandle);
            this.timeoutHandle = setTimeout(this.resetPage, this.timeoutDuration);
        }

        resetPage = () => {
            this.setState({
                currentPlace: this.props.places[0],
                currentVideo: this.props.places[0].videos[0],
                shouldAutoplay: false,
            });
            this.timeoutHandle = setTimeout(this.resetPage, this.timeoutDuration);
            this.forceUpdate();
        }

        changePlace = (currentPlace: Place) => {
            this.setState({
                currentPlace,
                currentVideo: currentPlace.videos[0],
                shouldAutoplay: false,
            });
        }

        changeVideo = (currentVideo: VideoDetails) => {
            this.setState({
                currentVideo,
                shouldAutoplay: true
            });
        }

        componentDidMount() {
            if (this.props.demoMode === true) {
                document.addEventListener('onload', this.resetTimer);
                document.addEventListener('onkeypress', this.resetTimer);
                document.addEventListener('onmousemove', this.resetTimer);
                document.addEventListener('onmousedown', this.resetTimer);
                document.addEventListener('ontouchstart', this.resetTimer);
                document.addEventListener('onclick', this.resetTimer);
                document.addEventListener('onscroll', this.resetTimer);
                this.timeoutHandle = setTimeout(this.resetPage, this.timeoutDuration)
            }
        }

        render() {
            return (
                <div className="places-container">
                    <div className="video-container">
                        <div className="description-list">
                            <h1>{this.state.currentPlace.name}</h1>
                            <div className="place-description">{this.state.currentPlace.description}</div>
                            <VideoList.VideoListComponent videos={this.state.currentPlace.videos} updateVideoSelection={this.changeVideo} />
                        </div>
                        <VideoFrame.VideoFrameComponent {...this.state.currentVideo} shouldAutoplay={this.state.shouldAutoplay} />
                    </div>
                </div>
            )
        }
    }
}

export function initMainPage(pageVM: MainPage.PageVM) {
    const rootDiv = document.getElementById("page-container") as HTMLDivElement;
    ReactDOM.render(<MainPage.Container {...pageVM} />, rootDiv);
}

