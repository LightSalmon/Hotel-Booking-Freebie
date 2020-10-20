import React from 'react'
import star from '../images/comments/star.png'

function Comment (props) {
  const {avatar, name, date, text} = props;

  return(
    <div className = "comments__info">
      <div className = "comments__user-info">
        <img src = {avatar} alt = "user's avatar" className = "comments__info-avatar" />
        <h3 className = "comments__info-name">{name}</h3>
        <span className = "comments__info-date">{date}</span>
        <img src = {star} alt = "number of stars" className = "comments__info-rating" />
      </div>
      <div className = "comments__info-box">
        <span className = "comments__info-description">{text}</span>
      </div>
    </div>
  )
};

export default Comment;