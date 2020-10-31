import React from "react";

const HotelLocation = () => {
  return (
    <section className="hotel-location">
      <iframe className="hotel-location__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8776.121564835856!2d-122.42103316196138!3d37.78022971622247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580858a853597%3A0xf36fa59e8a02cca4!2sParc%2055%20San%20Francisco%20-%20a%20Hilton%20Hotel!5e0!3m2!1sru!2sru!4v1603031380181!5m2!1sru!2sru"
              width="347" height="213" frameBorder="0" allowFullScreen="" aria-hidden="false"
              tabIndex="0" title="hotel-location__map"/>
    </section>
  )
}

export default HotelLocation;
