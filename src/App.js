import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const App = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

    const fetchMovies = async (searchTerm) => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
            const data = await response.json();
            if (data.Search) {
                setMovies(data.Search);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    return (
        <div>
            <h1>Movie Search App</h1>
            <SearchBar onSearch={fetchMovies} />
            <MovieList movies={movies} />
        </div>
    );
};

export default App;
