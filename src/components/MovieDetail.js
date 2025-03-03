import React, { useState, useEffect } from "react";

const MovieDetail = ({ movie }) => {
    const [details, setDetails] = useState(null);
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`);
                const data = await response.json();
                setDetails(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        fetchMovieDetails();
    }, [movie.imdbID, API_KEY]);

    return (
        <div>
            <h3>{movie.Title} ({movie.Year})</h3>
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} alt={movie.Title} />
            {details && (
                <div>
                    <p><strong>Actors:</strong> {details.Actors}</p>
                    <p><strong>Plot:</strong> {details.Plot}</p>
                </div>
            )}
        </div>
    );
};

export default MovieDetail;
