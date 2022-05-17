import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text === "") {
      alert("Please enter something");
    } else {
      console.log(this.props.currentPage);
      this.props.searchMovies(this.state.text, this.props.currentPage);

      this.clearSearch();
    }
  }

  clearSearch() {
    this.setState({ text: "" });
  }

  render() {
    return (
      <div className="searchContainer">
        <div className="formWrapper">
          <form className="searchForm" onSubmit={this.handleSubmit}>
            <div className="formControl">
              <input
                type="text"
                className="input"
                placeholder="Type to search"
                value={this.state.text}
                onChange={this.handleChange}
              />
              <div className="formButtons">
                <button type="submit" className="btn btn-green">
                  Search
                </button>
                <button
                  className="btn btn-clear"
                  type="reset"
                  onClick={this.clearSearch}
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
