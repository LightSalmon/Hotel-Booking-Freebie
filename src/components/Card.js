import React from 'react';

function Card(props){
  const {image, name, adress, guestNumber, roomNumber, oldPrice, newPrice} = props;
  return(
    <div className="card">
      <img src={image} alt='text' className="card__up-part"/>
      <div className="card__down-part">
        <div className="card__down-part-title">
          {name}
        </div>
        <div className="card__down-part-container">
          <div className="room-info">
            <div className="picture picture__map"/>
            <div className="card__down-part-subtitle">
              {adress}
            </div>
          </div>
          <div className="room-info">
            <div className="picture picture__guest"/>
            <div className="card__down-part-subtitle">
              {guestNumber}
            </div>
          </div>
          <div className="room-info">
            <div className="picture picture__home"/>
            <div className="card__down-part-subtitle">
              {roomNumber}
            </div>
          </div>
        </div>
        <div className="card__down-part-oldprice">$ {oldPrice}</div>
        <div className="card__down-part-newprice">$ {newPrice}</div>
        <button className="button-book">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default Card;