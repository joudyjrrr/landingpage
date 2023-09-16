import "./style.css"
import img1 from "../../assets/tips.4c488c98.png";
import img2 from "../../assets/pay&Go.1ca9ccf4.png"
import img3 from "../../assets/menuWithPhotos.f781bfd6.png"
import img4 from "../../assets/saveTime.60715c41.png"
import img5 from "../../assets/ecoFriendly.fc399bb8.png"
import img6 from "../../assets/history&Review.171220c1.png"
import img7 from "../../assets/precision.0ce5e977.png"
import img8 from "../../assets/heart.19e1bbc9.png"
const Features = ()=>{
    return(
        <div className="Features">
             <div className="title"> <h1>Key Features of Apex Menu</h1></div>
             <div className="card-groub">
             <div className="card brdr-second">
                <img src={img4}/>
                <span>Time Saving</span>
                <p>Don't wait the waiter. Order and pay instantly via MYNU.</p>
             </div>
             <div className="card brdr-second">
                <img src={img3}/>
                <span>See & Order</span>
                <p>You can't make mistakes when rodering through MYNU because every item is explained with pictures</p>
             </div>
             <div className="card brdr-second">
                <img src={img2}/>
                <span>Pay & Go</span>
                <p>You can split the bills and pay instantly using any payment solution, no need to wait for the check</p>
             </div>
             <div className="card brdr-one-bottom">
                <img src={img1}/>
                <span>Tipping</span>
                <p>With a single click, tip as much as you want</p>
             </div>
             <div className="card brdr-one-right ">
                <img src={img5}/>
                <span>Ecofriendly</span>
                <p>With MYNU, all orders are recorded in history. No need to waste paper on menus and invoices</p>
             </div>
             <div className="card brdr-one-right ">
                <img src={img6}/>
                <span>Reviews & Comments</span>
                <p>Review the items you ordered and record comments about how they tasted</p>
             </div>
             <div className="card brdr-one-right">
                <img src={img7}/>
                <span>Precision & Personalization</span>
                <p>Do you have any kind of allergy. ? Is there any material you don't want in your meal? MYNU can notify you with its personalization feature.</p>
             </div>
             <div className="card ">
                <img src={img8}/>
                <span>Multiple Login</span>
                <p>Log in at the same table with your loved ones and place an order together, then decide who should pay.</p>
             </div>
             </div>
        </div>
    )

}
export default Features