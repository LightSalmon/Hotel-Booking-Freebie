import React from 'react';

const PackageSummery = () => {

  return (
    <section className="package-summery">
      <h2 className="package-summery__main-title">Package Summery</h2>
      <div className="package-summery__cover">
        <div className="package-summery__column">
          <h3 className="package-summery__title">Package Highlights</h3>
          <form className="package-summery__form" action="#" noValidate>
            <ul className="package-summery__list highlights">
              <li className="package-summery__item highlights__item">
                <input className="package-summery__checkbox" id="half-board" type="checkbox" defaultChecked/>
                <label className="package-summery__label" htmlFor="half-board">Half Board/ All Inclusive</label>
              </li>
              <li className="package-summery__item highlights__item">
                <input className="package-summery__checkbox" id="children-free" type="checkbox" defaultChecked/>
                <label className="package-summery__label" htmlFor="children-free">Child Under 11 Years Stay Free</label>
              </li>
              <li className="package-summery__item highlights__item">
                <input className="package-summery__checkbox" id="lux-spa" type="checkbox" defaultChecked/>
                <label className="package-summery__label" htmlFor="lux-spa">LUX* Me Spa</label>
              </li>
              <li className="package-summery__item highlights__item">
                <input className="package-summery__checkbox" id="5-star" type="checkbox" defaultChecked/>
                <label className="package-summery__label" htmlFor="5-star">Luxurious 5-Star Hotel</label>
              </li>
              <li className="package-summery__item highlights__item">
                <input className="package-summery__checkbox" id="adult-zone" type="checkbox" defaultChecked/>
                <label className="package-summery__label" htmlFor="adult-zone">Banyan An Adult Only Zone</label>
              </li>
            </ul>
          </form>
        </div>

        <div className="package-summery__column">
          <h3 className="package-summery__title">Offer Details</h3>
          <form className="package-summery__form" action="#" noValidate>
            <ul className="package-summery__list offer-details">
              <li className="package-summery__item offer-details__item">
                <input className="package-summery__checkbox" id="chill-out" type="checkbox" defaultChecked/>
                <label className="package-summery__label" htmlFor="chill-out">Benefit from a special discounted
                  CHILL’OUT OFFER at Grand Hilton
                  Hotel.</label>
              </li>
              <li className="package-summery__item offer-details__item">10th March - 30th April 2020</li>
            </ul>
          </form>
          <span className="package-summery__duration">* Valid until 30 April 2020</span>
        </div>
      </div>
      <div className="package-summery__column">
        <h3 className="package-summery__title">Package Summery Details</h3>
        <form className="package-summery__form main-details__form" action="#" noValidate>
          <ul className="package-summery__list main-details">
            <li className="package-summery__item main-details__item">
              <h4 className="package-summery__category">Purchase Inclusions</h4>
              <input className="package-summery__checkbox" id="room-selection" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="room-selection">Room as per selection</label>
              <input className="package-summery__checkbox" id="meal-type" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="meal-type">Half Board or All Inclusive Meal Plan</label>
              <input className="package-summery__checkbox" id="activities" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="activities">Complimentary Land & Water activities</label>
              <input className="package-summery__checkbox" id="children" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="children">Child Under 11 years old stays free</label>
              <input className="package-summery__checkbox" id="wi-fi" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="wi-fi">Free Wi-Fi</label>
              <input className="package-summery__checkbox" id="parking" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="parking">Free Secure Parking</label>
            </li>
            <li className="package-summery__item main-details__item">
              <h4 className="package-summery__category">Complimentary Land Based Activities</h4>
              <input className="package-summery__checkbox" id="gym" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="gym">Gym</label>
              <input className="package-summery__checkbox" id="volley" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="volley">Beach Volley</label>
              <input className="package-summery__checkbox" id="tennis" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="tennis">Table tennis</label>
              <input className="package-summery__checkbox" id="soccer-balls" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="soccer-balls">Soccer balls</label>
              <input className="package-summery__checkbox" id="yoga" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="yoga">Yoga</label>
              <input className="package-summery__checkbox" id="driving-range" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="driving-range">Unlimited access to driving range</label>
            </li>
            <li className="package-summery__item main-details__item">
              <h4 className="package-summery__category">Complimentary Water Based Activities</h4>
              <input className="package-summery__checkbox" id="water-skiing" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="water-skiing">Water skiing</label>
              <input className="package-summery__checkbox" id="windsurfing" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="windsurfing">Windsurfing</label>
              <input className="package-summery__checkbox" id="pedal-boats" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="pedal-boats">Pedal boats</label>
              <input className="package-summery__checkbox" id="kayaking" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="kayaking">Kayaking</label>
              <input className="package-summery__checkbox" id="aqua-gym" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="aqua-gym">Aqua Gym</label>
              <input className="package-summery__checkbox" id="boat" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="boat">Glass bottom boat trips</label>
            </li>
          </ul>

          <ul className="package-summery__list other-details">
            <li className="package-summery__item other-details__item">
              <h4 className="package-summery__category">Meal Plan Available</h4>
              <input className="package-summery__checkbox" id="board" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="board">Half Board</label>
              <input className="package-summery__checkbox" id="all-inclusive" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="all-inclusive">All Inclusive</label>
            </li>
            <li className="package-summery__item other-details__item">
              <h4 className="package-summery__category">Entertainment</h4>
              <input className="package-summery__checkbox" id="live-music" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="live-music">Live music</label>
              <input className="package-summery__checkbox" id="dance" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="dance">DJ & Mauritian Dance Show</label>
            </li>
            <li className="package-summery__item other-details__item">
              <h4 className="package-summery__category">Check In & Check Out</h4>
              <input className="package-summery__checkbox" id="check-in" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="check-in">Check In Time 14:00</label>
              <input className="package-summery__checkbox" id="check-out" type="checkbox" defaultChecked/>
              <label className="package-summery__label" htmlFor="check-out">Check Out Time 11:00</label>
            </li>
          </ul>
        </form>
      </div>
    </section>
  )
}

export default PackageSummery;