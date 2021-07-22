import React, { useContext } from 'react';
import GamesContext from '../../context/gamesContext';

function Pagination() {
  const { nextPage, setPage, previousPage } = useContext(GamesContext);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="page-link"
            type="button"
            onClick={() => setPage(1)}
          >
            First Page
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            type="button"
            onClick={() => previousPage()}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            type="button"
            onClick={() => nextPage()}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
