// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

namespace VideoPage {

    interface VideoProps {
        source: string;
        name: string;
    }

    export interface props {

    }

    export interface state {

    }


    function initVideoPage() {
        const mainDiv = document.getElementById("main") as HTMLElement;
        const menuDiv = document.getElementById("menu") as HTMLElement;

       // ReactDOM.render();
    }

}


