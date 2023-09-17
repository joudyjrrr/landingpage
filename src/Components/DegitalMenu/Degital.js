import "./style.css"
import React , {useState} from "react"
import img1 from "../../assets/homeCarouseOne.webp"
import img2 from "../../assets/homeCarouseTwo.webp"
import img3 from "../../assets/homeCarouseThree.webp"
const Degital = () =>{
    const slider = [
       {
        img:img1,
        title:"Your digital menu like never before",
        desc1:"Decrease operational costs by 30%",
        desc2:"Increase sales with cross offers",
        desc3:"Fast table turnover"
       },
       {
        img:img2,
        title:"Higher Accuracy, Lower Costs",
        desc1:"No more printing, save papers",
        desc2:"Eliminate human errors, increase efficiency",
        desc3:"Low maintanence costs"
       },
       {
        img:img3,
        title:"Get Full Control Over Your Business",
        desc1:"Higher Accuracy, Lower Costs",
        desc2:"Statistical data analysis for smarter decisions",
        desc3:"Set your own descriptions, and add attractive images and videos for every item"
       }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      const nextIndex = (currentIndex + 1) % slider.length;
      setCurrentIndex(nextIndex);
    };
  
    const handlePrev = () => {
      const prevIndex = (currentIndex - 1 + slider.length) % slider.length;
      setCurrentIndex(prevIndex);
    };
  
    return(
        <div className="digital" data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="1000">
            <i class="fa-solid fa-angle-left" onClick={handlePrev}></i> 
            <i class="fa-solid fa-angle-right" onClick={handleNext}></i> 
           <div className="digital-content">
              <h1>Your digital menu like never before</h1>
               {slider.map((item, index) => (
                 <div key={index} className={`${index === currentIndex ? 'slider-contect ' : 'hidden'}`}>
                     <img src={item.img}/>
                <div className="text">
                    <h2>{item.title}</h2>
                    <div className="inner-text">
                        <p>{item.desc1}</p>
                        <p>{item.desc2}</p>
                        <p>{item.desc3}</p>
                    </div>
                </div>
                 </div> ))}
           
           </div>
           <div className="spans">
           {slider.map((_, index) => (
          <span key={index} className={index === currentIndex ? 'active' : ''}></span>
        ))}
           </div>
        </div>
    )


}
export default Degital