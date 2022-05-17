import React, { Component } from "react";
import ToggleFavorite from "./ToggleFavorite";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../api";
import ComingSoon from "../assets/comingSoon.jpg";

export default class MovieCard extends Component {
  render() {
    // if movie poster is missing show default image
    const imageUrl = this.props.movie.poster_path
      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${this.props.movie.poster_path}`
      : ComingSoon;
    return (
      <div className="movieCard">
        <img className="poster" src={imageUrl} alt={this.props.movie.title} />
        <ToggleFavorite
          movie={this.props.movie}
          isFavorite={this.props.isFavorite}
          addToFavorites={this.props.addToFavorites}
          removeFromFavorites={this.props.removeFromFavorites}
        />
        <div className="movieDetails">
          <h3 className="movieTitle">{this.props.movie.title}</h3>
          <p className="releaseDate">{this.props.movie.release_date}</p>
        </div>
      </div>
    );
  }
}
