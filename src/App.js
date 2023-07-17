import React from 'react'
import './App.css';
// import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Main from './Component/Main/Main';
import Navbar from './Component/Nav-bar/Navbar';


const  App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Main />
    <Footer />
    </>
  );
}

export default App;
