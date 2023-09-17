
import "./style.css"
import img1 from "../../assets/image 25.png"
import img2 from "../../assets/image 20.png"
import img3 from "../../assets/image18.png"
import img4 from "../../assets/image19.png"
const Review = ()=>{
    return(
        <div className="review"  data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="1000">
            <div className="img"><img src={img1}/></div>
            <div className="review-content">
                <h1>Some of our guests reviews</h1>
                <div className="review-item">
                    <p>Reading all the information on the menu in my own language made me feel better and more valuable, and I enjoyed a sincere and comfortable service without any communication problems.</p>
                    <div className="imgandname">
                        <img src={img2}/>
                        <div><span>Sakar</span>
                        <div className="icons"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                        </div>
                    </div>
                </div>
                <div className="review-item">
                    <p>Honestly, I never thought that adding/removing items from my list and sending orders directly to the waiter without calling a waiter could be this easy and fun.</p>
                    <div className="imgandname">
                        <img src={img3}/>
                        <div><span>Rozhan</span>
                        <div className="icons"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                        </div>
                    </div>
                </div>
                <div className="review-item">
                    <p>Reading all the information on the menu in my own language made me feel better and more valuable, and I enjoyed a sincere and comfortable service without any communication problems.</p>
                    <div className="imgandname">
                        <img src={img4}/>
                        <div><span>hanar</span>
                        <div className="icons"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Review