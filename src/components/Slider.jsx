import React from "react";

const Slider = () => {
    return (
            <section className="slider">
                <figure className="slider__content">
                    <ul className="slider__list">
                        <li className="slider__item">
                            <div className="slider__image slider__image_show"/>
                        </li>
                        <li className="slider__item">
                            <div className="slider__image"/>
                        </li>
                    </ul>
                </figure>
                <button className="slider__button slider__button_type_back"/>
                <button className="slider__button slider__button_type_next"/>
            </section>
    )
}

export default Slider;