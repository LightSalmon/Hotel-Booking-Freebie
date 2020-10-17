import React from 'react';
import './App.css';
import Packages from './components/Packages'
import Footer from './components/Footer'
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import FlashOffer from "./components/FlashOffer";

function App() {
  return (
    <div className="page">
      <Header/>
      <BreadCrumbs/>
      <FlashOffer/>
      <Packages/>
      <Footer/>
    </div>
  );
}

export default App;