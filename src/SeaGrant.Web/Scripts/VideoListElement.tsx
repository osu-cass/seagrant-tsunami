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
        }

        clickHandler = (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            this.props.videoClickHandler(this.props.video);
        }

        render() {
            return(
                <li value={this.props.video.name} onClick={(e) => this.clickHandler(e)}> {this.props.video.name}</li>
            );
        }
    }
}