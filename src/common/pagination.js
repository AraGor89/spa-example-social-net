import React from "react";

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const windowWidth = window.innerWidth;
  const checkwindowWidth = windowWidth < 600;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul
        className={`pagination ${checkwindowWidth ? "pagination-sm" : null} `}
      >
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
