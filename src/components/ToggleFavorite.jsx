import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";

export default class ToggleFavorite extends Component {
  render() {
    return (
      <div>
        {this.props.isFavorite ? (
          <span
            className="favIcon"
            onClick={() => this.props.removeFromFavorites(this.props.movie)}
          >
            <FaHeartBroken />
          </span>
        ) : (
          <span
            className="favIcon"
            onClick={() => this.props.addToFavorites(this.props.movie)}
          >
            <FaHeart />
          </span>
        )}
      </div>
    );
  }
}
