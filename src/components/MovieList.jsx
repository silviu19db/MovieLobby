import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { Pagination } from "./Pagination";

export default class MovieList extends Component {
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
    const pagesNumber = Math.floor(this.props.totalResults / 20);
    return (
      <div>
        <div className="movieList">
          {/* render movie list */}
          {this.props.movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              isFavorite={this.state.favorites[movie.id]}
              addToFavorites={this.addToFavorites}
              removeFromFavorites={this.removeFromFavorites}
            />
          ))}
        </div>
        {this.props.totalResults > 20 && (
          <Pagination
            pages={pagesNumber}
            searchParam={this.props.searchParam}
            loadMoreResults={this.props.loadMoreResults}
            currentPage={this.props.currentPage}
          />
        )}
      </div>
    );
  }
}
