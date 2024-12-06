import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../components/MovieCard";
import { MovieProvider } from "../contexts/MovieContext";
import React from "react";

// Test suite for the MovieCard component
describe("MovieCard Component", () => {
  it("toggles favorite status when the favorite button is clicked", () => {
    const mockMovie = {
      id: 1,
      title: "Test Movie",
      poster_path: "/test.jpg",
      release_date: "2024-01-01",
    };

    // Render the MovieCard component inside the MovieProvider, i am basically mocking the context behaviour
    render(
      <MovieProvider>
        <MovieCard movie={mockMovie} />
      </MovieProvider>
    );

    // Find the favorite button
    const favoriteButton = screen.getByRole("button", { name: "♥" });

    // Initial state: class has to be active
    expect(favoriteButton).not.toHaveClass("active");

    // Click to add to favorites, after adding favourite the button needs to be active
    fireEvent.click(favoriteButton);
    expect(favoriteButton).toHaveClass("active");

    // Click to remove from favorites, remove it.
    fireEvent.click(favoriteButton);
    expect(favoriteButton).not.toHaveClass("active");
  });
});
