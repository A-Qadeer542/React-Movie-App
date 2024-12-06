import { createContext, useState, useContext, useEffect } from "react";
import React from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) {
            try {
                const parsedFavs = JSON.parse(storedFavs);
                if (Array.isArray(parsedFavs)) {
                    setFavorites(parsedFavs);
                }
            } catch (error) {
                console.error("Failed to parse stored favorites:", error);
            }
        }
    }, []);

    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }, [favorites]);

    const addToFavorites = (movie) => {
        if (movie && movie.id && !isFavorite(movie.id)) {
            setFavorites((prev) => [...prev, movie]);
        }
    };

    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some((movie) => movie.id === movieId);
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
