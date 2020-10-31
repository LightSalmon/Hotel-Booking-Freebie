import React from 'react';

const PackageSummery = () => {

  return (
    <section className="package-summery">
      <h2 className="package-summery__main-title">Package Summery</h2>
      <div className="package-summery__cover">
        <div className="package-summery__column">
          <h3 className="package-summery__title">Package Highlights</h3>
          <label className="package-summery__">
            <input className="package-summery__" type="checkbox" checked/>Half Board/ All Inclusive
          </label>
          <label>
            <input type="checkbox" checked/>Child Under 11 Years Stay Free
          </label>
          <label>
            <input type="checkbox" checked/>LUX* Me Spa
          </label>
          <label>
            <input type="checkbox" checked/>Luxurious 5-Star Hotel
          </label>
          <label>
            <input type="checkbox" checked/>Banyan An Adult Only Zone
          </label>
        </div>

        <div className="package-summery__column">
          <h3 className="package-summery__title">Offer Details</h3>
          <label>
            <input type="checkbox" checked/>Benefit from a special discounted CHILL’OUT OFFER at Grand Hilton Hotel.
          </label>
          <span>* Valid until 30 April 2020</span>
          <span>10th March - 30th April 2020</span>
        </div>
      </div>

      <div className="package-summery__column">
        <h3 className="package-summery__title">Package Summery Details</h3>
        <ul className="package-summery__list">
          <li className="package-summery__item">
            <h4>Purchase Inclusions</h4>
            <label>
              <input type="checkbox" checked/>Room as per selection
            </label>
            <label>
              <input type="checkbox" checked/>Half Board or All Inclusive Meal Plan
            </label>
            <label>
              <input type="checkbox" checked/>Complimentary Land & Water activities
            </label>
            <label>
              <input type="checkbox" checked/>Child Under 11 years old stays free
            </label>
            <label>
              <input type="checkbox" checked/>Free Wi-Fi
            </label>
            <label>
              <input type="checkbox" checked/>Free Secure Parking
            </label>
          </li>
          <li className="package-summery__cell">
            <h4>Complimentary Land Based Activities</h4>
            <label>
              <input type="checkbox" checked/>Gym
            </label>
            <label>
              <input type="checkbox" checked/>Beach Volley
            </label>
            <label>
              <input type="checkbox" checked/>Table tennis
            </label>
            <label>
              <input type="checkbox" checked/>Soccer balls
            </label>
            <label>
              <input type="checkbox" checked/>Yoga
            </label>
            <label>
              <input type="checkbox" checked/>Unlimited access to driving range
            </label>
          </li>
          <li className="package-summery__cell">
            <h4>Complimentary Water Based Activities</h4>
            <label>
              <input type="checkbox" checked/>Water skiing
            </label>
            <label>
              <input type="checkbox" checked/>Windsurfing
            </label>
            <label>
              <input type="checkbox" checked/>Pedal boats
            </label>
            <label>
              <input type="checkbox" checked/>Kayaking
            </label>
            <label>
              <input type="checkbox" checked/>Aqua Gym
            </label>
            <label>
              <input type="checkbox" checked/>Glass bottom boat trips
            </label>
          </li>
          <li className="package-summery__cell">
            <h4>Meal Plan Available</h4>
            <label>
              <input type="checkbox" checked/>Half Board
            </label>
            <label>
              <input type="checkbox" checked/>All Inclusive
            </label>
          </li>
          <li className="package-summery__cell">
            <h4>Entertainment</h4>
            <label>
              <input type="checkbox" checked/>Live music
            </label>
            <label>
              <input type="checkbox" checked/>DJ & Mauritian Dance Show
            </label>
          </li>
          <li className="package-summery__cell">
            <h4>Check In & Check Out</h4>
            <label>
              <input type="checkbox" checked/>Check In Time 14:00
            </label>
            <label>
              <input type="checkbox" checked/>Check Out Time 11:00
            </label>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PackageSummery;