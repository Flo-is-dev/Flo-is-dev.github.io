const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

let search = "";
let movies = [];

const fetchMovies = async () => {
  movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=9bc689b07d438c6cc1dd5b95e347e142`
  ).then((res) => res.json());
  console.log(movies);
};

// fetchMovies();

const moviesDisplay = async () => {
  await fetchMovies();

  movies.results.length = 12;
  console.log(movies);

  result.innerHTML = movies.results
    .map(
      (movie) =>
        `
    <li>
      <h2>${movie.original_title}</h2>
      <div class="card-content">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
        <div class="infos">
          <p>${movie.overview}</p>
          <p>Popularité : ${movie.popularity} ⭐</p>
        </div>
      </div>
    </li>
    `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search = searchInput.value;
  moviesDisplay();
  form.reset();
});
