import React from 'react';
import './App.css';
import Packages from './components/Packages';
import Footer from './components/Footer';
import UsersComments from './components/UsersComments';
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import FlashOffer from "./components/FlashOffer";
import HotelInfo from "./components/HotelInfo";

function App() {
  return (
    <div className="page">
      <Header/>
      <BreadCrumbs/>
      <FlashOffer/>
      <HotelInfo />
      <Packages/>
      <UsersComments />
      <Footer/>
    </div>
  );
}

export default App;