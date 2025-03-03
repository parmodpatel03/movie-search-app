import React from "react";
import MovieDetail from "./MovieDetail";

const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.length > 0 ? (
                <div>
                    {movies.map((movie) => (
                        <MovieDetail key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            ) : (
                <p>No movies found. Try searching for something else!</p>
            )}
        </div>
    );
};

export default MovieList;
