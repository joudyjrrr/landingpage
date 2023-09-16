import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import Home from './Components/Home/Home';
import Mobile from './Components/MobileSec/Mobile';
import Degital from './Components/DegitalMenu/Degital';
import Review from './Components/Review/Review';
function App() {
  return (
    <div className="App">
   <Header/>
   <Home/>
   <Mobile/>
   <Degital/>
   <Review/>
    </div>
  );
}

export default App;
