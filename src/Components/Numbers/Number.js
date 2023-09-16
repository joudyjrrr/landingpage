
import "./style.css"
import img1 from "../../assets/spoon.webp"
import img2 from "../../assets/glob.webp"
import img3 from "../../assets/language.webp"
import img4 from "../../assets/users.webp"
const Number =()=>{
    return(
       <div className="number">
          <div className="title"><h1>Our Accomplishments by Numbers</h1></div>
          <div className="groub">
            <div className="item">
                <img src={img2}/>
                <div className="text">
                    <span>27</span>
                    <p>Countries</p>
                </div>
            </div>
            <div className="item">
                <img src={img3}/>
                <div className="text">
                    <span>12</span>
                    <p>Languages</p>
                </div>
            </div>
            <div className="item">
                <img src={img4}/>
                <div className="text">
                    <span>2415</span>
                    <p>Happy Client</p>
                </div>
            </div>
            <div className="item">
                <img src={img1}/>
                <div className="text">
                    <span>4.5M+</span>
                    <p>Orders</p>
                </div>
            </div>
          </div>
       </div>

    )

}
export default Number