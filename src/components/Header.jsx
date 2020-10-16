import React from "react";
import TopNavigation from "./TopNavigation";
import TourSearch from "./TourSearch";
import MainNavigation from "./MainNavigation";

const Header = () => {
    return (
        <header className="header">
            <nav className="header-navigation">
                <TopNavigation/>
                <TourSearch/>
                <MainNavigation/>
            </nav>
        </header>
    )
}

export default Header;