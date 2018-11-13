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

export default Movie;