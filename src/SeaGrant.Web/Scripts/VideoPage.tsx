// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

namespace VideoPage {

    export interface PageVM {
        places: Place[];
    }

    interface VideoProps {
        source: string;
        name: string;
        description: string;
    }

    export interface Place {
        name: string;
        description: string;
        videos: VideoProps[];
    }

    class VideoFrameComponent extends React.Component<VideoProps, {}> {
        constructor(props: VideoProps) {
            super(props);
        }

        render() {
            return (
                <video src="foo.mp4" />
            );
        }
    }

    class VideoListComponent extends React.Component<{}, {}> {

    }

    class NavigationComponent extends React.Component<{}, {}> {

    }

    export class Controller {

        constructor(private pageVM: VideoPage.PageVM) {
        }



        render() {

        }
    }


}

function initVideoPage(pageVM: VideoPage.PageVM) {
    const controller = new VideoPage.Controller(pageVM);

    controller.render();
}



