// https://dribbble.com/shots/5769571-Movie-Database-Dashboard

// Task 3

// Create a page that lists movies coming from the following object

// Create a separate file containing the list of movies

// Find out how to work with JSON files

// Your page should display a list of movie cards. Here is some inspiration:

// Movie Database Dashboard

// Movie list

// Your movie card should contain at least the movie poster, the title, the year, and the genres

// You can play around with the styles and create something using your creativity

// You should include at least one animation when hovering the movie card
let moviesData;

async function fetchData() {
	try {
		const response = await fetch('./movies-list.json');
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		moviesData = await response.json();
		return moviesData;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

async function renderMoviePosters(movies) {
	const movieListContainer = document.createElement('div');
	movieListContainer.className = 'movie-list-container';

	movies.forEach(movie => {
		const movieCard = document.createElement('div');
		movieCard.className = 'movie-card';

		const moviePoster = document.createElement('img');
		moviePoster.src = movie.posterUrl;
		moviePoster.alt = movie.title;
		const movieTitle = document.createElement('h2');
		movieTitle.textContent = movie.title;

		const movieYear = document.createElement('p');
		movieYear.textContent = `Year: ${movie.year}`;

		const movieGenres = document.createElement('p');
		movieGenres.textContent = `Genres: ${movie.genres.join(', ')}`;

		movieCard.appendChild(moviePoster);
		movieCard.appendChild(movieTitle);
		movieCard.appendChild(movieYear);
		movieCard.appendChild(movieGenres);

		movieListContainer.appendChild(movieCard);
	});
	document.body.appendChild(movieListContainer);
}

async function main() {
	await fetchData();
	await renderMoviePosters(moviesData.movies);
}

main();
