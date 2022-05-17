import React, { Component } from "react";
import FavoritesList from "../components/FavoritesList";
import { StyledButton } from "../components/StyledButton";
import Header from "../components/Header";
import { StyledFooter, StyledTMDBLogo } from "../components/StyledFooter";
import TMDBLogo from "../assets/tmdb_logo.svg";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Favorite Movies",
    };
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="buttonWrapper">
          <StyledButton primary="true" to="/">
            Popular Movies
          </StyledButton>
        </div>
        <FavoritesList />
        <StyledFooter>
          <div className="footer" align="right">
            <a href="https://www.themoviedb.org/">
              <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
            </a>
          </div>
        </StyledFooter>
      </div>
    );
  }
}
