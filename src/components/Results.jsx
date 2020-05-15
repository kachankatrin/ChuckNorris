import React, {useEffect} from 'react';

function Results({ 
  isFavoriteJoke, 
  addJoke, 
  removeJoke, 
  joke, 
  item, 
  updatedHours, 
  favoriteJokes, 
  stateLocalExchange 
}) {
  useEffect(() => {
    localStorage.setItem('favArr', JSON.stringify(favoriteJokes))
  });
  const heart = !isFavoriteJoke
    ? <i className="far fa-heart"></i>
    : <i className="fas fa-heart"></i>;
  const handleAction = !isFavoriteJoke
    ? addJoke
    : removeJoke;
  const storage = localStorage.getItem('favItem' + (joke) || 0);
  console.log(storage)
  if (storage === null) {
    localStorage.setItem(('favItem' + (joke)), JSON.stringify(favoriteJokes))
  } else {
    localStorage.removeItem('favItem' + (joke))
  }
  const getArray= JSON.parse(localStorage.getItem('favArr') || '0');
  useEffect(() => {
    if (getArray !== 0) {
      stateLocalExchange(getArray)
    }
  }, [])
  return (
    <li id={item.id}>
      <div id={item.id}>
        <button onClick={(e) => {e.stopPropagation(); handleAction(joke)}}>
          {heart}
        </button>
      </div>
      <p>{item.value}</p>
      <div>
        <span>ID: </span>
        <a href={item.url}>{item.id}</a>
      </div>
      <span>{item.categories && item.categories.length ? item.categories[0] : null}</span>
      <span>Last updated: {updatedHours} hours ago</span>
    </li>
  )
}

export default Results;