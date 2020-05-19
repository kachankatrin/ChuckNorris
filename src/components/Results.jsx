import React from 'react';
import { ReactComponent as EmptyHeart } from '../svg/EmptyHeart.svg';
import { ReactComponent as Heart } from '../svg/heart.svg';
import { ReactComponent as Message } from '../svg/message.svg';
import { ReactComponent as Link } from '../svg/link.svg';

function Results({
  isFavoriteJoke,
  addJoke,
  removeJoke,
  joke,
  item,
  updatedHours,
  classLi
}) {

  const heart = !isFavoriteJoke
    ? <EmptyHeart />
    : <Heart />;
  const handleAction = !isFavoriteJoke
    ? addJoke
    : removeJoke;
  return (
    item['search.query']
      ? <li className={classLi + 'error'}>err: {item['search.query']}</li>
      : <li className={classLi} id={item.id}>

        <i className='add-to-fav' onClick={(e) => { e.stopPropagation(); handleAction(joke) }}>
          {heart}
        </i>
        <i className='message-icon'><Message /></i>
        {item.id
          ? <div className='link'>
            <span className='id'>ID: </span>
            <span><a href={item.url}>{item.id}</a><i> <Link /></i></span>
          </div>
          : null}
        <p>{item.value}</p>
        <div className='footer-list'>
          {updatedHours ? <span className='hours'>Last updated: {updatedHours} hours ago</span> : null}
          {item.categories && item.categories.length ? <p className='category'>{item.categories[0]}</p> : null}
        </div>
      </li>
  )
}

export default Results;