import * as data from './data.js';
import * as ui from './ui.js';
const init = () => {

    new Promise((resolve, reject) => {
        resolve(new Date());
    })
        .then((value) => {
            console.log(value);
        });


}
export { init };