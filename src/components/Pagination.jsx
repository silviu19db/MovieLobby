import React from "react";

export const Pagination = (props) => {
  const pageLinks = [];

  // Showing navigation buttons for only the first 5 pages of results
  for (let page = 1; page <= props.pages - (props.pages - 5); page++) {
    // set active page link

    let active = props.currentPage === page ? "active" : "";

    // generate page links
    pageLinks.push(
      <li
        className={`${active}`}
        key={page}
        onClick={() => props.loadMoreResults(page)}
      >
        <a href="#">{page}</a>
      </li>
    );
  }

  return (
    <div className="paginationWrapper">
      <ul className="pagination">
        {/* show previous page */}
        {props.currentPage > 1 && (
          <li onClick={() => props.loadMoreResults(props.currentPage - 1)}>
            <a href="#">Prev</a>
          </li>
        )}

        {/* display page links */}
        {pageLinks}

        {/* show next page */}
        {props.currentPage < props.pages + 1 && (
          <li onClick={() => props.loadMoreResults(props.currentPage + 1)}>
            <a href="#">Next</a>
          </li>
        )}
      </ul>
    </div>
  );
};
