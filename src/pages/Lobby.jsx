import React, { Component } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import MovieList from "../components/MovieList";
import { API_URL, API_KEY, SEARCH_BASE_URL } from "../api";
import { StyledButton } from "../components/StyledButton";
import { StyledFooter, StyledTMDBLogo } from "../components/StyledFooter";
import TMDBLogo from "../assets/tmdb_logo.svg";

export default class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: null,
      title: "Movie Lobby",
      searchParam: "",
      currentPage: 1,
      totalResults: 0,
      favorites: [],
    };
    this.searchMovies = this.searchMovies.bind(this);
    this.loadMoreResults = this.loadMoreResults.bind(this);
  }

  // fetch popular movies
  async componentDidMount() {
    const url = `${API_URL}movie/popular?api_key=${API_KEY}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    const data = await response.json();
    this.setState({
      movies: data.results,
      loading: false,
      totalResults: data.total_results,
    });
  }

  // fetch movies based on search keyword
  searchMovies = async (param, pageNumber) => {
    const searchUrl = param
      ? SEARCH_BASE_URL + param + `&page=${pageNumber}`
      : this.url;
    this.setState({ searchParam: param });
    const response = await fetch(searchUrl, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    const searchData = await response.json();
    this.setState({
      movies: searchData.results,
      loading: false,
      currentPage: pageNumber,
    });
  };

  // load more movies
  loadMoreResults = async (pageNumber) => {
    const loadMoreUrl = `${API_URL}movie/popular?api_key=${API_KEY}&page=${pageNumber}`;
    const response = await fetch(loadMoreUrl, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    const loadMoreData = await response.json();
    this.setState({
      movies: loadMoreData.results,
      loading: false,
      currentPage: pageNumber,
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="top-left50">
          <Spinner />
        </div>
      );
    }

    if (!this.state.movies) {
      return (
        <div className="top-left50">
          <p>didn't get any movies.</p>
        </div>
      );
    }

    return (
      <div>
        <Header title={this.state.title} />
        <Search
          movies={this.state.movies}
          currentPage={this.state.currentPage}
          searchMovies={this.searchMovies}
        />
        <div className="buttonWrapper">
          <StyledButton primary="true" to="/favorites">
            Favorite Movies
          </StyledButton>
        </div>
        <MovieList
          movies={this.state.movies}
          searchParam={this.state.searchParam}
          totalResults={this.state.totalResults}
          loadMoreResults={this.loadMoreResults}
          currentPage={this.state.currentPage}
        />
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
