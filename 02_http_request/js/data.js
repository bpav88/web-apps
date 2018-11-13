const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

const fetchData = (onSuccess, onError) => {

    const request = new XMLHttpRequest();
    request.open('GET', API_ENDPOINT, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            // Success!
            const requestData = JSON.parse(request.responseText);

            onSuccess(requestData);

        } else {
            // We reached our target server, but it returned an error

            onError("Data error");
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
        console.log("data error");
    };

    request.send();

}
export {
    fetchData
}