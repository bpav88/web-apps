
import * as data from './data.js';
import * as ui from './ui.js';

const init = () => { setupEventListeners() }

const setupEventListeners = () => {
    const $inputButton = $(".create-movie");
    $inputButton.on("click", onAddMovieHandler);
}

const onAddMovieHandler = () => {
    const movieInput = ui.collectInput();
    const { title, length, genre } = movieInput;
    if (movieInput.title == "" || Number.isNaN(movieInput.length)) {
        ui.displayError();
        return;
    }

    let fullMovie = data.createMovie(title, length, genre);
    ui.displayMovie(fullMovie);
    data.addMovie(fullMovie);
    ui.displayTotalLength(data.getTotalLength());
    ui.resetInput();

    ui.displayTotalLength(data.getTotalLength());
}

export {
    init
}