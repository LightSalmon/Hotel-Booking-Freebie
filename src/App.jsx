import React from 'react';
import './App.css';
import Packages from './components/Packages';
import Footer from './components/Footer';
import UsersComments from './components/UsersComments';

function App() {
  return (
    <div className="page">
      <header className="header">
      Questions? Need Help? Call us on (+123) 456 1500
      </header>
      <Packages/>
      <UsersComments />
      <Footer/>
    </div>
  );
}

export default App;