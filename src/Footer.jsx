import React from 'react';

function Footer() {
  return (
    <section className="footer">
      <div className="footer__content">
        <p class="luckiestguy">Best<span class="luckiestguy luckiestguy_pink">tour</span>plan</p>
        <ul class="footer__title">ALL CATEGORIES
        <li class="footer__li">All Deals </li>
          <li class="footer__li">Hotels </li>
          <li class="footer__li">Activities </li>
          <li class="footer__li">Spa Packages </li>
          <li class="footer__li">Hotel Day Packages </li>
          <li class="footer__li">Restaurants</li>
          <li class="footer__li">Fitness</li>
          <li class="footer__li">Rodrigues</li>
        </ul>

        <ul class="footer__title">ADDITIONAL INFORMATION
        <li class="footer__li">About Us</li>
          <li class="footer__li">Contact Us</li>
          <li class="footer__li">How does it work?</li>
          <li class="footer__li">Frequently Asked Questions</li>
          <li class="footer__li">Deals.mu loyalty program</li>
          <li class="footer__li">Promote your Business on BTP</li>

          <ul class="footer__title">Social Network</ul>
        </ul>

        <ul class="footer__title">LEGAL INFORMATION
        <li class="footer__li">Terms & Conditions</li>
          <li class="footer__li">Disclaimer</li>
          <li class="footer__li">Cancellation policy</li>
          <li class="footer__li">Privacy</li>
        </ul>

        <ul class="footer__title footer__title_width_two-columns">Contact Details
        <li class="footer__li">Feel free to contact us by phone, email or by our contact form</li>
          <li class="footer__li footer__li_point">9748 Blossom Hill Rd undefined Lansing, Idaho 68545 United States</li>
          <li class="footer__li footer__li_phone">
            Tel (business hours) : 269 1500<br/>
            Tel (hotline) Monday - Saturday: 52-56-61-38 (08:00 am – 20:00 pm)<br/>
                Tel (hotline) Sunday: 52-56-61-38 (08:00 am – 14:00 pm)</li>
          <li class="footer__li footer__li_post">cherly.lawson@example.com</li>
        </ul>

        <form class="form" action="" method="POST">
          <h3 class="footer__title form__input_large">Send us a message</h3>
          <input class="form__input" type="text" id="username" name="username" placeholder="Your Full Name&ast;" />
          <input class="form__input" type="tel" id="number" name="password" placeholder="Phone Number&ast;" />
          <input class="form__input_large" type="text-area" id="number" name="message" placeholder="Message" />
          <button class="form__submit-btn" type="submit">Send</button>
          <p class="footer__p">&ast;Required Fields</p>
        </form>
      </div>
      <a href="#" class="footer__bottom"> Disclaimer    Conditions of use    Cancellation policy</a>
    </section>
  )
}

export default Footer;