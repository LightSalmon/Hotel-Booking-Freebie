import React from 'react';
import './App.css';
import Packages from './components/Packages'
import Footer from './components/Footer'
import Header from "./components/Header";

function App() {
  return (
    <div className="page">
      <Header/>
      <Packages/>
      <Footer/>
    </div>
  );
}

export default App;