// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

namespace VideoListElement {
    export interface Props {
        video: MainPage.VideoDetails;
        videoClickHandler(video: MainPage.VideoDetails): void;
    }

    export class VideoListElementComponent extends React.Component<Props, {}> {
        constructor(props: Props) {
            super(props);
            //this.clickHandler = this.clickHandler.bind(this);
        }

        clickHandler = () => {
            this.props.videoClickHandler(this.props.video);
        }

        render() {
            const video = this.props.video;
            return (
                <li value={this.props.video.name} onClick={this.clickHandler}> {this.props.video.name}</li>
            );
        }
    }
}