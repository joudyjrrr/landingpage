
import "./Header.css"


const ModalNav = ()=>{
    return(
        <div class="modal">
         <ul>
              <li><a href="#">Home</a> <span></span></li>
              <li><a href="#">Resturant</a> <span></span></li>
              <li><a href="$">Hotel</a> <span></span></li>
              <li><a href="#">Price</a> <span></span></li>
            </ul>
            <div className="btns">
                   <button className="btn1">Login</button>
                   <button  className="btn2">English<i class="fa-solid fa-angle-down"></i> </button>
          </div>
</div>
    )

}
export default ModalNav