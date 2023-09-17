
import "./style.css"
import img from "../../assets/Group.png"
const Footer = ()=>{
    return(
        <div className="footer"  data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="1000">
          <div className="footer-content">
            <div className="items-content">
            <div className="info">
                <div className="title"><img src={img}/><p>Apex Software Solutions.</p></div>
                <div className="text"><p>New Generation Order Solutions!</p></div>
                <div className="itemwithicon"><i class="fa-regular fa-envelope"></i> <p>apex@mail.com</p></div>
                <div className="itemwithicon"><i class="fa-solid fa-phone"></i> <p>07504444444</p></div>
            </div>
                <div className="item">
                <div className="main-title"><p>About</p></div>
                <span>Features</span>
                <span>Benefits</span>
                <span>News</span>
                <span>FAQ</span>
                <span>Get Contact</span>
                </div>
                <div className="item">
                <div className="main-title"><p>Solutions</p></div>
                <span>QR Menu</span>
                <span>Restaurant Management System</span>
                <span>Tablet Menu</span>
                <span>Dine-in</span>
                </div>
                <div className="item">
                <div className="main-title"><p>Company</p></div>
                <span>About</span>
                <span>Blog</span>
                <span>Join Us</span>
                <span>Press</span>
                <span>Partners</span>
                </div>
                <div className="item">
                <div className="main-title"><p>Legal</p></div>
                <span>Claim</span>
                <span>Privacy</span>
                <span>Terms</span>
                <span>FAQ</span>
                <span>Get Contact</span>
                </div>
            </div>
          </div>
         <hr/>
         <div className="end"><span>Designed And Developed with love © Apex Software Solutions 2023. All right reserved</span></div>
        </div>
    )

}
export default Footer

// <i class="fa-regular fa-envelope"></i>
// <i class="fa-regular fa-phone"></i>