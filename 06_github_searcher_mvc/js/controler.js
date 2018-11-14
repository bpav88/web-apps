import * as ui from "./ui.js";
import * as data from "./data.js";

const init = () => { setupListener() }

const setupListener = () => {
    $("#button").on('click', searchGit);
}

const searchGit = () => {
    const input = ui.collectInput();
    const api = "https://api.github.com/search/users?q=";
    const link = api + input;
    data.storageData(link, onSuccess)
}

const onSuccess = () => {
    ui.displayImages(data.storage.users);
}
export {
    inits
}