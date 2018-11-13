import Movie from './models/Movie.js';

const storage = {
    movies: []
}

const createMovie = (title, length, genre) => new Movie(title, length, genre);


const addMovie = movie => { storage.movies.push(movie) };


const calculateTotalLength = () => {
    let totalLength = 0;
    for (let i = 0; i < storage.movies.length; i++) {
        const movieLength = storage.movies[i].length;
        totalLength += movieLength;
    }
    return totalLength;
}

const getTotalLength = () => calculateTotalLength();


export {
    createMovie,
    addMovie,
    getTotalLength
}