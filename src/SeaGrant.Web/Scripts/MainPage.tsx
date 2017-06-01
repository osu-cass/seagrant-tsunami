// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

namespace MainPage {

    export interface PageVM {
        places: Place[];
        currentPlace: Place;
    }

    export interface VideoDetails {
        source: string;
        name: string;
        description: string;
    }

    export interface Place {
        name: string;
        description: string;
        videos: VideoDetails[];
        currentVideo: VideoDetails;
    }

    class NavigationComponent extends React.Component<{}, {}> {

    }

    export class Controller {
        currentPlace: Place;
        currentVideo: VideoDetails;
        constructor(private pageVM: MainPage.PageVM, private rootDiv: HTMLDivElement) {
            this.currentPlace = this.pageVM.places[0];
            this.currentVideo = this.pageVM.currentPlace.videos[0];
        }

        changePlace = (newPlace: Place) => {
            this.pageVM.currentPlace = newPlace;
        }

        changeVideo = (newVideo: VideoDetails) => {
            this.pageVM.currentPlace.currentVideo = newVideo;
        }

        render() {
            ReactDOM.render(
                <VideoFrame.VideoFrameComponent
                    {...this.currentVideo}
                />,
                this.rootDiv
            );
        }
    }


}

function initVideoPage(pageVM: MainPage.PageVM) {
    const rootDiv = document.getElementById("page-container") as HTMLDivElement;
    const controller = new MainPage.Controller(pageVM, rootDiv);

    controller.render();
}



