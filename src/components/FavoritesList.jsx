import React, { Component } from "react";
import MovieCard from "./MovieCard";

export default class FavoritesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: JSON.parse(localStorage.getItem("favorites")),
    };
  }

  // add movie to favorites
  addToFavorites = (movie) => {
    if (!this.state.favorites[movie.id]) {
      const favorites = { ...this.state.favorites, [movie.id]: movie };
      this.setState({ favorites });
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  // remove movie from favorites
  removeFromFavorites = (movie) => {
    const favorites = { ...this.state.favorites, [movie.id]: undefined };
    this.setState({ favorites });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  render() {
    return (
      <div>
        <div className="movieList">
          {/* render movie list */}
          {Object.values(this.state.favorites)
            .filter((m) => m)
            .map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.id}
                isFavorite={true}
                removeFromFavorites={this.removeFromFavorites}
              />
            ))}
        </div>
      </div>
    );
  }
}
