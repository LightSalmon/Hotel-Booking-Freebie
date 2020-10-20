import React from 'react';
import facebook from "../images/facebook.svg";
import youtube from "../images/youtube.svg";
import instagram from "../images/instagram.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__content">
        <p className="luckiestguy">Best<span className="luckiestguy luckiestguy_pink">tour</span>plan</p>
        <ul className="footer__title">ALL CATEGORIES
        <li className="footer__li">All Deals </li>
          <li className="footer__li">Hotels </li>
          <li className="footer__li">Activities </li>
          <li className="footer__li">Spa Packages </li>
          <li className="footer__li">Hotel Day Packages </li>
          <li className="footer__li">Restaurants</li>
          <li className="footer__li">Fitness</li>
          <li className="footer__li">Rodrigues</li>
        </ul>

        <ul className="footer__title">ADDITIONAL INFORMATION
        <li className="footer__li">About Us</li>
          <li className="footer__li">Contact Us</li>
          <li className="footer__li">How does it work?</li>
          <li className="footer__li">Frequently Asked Questions</li>
          <li className="footer__li">Deals.mu loyalty program</li>
          <li className="footer__li">Promote your Business on BTP</li>
          <h2 className="footer__title footer__title_width_top-marg">Social Network 
            <img src = {facebook} alt = "facebook" className = "footer__social-icons" />
            <img src = {youtube} alt = "youtube" className = "footer__social-icons" />
            <img src = {instagram} alt = "instagram" className = "footer__social-icons" /></h2>
        </ul>

        <ul className="footer__title">LEGAL INFORMATION
        <li className="footer__li">Terms & Conditions</li>
          <li className="footer__li">Disclaimer</li>
          <li className="footer__li">Cancellation policy</li>
          <li className="footer__li">Privacy</li>
        </ul>

        <ul className="footer__title footer__title_width_two-columns">Contact Details
        <li className="footer__li">Feel free to contact us by phone, email or by our contact form</li>
          <li className="footer__li footer__li_point">9748 Blossom Hill Rd undefined Lansing, Idaho 68545 United States</li>
          <li className="footer__li footer__li_phone">
            Tel (business hours) : 269 1500<br/>
            Tel (hotline) Monday - Saturday: 52-56-61-38 (08:00 am – 20:00 pm)<br/>
            Tel (hotline) Sunday: 52-56-61-38 (08:00 am – 14:00 pm)</li>
          <li className="footer__li footer__li_post">cherly.lawson@example.com</li>
        </ul>

        <form className="form" action="" method="POST">
          <h3 className="footer__title form__input_large">Send us a message</h3>
          <input className="form__input" type="text" id="username" name="username" placeholder="Your Full Name&#42;" />
          <input className="form__input" type="tel" id="number" name="password" placeholder="Phone Number&#42;" />
          <input className="form__input form__input_large" type="text-area" id="number" name="message" placeholder="Message" />
          <button className="form__submit-btn" type="submit">Send</button>
          <p className="footer__p">&#42;Required Fields</p>
        </form>
      </div>
      <div className="footer__bottom">
        <a href="#" className="footer__bottom-links"> Disclaimer </a>
        <a href="#" className="footer__bottom-links"> Conditions of use </a>
        <a href="#" className="footer__bottom-links"> Cancellation policy </a>
      </div>
    </section>
  )
}

export default Footer;