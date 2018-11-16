import * as data from './data.js';
import * as ui from './ui.js';
const init = () => {

    const promises = [];

    for (let i = 0; i < 100; i++) {

        const promise = new Promise((resolve, reject) => {

            const random = Math.floor(Math.random() * 2000);
            setTimeout(function () {
                resolve(i);
            }, random);
        })
        promise.then((value) => {

            // console.log(value);
            // promises.push(value);

        });
        promises.push(promise);

    }

    Promise.all(promises)
        .then((result) => {
            console.log("gotovo");
        })



}
export { init };