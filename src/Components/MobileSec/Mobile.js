
import "./style.css"
import  img from "../../assets/image15.png"
import  img2 from "../../assets/image16.png"

const Mobile = ()=>{
    return(
        <div className="index">
        <div className="index1-content"> 
        <div className="img">   <img src={img}/></div>
           <div className="text-content">
              <h1>Whether a restaurant, a hotel or a café, MYNU QR system is the best ordering solution for you</h1>
              <p>Create your digital menu under your own brand and add awesome features to it. Through your control panel, get a full access to your menu profile and ordering history, and review your statistics. Add special offers and delete or edit your items, descriptions, images or videos whenever you want with your data safe and secure. Request a professional translation of your menu into many languages, and recieve your payement instantly by many payment solutions.</p>
           </div>
        </div>
        <div className="index2-content"> 
           <div className="text-content">
              <h1>Guaranteed Costumer Satisfaction</h1>
              <p>Your guests will be able to access your digital menu with their own language, place orders, add notes, pay, split the bills and even make tips completely independently without waiters, and with no app. With MYNU, you'll reduce the risk of mistakes, granting your guests the premium ordering experience they deserve</p>
           </div>
           <div className="img"><img src={img2}/></div>
        </div>
      </div>
    )

}
export default Mobile