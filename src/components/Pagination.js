import React from 'react';
import { dotedPagination } from '../utils';
function Pagination({ jokesPerPage, totalJokes, paginate, currentPage, getIndexOfLastJoke }) {
  const allPages = Math.ceil(totalJokes / jokesPerPage);

  function li(page, text) {
    return <li
      className={currentPage === page ? 'current' : ''}
      value={page}
      id={page}
      onClick={() => {paginate(page); getIndexOfLastJoke()}}
    >
      {text}
    </li>
  }
  const dotedList = dotedPagination(currentPage, allPages, li);
  const pageDotedNumbers = allPages > 1
    ? (
      <ul className='paging'>

        <li
          value='0'
          id="prev"
          onClick={() => {paginate(currentPage > 1
            ? (currentPage - 1)
            : currentPage); getIndexOfLastJoke()}
          }
        >
          Prev
        </li>

        {dotedList}

        <li
          value=''
          id="next"
          onClick={() => {paginate(currentPage < allPages
            ? (currentPage + 1)
            : currentPage); getIndexOfLastJoke()}
          }
        >
          Next
        </li>

      </ul>
    )
    : null
  return (
    allPages > 0 ? pageDotedNumbers : null
  )
}
export default Pagination;