// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

namespace VideoPage {

    interface VideoProps {
        source: string;
        name: string;
    }

    export interface Place {
        name: string
    }

    export interface Props {

    }

    export interface State {

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

    //export class MainPageComponent extends React.Component<Props, State> {
    //    constructor(props: Props) {
    //        super(props);
    //    }

    //    render() {
    //        return (
    //            //<VideoFrameComponent />
    //            );
    //    }
    //}



    function initVideoPage() {
        const mainDiv = document.getElementById("main") as HTMLElement;
        const menuDiv = document.getElementById("menu") as HTMLElement;

       // ReactDOM.render();
    }

}


