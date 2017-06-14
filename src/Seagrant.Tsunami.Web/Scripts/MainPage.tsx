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
    }

    export class Controller {
        currentPlace: Place;
        currentVideo?: VideoDetails;
        timeoutHandle: number;
        timeoutDuration: number = 90000;
        shouldAutoplay: boolean = false;

        constructor(private pageVM: MainPage.PageVM, private rootDiv: HTMLDivElement) {
            this.currentPlace = this.pageVM.places[0];
            this.currentVideo = this.currentPlace.videos[0];

            if (pageVM.demoMode) {
                document.onload = this.resetTimer;
                document.onkeypress = this.resetTimer;
                document.onmousemove = this.resetTimer;
                document.onmousedown = this.resetTimer;
                document.ontouchstart = this.resetTimer;
                document.onclick = this.resetTimer;
                document.onscroll = this.resetTimer;
                this.timeoutHandle = setTimeout(this.resetPage, this.timeoutDuration)
            }
        }

        resetTimer = () => {
            clearTimeout(this.timeoutHandle);
            this.timeoutHandle = setTimeout(this.resetPage, this.timeoutDuration)
        }

        resetPage = () => {
            this.changePlace(this.pageVM.places[0]);
        }

        changePlace = (newPlace: Place) => {
            this.currentPlace = newPlace;
            this.currentVideo = newPlace.videos[0];
            this.shouldAutoplay = false;
            this.render();
        }

        changeVideo = (newVideo: VideoDetails) => {
            this.currentVideo = newVideo;
            this.shouldAutoplay = true;
            this.render();
        }

        createVideoPlaceholder = () => {
            return (<div className="VideoPlaceholder"> <img src="/images/video-placeholder.png" /> </div>);
        }

        render() {
            const videoProps: VideoFrame.VideoFrame = {
                ...this.currentVideo,
                shouldAutoplay: this.shouldAutoplay
            }
            ReactDOM.render(
                <div className="places-container">
                    <PlacesList.PlacesListComponent places={this.pageVM.places} onChangeHandler={this.changePlace} />
                    <div className="video-container">
                        <div className="description-list">
                            <h2>{this.currentPlace.name}</h2>
                            <div className="place-description">{this.currentPlace.description}</div>
                            <VideoList.VideoListComponent videos={this.currentPlace.videos} updateVideoSelection={this.changeVideo} />
                        </div>
                        <VideoFrame.VideoFrameComponent {...videoProps} />
                    </div>
                </div>,
                this.rootDiv
            );
        }
    }


}

export function initMainPage(pageVM: MainPage.PageVM) {
    const rootDiv = document.getElementById("page-container") as HTMLDivElement;
    const controller = new MainPage.Controller(pageVM, rootDiv);

    controller.render();
}

