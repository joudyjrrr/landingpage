import "./style.css"
import React , {useState , useEffect} from "react"
import img1 from "../../assets/fFifteen.webp"
import img2 from "../../assets/fFourteen.webp"
import img3 from "../../assets/fThirteen.webp"
import img4 from "../../assets/firstFour.webp"
import img5 from "../../assets/firstFive.webp"
import img6 from "../../assets/firstEight.webp"
import img7 from "../../assets/firstNine.webp"
import img8 from "../../assets/firstSeven.webp"
const References =()=>{
    const images = [img1, img2, img3 , img4, img5, img6,img7,img8]; // قم بتحميل جميع الصور هنا
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedImages, setDisplayedImages] = useState([images[0], images[1], images[2]]);
  
    useEffect(() => {
      // حدث displayedImages عندما يتغير currentIndex
      setDisplayedImages([
        images[(currentIndex - 1 + images.length) % images.length],
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
      ]);
    }, [currentIndex]);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return(
        <div className="references">
         <i class="fa-solid fa-angle-left" onClick={handlePrev}></i> 
            <i class="fa-solid fa-angle-right"  onClick={handleNext}></i> 
         <div className="title"><h1>Our References</h1></div>
         <div className="groub">
         {displayedImages.map((image, index) => (
          <div key={index} className={`image-container ${index === 1 ? 'visible' : 'hidden'}`}>
            <img src={image} alt={`Reference ${index + 1}`} />
          </div>
        ))}
         </div>
         <div className="spans">
         {images.map((_, index) => (
          <span key={index} className={index === currentIndex ? 'active' : ''}></span>
        ))}
           </div>
        </div>
    )

}
export default References