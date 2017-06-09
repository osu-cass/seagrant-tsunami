// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

namespace MainPage {

    export interface PageVM {
        places: Place[];
        demoMode: boolean;
    }

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

    interface State {
        currentPlace: Place;
        currentVideo: VideoDetails;
    }

    export class Controller {
        currentPlace: Place;
        currentVideo?: VideoDetails;
        timeoutHandle: number;
        timeoutDuration: number = 90000;

        constructor(private pageVM: MainPage.PageVM, private rootDiv: HTMLDivElement) {
            this.currentPlace = this.pageVM.places[0];
            this.currentVideo = undefined;

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
            this.currentPlace = this.pageVM.places[0];
            this.currentVideo = undefined;
            this.render();
        }

        changePlace = (newPlace: Place) => {
            this.currentPlace = newPlace;
            this.currentVideo = undefined;
            this.render();
        }
         
        changeVideo = (newVideo: VideoDetails) => {
            this.currentVideo = newVideo;
            this.render();
        }

        render() {
            const videoFrame = this.currentVideo ? <VideoFrame.VideoFrameComponent {...this.currentVideo} /> : <div className="VideoPlaceholder">Please select a video.</div>
            ReactDOM.render(
                <div className="places-container">
                    <PlacesList.PlacesListComponent places={this.pageVM.places} onChangeHandler={this.changePlace} />
                    <div className="video-container">
                        <div className="description-list">
                            <div className="place-description">{this.currentPlace.description}</div>
                                <VideoList.VideoListComponent videos={this.currentPlace.videos} updateVideoSelection={this.changeVideo} />
                            </div>
                        <VideoFrame.VideoFrameComponent {...this.currentVideo} />
                    </div>
                    <div>{this.currentPlace.description}</div>
                    <VideoList.VideoListComponent videos={this.currentPlace.videos} updateVideoSelection={this.changeVideo} />
                    {videoFrame}
                </div>,
                this.rootDiv
            );
        }
    }


}

function initMainPage(pageVM: MainPage.PageVM) {
    const rootDiv = document.getElementById("page-container") as HTMLDivElement;
    const controller = new MainPage.Controller(pageVM, rootDiv);

    controller.render();
}

