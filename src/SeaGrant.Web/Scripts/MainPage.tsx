// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

namespace MainPage {

    export interface PageVM {
        places: Place[];
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
        currentVideo: VideoDetails;
    }

    interface State {
        currentPlace: Place;
        currentVideo: VideoDetails;
    }

    class NavigationComponent extends React.Component<{}, {}> {

    }

    export class Controller {
        currentPlace: Place;
        currentVideo: VideoDetails;
        constructor(private pageVM: MainPage.PageVM, private rootDiv: HTMLDivElement) {
            this.currentPlace = this.pageVM.places[0];
            this.currentVideo = this.pageVM.places[0].videos[0];
        }

        changePlace = (newPlace: Place) => {
            this.currentPlace = newPlace;
            this.render();
        }

        changeVideo = (newVideo: VideoDetails) => {
            this.currentVideo = newVideo;
            this.render();
        }

        render() {
            ReactDOM.render(
                <div>
                    <VideoList.VideoListComponent videos={this.currentPlace.videos} updateVideoSelection={this.changeVideo} />
                    <VideoFrame.VideoFrameComponent {...this.currentVideo} />
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



