import React from "react";

const TopNavigation = () => {
    return (
        <div className="header__top-navigation">
            <div className="header__contact">
                <span className="header__contact header__contact_type_question">Questions? Need Help?
                </span> Call us on&nbsp;
                <a href="tel:(+123) 456 1500" className="header__contact header__contact_type_phone" target="__blank">(+123) 456 1500</a>
            </div>
            <div className="header__preference">
                <div className="header__container header__container_type_gift">
                    <button className="header__button header__button_type_gift"/>
                    <span className="header__program">BTP Gift Card</span>
                </div>
                <div className="header__container header__container_type_loyalty">
                    <button className="header__button header__button_type_star"/>
                    <span className="header__program">Loyalty Program</span>
                </div>
            </div>
        </div>
    )
}

export default TopNavigation;