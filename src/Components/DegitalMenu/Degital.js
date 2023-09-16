import "./style.css"

import img from "../../assets/image17.png"
const Degital = () =>{
    return(
        <div className="digital">
            <i class="fa-solid fa-angle-left"></i> 
            <i class="fa-solid fa-angle-right"></i> 
           <div className="digital-content">
              <h1>Your digital menu like never before</h1>
              <div className="slider-contect">
                <img src={img}/>
                <div className="text">
                    <h2>Increase your revenue</h2>
                    <div className="inner-text">
                        <p>Decrease operational costs by 30%</p>
                        <p>Increase sales with cross offers</p>
                        <p>Fast table turnover</p>
                    </div>
                </div>
              </div>
           </div>
           <div className="spans">
            <span></span>
            <span></span>
            <span></span>
           </div>
        </div>
    )


}
export default Degital