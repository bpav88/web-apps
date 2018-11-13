const API_GEO = './js/geoip.xml';

function getCity() {
    const request = new XMLHttpRequest();
    request.open('GET', API_GEO);

    request.onload = function () {

        const xmlData = request.responseXML;
        const city = xmlData.querySelector('city').textContent;
        console.log(city);
    };

    request.onerror = function () {
        console.log("Data error");
    };

    request.send();
}
getCity();


