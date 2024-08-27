import logo1 from "../assets/img/logo1.svg"
import icon1 from "../assets/img/icon/icon1.png"
import icon2 from "../assets/img/icon/icon2.png"
import icon3 from "../assets/img/icon/icon3.png"
import icon4 from "../assets/img/icon/icon4.png"
import icon5 from "../assets/img/icon/icon5.png"
import icon6 from "../assets/img/icon/icon6.jpg"
import profile from "../assets/img/profile.png"
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo1} alt="" />
        </div>
        <nav>
            <ul>
                <li><img src={icon1} width="20px" alt="" /></li>
                <li><img src={icon2} width="20px" alt="" /></li>
                <li><img src={icon3} width="20px" alt="" /></li>
                <li><img src={icon4} width="20px" alt="" /></li>
                <li><img src={icon5} width="20px" alt="" /></li>
            </ul>
        </nav>
        <div className="param">
            <ul>
                <li>
                    <NavLink to="/">
                        <img src={icon6} width="18px" alt="" />
                    </NavLink>
                </li>
                <li>
                        <img src={profile} width="50px" alt="" />
                </li>
            </ul>
        </div>
    </header>
  )
}
export default Navigation