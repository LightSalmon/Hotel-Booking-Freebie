import React from "react";
import HotelName from "./HotelName";
import Slider from "./Slider";

const FlashOffer = () => {
    return (
        <section className="flash-offer">
            <HotelName/>
            <section className="hotel-parameters">
                <Slider/>

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

                <section className="hotel-location">
                    <iframe className="hotel-location__map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8776.121564835856!2d-122.42103316196138!3d37.78022971622247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580858a853597%3A0xf36fa59e8a02cca4!2sParc%2055%20San%20Francisco%20-%20a%20Hilton%20Hotel!5e0!3m2!1sru!2sru!4v1603031380181!5m2!1sru!2sru"
                            width="347" height="213" frameBorder="0" allowFullScreen="" aria-hidden="false"
                            tabIndex="0"/>
                </section>
            </section>
        </section>
    )
}

export default FlashOffer;