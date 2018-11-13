
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

const displayMovie = movie => {
    const $p = $("<p>").text(movie.getInfo());
    $movieListDiv.append($p);
}

const displayTotalLength = totalLength => {
    const $p = $(".allMoviesLength p").text(`Total length: ${totalLength}`);
}

const displayError = () => {
    var $p = $("<p>").text("Wrong input!");
    $movieListDiv.append($p);
}

const resetInput = () => {
    $movieTitle.val("");
    $movieLength.val("");
    $selectGenre.val("-");
}

export {
    collectInput,
    displayMovie,
    displayTotalLength,
    resetInput,
    displayError
}