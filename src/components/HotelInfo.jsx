import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import PackageSumery from './PackageSumery';
import HotelInformation from './HotelInformation';

function HotelInfo (props) {
  // const {} = props;

  return(
    <Router>
      <nav className = "hotel-navigation">
        <ul className="hotel-navigation__list">
          <li>
            <NavLink exact to="/" className="hotel-navigation__item" activeClassName="hotel-navigation__item_active">Package Summery</NavLink>
          </li>
          <li>
            <NavLink to="/hotelInfo" className="hotel-navigation__item" activeClassName="hotel-navigation__item_active">Hotel Information</NavLink>
          </li>
          <li>
            <NavLink to="/rooms" className="hotel-navigation__item" activeClassName="hotel-navigation__item_active">Rooms</NavLink>
          </li>
          <li>
            <NavLink to="/facilities" className="hotel-navigation__item" activeClassName="hotel-navigation__item_active">Facilities & Activities</NavLink>
          </li>
          <li>
            <NavLink to="/dining" className="hotel-navigation__item" activeClassName="hotel-navigation__item_active">Dining & Entertainment</NavLink>
          </li>
          <li>
            <NavLink to="/reviews" className="hotel-navigation__item" activeClassName="hotel-navigation__item_active">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/questions" className="hotel-navigation__item" activeClassName="hotel-navigation__item_active">Questions & Answers</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <PackageSumery />
        </Route>
        <Route path="/hotelInfo">
          <HotelInformation />
        </Route>
        <Route path="/rooms">
          <PackageSumery />
        </Route>
        <Route path="/facilities">
          <PackageSumery />
        </Route>
        <Route path="/dining">
          <PackageSumery />
        </Route>
        <Route path="/reviews">
          <PackageSumery />
        </Route>
        <Route path="/questions">
          <PackageSumery />
        </Route>
      </Switch>
    </Router>
  )
};

export default HotelInfo;