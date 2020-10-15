import React from 'react';
import './App.css';
import Packages from './components/Packages'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page">
      <header className="header">
      Questions? Need Help? Call us on (+123) 456 1500
      </header>
      <Packages/>
      <Footer/>
    </div>
  );
}

export default App;