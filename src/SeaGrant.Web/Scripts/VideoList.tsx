﻿// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


namespace VideoList {
    export interface Props {
        videos: MainPage.VideoDetails[];
        updateVideoSelection(video: MainPage.VideoDetails): void;
    }

    interface State {
        description: string;
    }

    export class VideoListComponent extends React.Component<Props, State> {

        constructor(props: Props) {
            super(props);
            this.state =
                {
                    description: props.videos[0].description
                };
        }

        videoClickHandler = (video: MainPage.VideoDetails) => {
            this.setState({
                description: video.description
            });
            this.props.updateVideoSelection(video);
        }

        render() {
            const videos = this.props.videos.map((v: MainPage.VideoDetails) => {
                return <VideoListElement.VideoListElementComponent video={v} videoClickHandler={this.videoClickHandler} />
            });
            return <div id="DescList" className="DescListClass">
                <h2>{this.state.description}</h2>
                <ul className="VideoListClass">
                    {videos}
                </ul>
                </div>;
        }

    }
}