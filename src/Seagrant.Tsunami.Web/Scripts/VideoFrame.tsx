﻿// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

namespace VideoFrame {

    export interface Props extends MainPage.VideoDetails {
        shouldAutoplay: boolean;
    }

    export class VideoFrameComponent extends React.Component<Props, {}> {
        constructor(props: Props) {
            super(props);
        }

        render() {
            return (
                <div id="Video" className="Video">
                    <div className="video-spot">
                        <video src={this.props.fileName} controls autoPlay={this.props.shouldAutoplay}> Sorry, this browser doesn't support embedded videos.</video>
                    </div>
                    <div>{this.props.description}</div>
                </div>
            );
        }
    }
}