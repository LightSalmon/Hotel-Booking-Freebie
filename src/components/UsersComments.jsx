import React, {useState} from 'react';
import Comment from './Comment';
import {initialComments} from '../utils/initialComments'

function UsersComments () {
  const [numb, setNumb] = useState(0);

  function nextComment(){
    numb === (initialComments.length-1) ? setNumb(0) : setNumb (numb + 1);
  }

  function previousComment(){
    numb === 0 ? setNumb(initialComments.length-1) : setNumb (numb - 1);
  }

  const commentInfo = initialComments.find(item => item.id == numb)

  return(
    <section className = "comments">
      <h2 className = "comments__title">
        What people thinks about us
      </h2>
      <div className = "comments__change-box">
        <button className = "comments__button comments__button_previous" onClick = {previousComment} />
        <Comment {...commentInfo} />
        <button className = "comments__button comments__button_next" onClick = {nextComment} />
      </div>
    </section>
  )
};

export default UsersComments;