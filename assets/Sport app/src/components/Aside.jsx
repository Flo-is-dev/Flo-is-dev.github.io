import icon1 from "../assets/img/activity1.svg"
import icon2 from "../assets/img/activity2.svg"
import icon3 from "../assets/img/activity3.svg"
import icon4 from "../assets/img/activity4.svg"

const Aside = () => {
  return (
    <aside>
        <div className="asideIconContainer">
            <a href="">
              <img src={icon1} alt="icon yoga" />  
            </a>
            <a href="">
              <img src={icon2} alt="icon natation" />  
            </a>
            <a href="">
              <img src={icon3} alt="icon cyclisme" />  
            </a>
            <a href="">
              <img src={icon4} alt="icon fitness" />  
            </a>
        </div>

        <small>Copiryght, SportSee 2020</small>
    </aside>
  )
}
export default Aside