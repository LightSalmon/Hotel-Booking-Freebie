import React from "react";
import gift from '../images/gift-icon.svg';
import star from '../images/star-icon.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header__contact">
                <span className="header__contact header__contact_type_question">Questions? Need Help?
                </span> Call us on
                <a href="tel:(+123) 456 1500" className="header__contact header__contact_type_phone"
                   target="__blank">(+123) 456 1500</a>
            </div>
            <div className="header__grouping">
                <div className="header__container header__container_type_gift">
                    <button className="header__button">
                        <img className="header__icon header__icon_type_gift" src={gift} alt="Icon of gift card"/>
                    </button>
                    <span className="header__program">BTP Gift Card</span>
                </div>
                <div className="header__container header__container_type_loyalty">
                    <button className="header__button">
                        <img className="header__icon header__icon_type_star" src={star} alt="Icon of loyalty program"/>
                    </button>
                    <span className="header__program">Loyalty Program</span>
                </div>
            </div>
        </header>
    )
}

export default Header;