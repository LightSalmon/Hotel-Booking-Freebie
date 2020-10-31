import React from "react";

const HotelOptions = () => {
  return (
    <section className="hotel-options">
      <div className="card__down-part card__down-part_type_preview">
        <div className="hotel-options__conditions">
          <div className="hotel-options__cover">
            <span className="card__down-part-subtitle card__down-part-subtitle_type_preview">price starts as</span>
            <div className="card__down-part-newprice">$ 8,500</div>
            <span className="card__down-part-subtitle card__down-part-subtitle_type_preview">per room / night</span>
          </div>
          <div className="hotel-options__room-info">
            <div className="room-info">
              <div className="picture picture__guest"/>
              <div className="card__down-part-subtitle">2 &times; Guests</div>
            </div>
            <div className="room-info">
              <div className="picture picture__home"/>
              <div className="card__down-part-subtitle">1 &times; Room</div>
            </div>
          </div>
        </div>
        <div className="hotel-options__call-center">
          <span className="hotel-options__contacts">Quick Booking</span>
          <span className="hotel-options__contacts">12100</span>
        </div>
        <button className="button-book button-book_type_preview">View Other Options</button>
      </div>
    </section>
  )
}

export default HotelOptions;