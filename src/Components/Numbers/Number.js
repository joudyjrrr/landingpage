
import "./style.css"
import img1 from "../../assets/spoon.webp"
import img2 from "../../assets/glob.webp"
import img3 from "../../assets/language.webp"
import img4 from "../../assets/users.webp"
import React, {  useEffect, useState } from 'react';
import CountUp from 'react-countup';
const Number =()=>{
    const [startCount, setStartCount] = useState(false);
    useEffect(() => {
      function handleScroll() {
        const { top } = document.getElementById("number").getBoundingClientRect();
        if (top <= window.innerHeight && !startCount) {
          console.log("Reached Statistics!");
          setStartCount(true);
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [startCount]);
  
    return(
       <div className="number" id="number"  data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="1000">
          <div className="title"><h1>Our Accomplishments by Numbers</h1></div>
          <div className="groub">
            <div className="item">
                <img src={img2}/>
                <div className="text">
                    <span>
                    <CountUp start={0} end={startCount? 27 : 0} duration={5} />
                        </span>
                    <p>Countries</p>
                </div>
            </div>
            <div className="item">
                <img src={img3}/>
                <div className="text">
                    <span>
                    <CountUp start={0} end={startCount? 12 : 0} duration={5} />
                    </span>
                    <p>Languages</p>
                </div>
            </div>
            <div className="item">
                <img src={img4}/>
                <div className="text">
                    <span>
                    <CountUp start={0} end={startCount? 2415 : 0} duration={5} />
                        </span>
                    <p>Happy Client</p>
                </div>
            </div>
            <div className="item">
                <img src={img1}/>
                <div className="text">
                    <span>
                    <CountUp start={0} end={startCount? 4 : 0} duration={5} />
                        M+</span>
                    <p>Orders</p>
                </div>
            </div>
          </div>
       </div>

    )

}
export default Number