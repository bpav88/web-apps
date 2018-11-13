import * as data from "./data.js";
import * as ui from "./ui.js";

const init = () => {
    console.log("app is ready");
    data.fetchData(handleSuccess, handleError);
}

function handleSuccess(postList) {
    console.log(postList);
    // ui.displayPosts(postList);
}

function handleError() {

}
export {
    init
}