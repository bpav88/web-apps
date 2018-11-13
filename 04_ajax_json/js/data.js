const API_DOG = 'https://dog.ceo/api/breeds/image/random';


const $img = document.querySelector("img");
const $button = document.querySelector("button");
const $body = document.querySelector("body");

$img.addEventListener('click', getPhoto);

function getPhoto() {
    const request = new XMLHttpRequest();
    request.open('GET', API_DOG);

    request.onload = function () {

        const randomPhoto = JSON.parse(request.responseText);
        console.log(randomPhoto);

        $img.setAttribute("src", randomPhoto.message);
    };

    request.onerror = function () {
        console.log("Data error");
    };

    request.send();
}



