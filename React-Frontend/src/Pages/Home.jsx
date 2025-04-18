import MovieCard from "../components/MovieCard";
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";
import { useState, useEffect } from "react";
import React from "react";

function Home() {

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim())return 
    setLoading(true)
    if(loading) return
    try{
      const searchResults = await searchMovies (searchQuery)
      setMovies(searchResults)
      setError(null)

    }
    catch(err){
      console.log(err)

    }
    finally{
      setLoading(false)

    }
  };



  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}

      {loading ? <div className="loading" > Loading...</div> : <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>}


    </div>
  );
}

export default Home;
