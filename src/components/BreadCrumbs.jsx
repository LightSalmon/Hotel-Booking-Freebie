import React from "react";

const BreadCrumbs = () => {
  return (
    <ul className="bread-crumbs">
      <li className="bread-crumbs__item">
        <a className="bread-crumbs__link" href="#">
          <span className="bread-crumbs__name">Home</span>
        </a>
      </li>
      <li className="bread-crumbs__item">
        <a className="bread-crumbs__link" href="#">
          <span className="bread-crumbs__name">Flash Offers</span>
        </a>
      </li>
      <li className="bread-crumbs__item">
        <span className="bread-crumbs__name">Grand Hilton Hotel</span>
      </li>
    </ul>
  )
}

export default BreadCrumbs;