import * as data from './data.js';
import * as ui from './ui.js';

const init = () => {
    data.fetchPost()
        .then((posts) => {
            onSuccess(posts);
        });


}

const onSuccess = (data) => {
    ui.displayPosts(data);
}

export {
    init
}