import MovieCard from "../components/MovieCard";
function Home() {
  const movies = [
    { id: 1, title: "Parasite", release_date: "2019" },
    { id: 2, title: "The Shawshank Redemption", release_date: "1994" },
    { id: 3, title: "Bugonia", release_date: "2025" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movies..."
          className="search-input"
        />
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
