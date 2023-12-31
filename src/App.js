import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import Home from './Components/Home/Home';
import Mobile from './Components/MobileSec/Mobile';
import Degital from './Components/DegitalMenu/Degital';
import Review from './Components/Review/Review';
import Features from './Components/Features/Features';
import References from './Components/References/References';
import Number from './Components/Numbers/Number';
import Footer from './Components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
   <Header/>
   <Home/>
   <Mobile/>
   <Degital/>
   <Review/>
   <Features/>
   <References/>
   <Number/>
   <Footer/>
    </div>
  );
}

export default App;
