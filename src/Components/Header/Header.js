import "./Header.css"
import logo from "../../assets/Group 1.png"
import React , {useState} from "react"
import ModalNav from "./ModalNanv"
const Header = ()=>{
  const [showNav, setShowNav] = useState(false)
    return(
        <div className="header">
        <div className="content-header">
          <div className="logo">
           <img src={logo}/>
           <p>Apex Software Solutions.</p>
          </div>
         
            <ul>
              <li><a href="#">Home</a> <span></span></li>
              <li><a href="#">Resturant</a> <span></span></li>
              <li><a href="#">Hotel</a> <span></span></li>
              <li><a href="#">Price</a> <span></span></li>
            </ul>
          <div className="btns">
                   <button className="btn1">Login</button>
                   <button  className="btn2">English<i class="fa-solid fa-angle-down"></i> </button>
          </div>
          <div className="controle">
              {!showNav && <i className="fa-solid fa-bars menu" onClick={() => setShowNav(!showNav)}></i>}
              {showNav && <i className="fa-solid fa-xmark close" onClick={() => setShowNav(false)}></i>}
            </div>
        </div>
        {showNav && <ModalNav />}
        </div>
        
    )


}
export default Header



