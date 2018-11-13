let dataModule = (function () {

    const storage = {
        movies: []
    }

    class Movie {
        constructor(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;
        }
        getInfo() {
            return `${this.title}, ${this.length}, ${this.genre}`;
        }
    }

    const createMovie = (title, length, genre) => new Movie(title, length, genre);

    // function createMovie(title, length, genre) {
    //     return new Movie(title, length, genre);
    // }

    const addMovie = movie => { storage.movies.push(movie) };

    // function addMovie(movie) {
    //     storage.movies.push(movie);
    // }

    const calculateTotalLength = () => {
        let totalLength = 0;
        for (let i = 0; i < storage.movies.length; i++) {
            movieLength = storage.movies[i].length;
            totalLength += movieLength;
        }
        return totalLength;
    }

    // function calculateTotalLength() {
    //     let totalLength = 0;
    //     for (let i = 0; i < storage.movies.length; i++) {
    //         movieLength = storage.movies[i].length;
    //         totalLength += movieLength;
    //     }
    //     return totalLength;
    // }

    const getTotalLength = () => calculateTotalLength();

    // function getTotalLength() {
    //     return calculateTotalLength();
    // }

    return {
        createMovie,
        addMovie,
        getTotalLength
    }

})();

let uiModule = (function () {
    const $movieTitle = $(".movie-title");
    const $movieLength = $(".movie-length");
    const $selectGenre = $(".select-genre");
    const $movieListDiv = $(".movie-list");
    const $allMoviesLength = $(".allMoviesLength");

    const collectInput = () => ({
        title: $movieTitle.val(),
        length: parseInt($movieLength.val()),
        genre: $selectGenre.val()
    })

    // function collectInput() {
    //     const title = $movieTitle.val();
    //     const length = parseInt($movieLength.val());
    //     const genre = $selectGenre.val();

    //     return {
    //         title,
    //         length,
    //         genre
    //     }
    // }

    const displayMovie = movie => {
        const $p = $("<p>").text(movie.getInfo());
        $movieListDiv.append($p);
    }

    // function displayMovie(movie) {
    //     const $p = $("<p>").text(movie.getInfo());
    //     $movieListDiv.append($p);
    // }

    const displayTotalLength = totalLength => {
        const $p = $(".allMoviesLength p").text(`Total length: ${totalLength}`);
    }

    // function displayTotalLength(totalLength) {
    //     const $p = $("<p>").text(`Total length: ${totalLength}`);
    //     $allMoviesLength.append($p);
    // }

    const displayError = () => {
        var $p = $("<p>").text("Wrong input!");
        $movieListDiv.append($p);
    }

    // function displayError() {
    //     var $p = $("<p>").text("Wrong input!");
    //     $movieListDiv.append($p);
    // }

    const resetInput = () => {
        $movieTitle.val("");
        $movieLength.val("");
        $selectGenre.val("-");
    }

    // function resetInput() {
    //     $movieTitle.val("");
    //     $movieLength.val("");
    //     $selectGenre.val("-");
    // }

    return {
        collectInput,
        displayMovie,
        displayTotalLength,
        resetInput,
        displayError
    }
})();

let controller = (function (data, ui) {

    const init = () => { setupEventListeners() }

    // function init() {
    //     setupEventListeners();
    // }

    const setupEventListeners = () => {
        const $inputButton = $(".create-movie");
        $inputButton.on("click", onAddMovieHandler);
    }

    // function setupEventListeners() {
    //     const $inputButton = $(".create-movie");
    //     $inputButton.on("click", onAddMovieHandler);
    // }

    var onAddMovieHandler = () => {
        const movieInput = ui.collectInput();
        const { title, length, genre } = movieInput;
        if (movieInput.title == "" || movieInput.length == "") { // TODO NaN works
            ui.displayError();
        } else {
            let fullMovie = data.createMovie(title, length, genre);
            ui.displayMovie(fullMovie);
            data.addMovie(fullMovie);
            // ui.displayTotalLength(data.getTotalLength());
            ui.resetInput();

        }
        ui.displayTotalLength(data.getTotalLength());
    }

    // function onAddMovieHandler() {
    //     const movieInput = ui.collectInput();
    //     const { title, length, genre } = movieInput;
    //     if (movieInput.title == "" || movieInput.length == "") { // TODO NaN works
    //         ui.displayError();
    //     } else {
    //         let fullMovie = data.createMovie(title, length, genre);
    //         ui.displayMovie(fullMovie);
    //         data.addMovie(fullMovie);
    //         ui.displayTotalLength(data.getTotalLength());
    //         ui.resetInput();

    //     }
    // }

    return {
        init
    }


})(dataModule, uiModule);