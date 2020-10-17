import React from "react";
import bestTour from "../images/best-tour-plan.svg";
import avatar from "../images/man.png";

const TourSearch = () => {
    return (
        <div className="tour-search header__tour-search">
            <div className="centering-cover">
                <img className="tour-search__logo" src={bestTour} alt="Best tour plan logotype"/>
                <form className="tour-search__form" action="#" noValidate>
                    <div className="tour-search__container">
                        <input className="tour-search__input" type="text" name="search"
                               placeholder="Search Location" minLength="2" required/>
                        <span className="tour-search__error"/>
                        <input className="tour-search__submit" type="submit" value='' name="submit"/>
                    </div>
                </form>
                <div className="user-info">
                    <button className="user-info__button user-info__button_type_cart"/>
                    <div className="user-info__profile">
                        <img src={avatar} alt="User avatar"/>
                        <span className="user-info__name">Nathan</span>
                        <button className="user-info__button user-info__button_type_login"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourSearch;