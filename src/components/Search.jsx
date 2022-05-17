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
  
  // getting entered text from search input
  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  // handling search form submit
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text === "") {
      alert("Please enter something");
    } else {
      this.props.searchMovies(this.state.text, this.props.currentPage);

      this.clearSearch();
    }
  }

  // resetting search form
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
