/* Create a JS file and define inside it an array of object literals with the following structure, populating it with at least 10 elements - we’ll consider this our “database”.

{
    id: <number>
    title: <string>
    year: <number>,
    runtime: <number>,
    genres: <array of strings>,
    director: <string>
    actors: <array of strings>
    plot: <string>
    posterUrl: <string>
  }

  Create another JS file and in it:

Define a function that returns all the movies from a given year;

Define a function that returns all the movies of a given genre;

Define a function that returns the duration of all the movies in the database.

Create another JS file that prints to the console the results of the functions defined above, making multiple calls with different years and genres as arguments.

Create an HTML page and put everything together so that the results can be seen in the browser’s console. */

const data = require("./task3.json");

const moviesDatabase = data.movies;

// class Movies  {
//   constructor(id, title, year, runtime, genres, director, actors, plot, posterUrl) {
//     this.id= id,
//     this.title= title,
//     this.year= year,
//     this.runtime= runtime,
//     this.genres= genres,
//     this.director= director,
//     this.actors= actors,
//     this.plot= plot,
//     this.posterUrl= posterUrl
//   }
// }

// I am not sure of the best way to use the json file on a browser. I will try fetching the data once I finished the activities.

const findMovieByYear = ((year, database) => {
  return database.filter(movie => movie.year === year.toString())
});

console.log(findMovieByYear("2002", moviesDatabase));
console.log(findMovieByYear("1992", moviesDatabase));



const findMovieByGenre = ((genre, database) => {
  return database.filter(movie => movie.genres.includes(genre))
});

console.log(findMovieByGenre("Comedy", moviesDatabase));
console.log(findMovieByGenre("Drama", moviesDatabase));


const getMoviesRuntime = (database) => { return database.map(movie => movie.runtime)};

console.log(getMoviesRuntime(moviesDatabase));