import React , { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination'
function Results (props) {
  // const [jokes, setJokes] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [jokesPerPage] = useState(10);
  const indexOfLastJoke = currentPage * jokesPerPage;
  const indexOfFirstJoke = indexOfLastJoke - jokesPerPage; 
  const currentJokes = props.results.slice(indexOfFirstJoke, indexOfLastJoke)
  const paginate = (page) => setcurrentPage(page);
  const currentDate = Date.now()
  console.log(currentDate)
  return (
      <div>
      <ul>
        {currentJokes.map(item => { 
          const upatedTimestamp = Date.parse(item.updated_at);
          console.log(upatedTimestamp)
          const updatedHours = Math.ceil((currentDate - upatedTimestamp) / 3600000)
          return (
            <li>
            <i className="far fa-heart"></i> 
              <p>{item.value}</p>
              <a href={item.url}>ID: {item.id}</a>
              <span>{item.categories && item.categories.length ? item.categories[0] : null}</span>
              <span>Last updated: {updatedHours} hours ago</span>
            </li>
          )
        }
          
          )}
      </ul>
      <Pagination jokesPerPage={jokesPerPage} totalJokes={props.results.length} paginate={paginate} currentPage={currentPage}/>
      </div>
    )
  
}

export default Results;