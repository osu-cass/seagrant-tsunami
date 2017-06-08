// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

namespace VideoFrame {

    export class VideoFrameComponent extends React.Component<MainPage.VideoDetails, {}> {
        constructor(props: MainPage.VideoDetails) {
            super(props);
        }

        render() {
            return (
                <div id="Video" className="Video">
                    <video src={this.props.fileName} controls autoPlay> Sorry, this browser doesn't support embedded videos.</video>
                    <div>{this.props.description}</div>
                </div>
            );
        }
    }
}