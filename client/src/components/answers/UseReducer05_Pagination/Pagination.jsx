import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ state }) {
  return (
    <ul className="pagination mt-5">
      {state.pages.length ? state.pages.map((page) =>
        <li key={page} className="page-item">
          <Link className="page-link" to={`/useReducer05/cities/${page}?limit=${state.limit}`}>{page}</Link>
        </li>)
        :
        <li>No data</li>}
    </ul>
  );
}

export default Pagination;