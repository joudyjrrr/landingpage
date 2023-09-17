import  "./Home.css"
import img1 from "../../assets/image13.png"
import img2 from "../../assets/image11.png"
import img3 from "../../assets/image12.png"
import img4 from "../../assets/image14.png"
const Home = ()=>{
    return(
        <div className="home"  data-aos-duration="1000"  data-aos-delay="1000">
            <div className="imgcontent">
               <img src={img1} />
               <img src={img2} />
               <img src={img3} />
               <img src={img4} />
            </div>
            <div className="text-content">
            <div className="text1">
             <h1>Set up your complete</h1>
             <h1>digital ordering system</h1>
             <h1>and show your menu like never before!</h1>
            </div>
            <div className="text2">
             <p>Easy, Safe and Fast!</p>
             <p>No App</p>
             <p>Full Control Panel</p>
             <p>Menu Translations</p>
             <p>Valet Call</p>
             <p>Digital Payment Integrated</p>
             <p>Images, Videos and Descriptions</p>
             <p>Many Premium Features</p>
            </div>
            <button>Try Now</button>
        </div>
        </div>
    )

}
export default Home 
