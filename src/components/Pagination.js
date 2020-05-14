import React from 'react';

function Pagination({ jokesPerPage, totalJokes, paginate, currentPage }) {
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(totalJokes / jokesPerPage); i++) {
  //   pageNumbers.push(i)
  // }
  const allPages = Math.ceil(totalJokes / jokesPerPage);
  function dotedPagination(current, last) {
    let M = [li(1, "1")]
    if (last <= 9) {
      for (let i = 2; i <= last; i++) {
        M.push(li(i, `${i}`))
      }
    }
    if (last > 9 && current < 6) {
      for (let i = 2; i <= 7; i++) {
        M.push(li(i, `${i}`))
      }
      M.push(li(current + 3, '...'), li(last, `${last}`))
    }
    if (last > 9 && current >= 6 && last - current > 3) {
      M.push(li(current - 3, '...'));
      for (let i = current - 2; i <= current + 2; i++) {
        M.push(li(i, `${i}`))
      }
      M.push(li(current + 3, '...'), li(last, `${last}`))
    }
    if (last > 9 && current >= 6 && last - current <= 3) {
      M.push(li(current - 3, '...'));
      for (let i = last - 6; i <= last; i++) {
        M.push(li(i, `${i}`))
      }
    }
    return M.map(item => item)
  }
  function li(page, text) {
    return <li 
      className={currentPage === page ? 'current' : ''} 
      value={page} 
      id={page} 
      key={page}
      onClick={() => paginate(page)}
    >
      {text}
    </li>
  }
  const dotedList = dotedPagination(currentPage, allPages);
  const pageDotedNumbers = allPages > 1 
    ? <ul>
        <li
          value='0' 
          id="prev" 
          onClick={() => paginate(currentPage > 1 
            ? (currentPage - 1)
            : currentPage)
          }
        >
          Prev
        </li>
        {dotedList}
        <li
          value='' 
          id="next" 
          onClick={() => paginate(currentPage < allPages 
            ? (currentPage + 1)
            : currentPage)
          }
        >
          Next
        </li>
      </ul>
    : null
  return (
    pageDotedNumbers
  )
}
export default Pagination;

// {pageNumbers.length > 1
//   ? pageNumbers.map(page => (
//       <li key={page}>
//         <a onClick={() => paginate(page)} href='#'>
//           {page}
//         </a>
//       </li>
//   ))
  // : null}