import React from "react";
import HotelName from "./HotelName";
import Slider from "./Slider";
import HotelOptions from "./HotelOptions";
import HotelLocation from "./HotelLocation";

const FlashOffer = () => {
  return (
    <section className="flash-offer">
      <HotelName/>
      <section className="hotel-parameters">
        <Slider/>
        <HotelOptions/>
        <HotelLocation/>
      </section>
    </section>
  )
}

export default FlashOffer;