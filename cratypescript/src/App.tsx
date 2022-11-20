import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import HomePageHeader from './components/Headers/HomePageHeader';
import Navigation from './components/Headers/Navigation';
function App() {
  return (
    <>
    <Navigation/>
    <div className="App">
     <HomePageHeader/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
