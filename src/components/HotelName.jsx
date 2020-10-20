import React from "react";
import star from "../images/hotel-star.svg";

const HotelName = () => {
    return(
        <header className="hotel-name">
            <div className="centering-cover">
                <div className="hotel-name__main-column">
                    <ul className="hotel-name__rating">
                        <li className="hotel-name__item">
                            <img className="hotel-name__image" src={star} alt="Hotel rating star"/>
                        </li>
                        <li className="hotel-name__item">
                            <img className="hotel-name__image" src={star} alt="Hotel rating star"/>
                        </li>
                        <li className="hotel-name__item">
                            <img className="hotel-name__image" src={star} alt="Hotel rating star"/>
                        </li>
                        <li className="hotel-name__item">
                            <img className="hotel-name__image" src={star} alt="Hotel rating star"/>
                        </li>
                        <li className="hotel-name__item">
                            <img className="hotel-name__image" src={star} alt="Hotel rating star"/>
                        </li>
                    </ul>
                    <div className="hotel-name__cover">
                        <h2 className="hotel-name__title">Grand Hilton hotel</h2>
                        <span className="hotel-name__promo">Flash Offer</span>
                    </div>
                    <p className="hotel-name__subtitle">Half-Board/ All Inclusive + Complimentary Activities + Child
                        Stays Free</p>
                </div>
                <div className="hotel-name__promo hotel-name__promo_type_user">
                    <span className="hotel-name__estimate">User Rattings</span>
                    <div className="hotel-name__container">
                        <span className="hotel-name__score">4.5/</span>
                        <span className="hotel-name__total-score">5</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HotelName;