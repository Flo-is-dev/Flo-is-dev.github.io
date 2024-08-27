import { NavLink } from "react-router-dom";
import logo1 from "../assets/img/logo1.svg"
import logo2 from "../assets/img/logo2.svg"
import { useState } from "react";
import { ThemeContext } from '../context/ThemeProvider';
import { useContext } from 'react';

const Login = () => {

    const {toggleCallData,callApi } = useContext(ThemeContext)
    
    console.log(
        `%c is Switch ON? ${callApi ? "YES" : "NO"}`,
        `color: ${callApi ? "green" : "crimson" };font-size: 14px;font-weight:bold;background-color:${callApi ? "lightgreen" : "lightpink"};padding:6px 30px;border-radius: 4px;margin-top:5px`,callApi
      );
    const [checked, setChecked] = useState(callApi);


    const handleChange = () => {
        setChecked(!checked);
        toggleCallData()
    };
    
  return (
    <div className={`background ${checked ? 'active' : ''}`}>
        <div className={`backgroundApi ${checked ? 'active' : ''}`}></div>
        <div className="loginCardContainer"><div className="logo">
                            <img src={logo1} alt="logo run up" />
                            <img src={logo2} alt="logo run up text" />
                        </div>
                    <div className="loginContainer">
                        
                        <span className="title">Choisir un profile:</span>
                        <div className="btnUserContainer">
                            <NavLink to="/User/12">
                                <button>{callApi ? "Karl": "john" }</button>
                            </NavLink>
                            <NavLink to="/User/18">
                                <button>{callApi ? "Cecilia": "john" }</button>
                            </NavLink>
                        </div>
                        <span className="title">Data sources:</span>
                        <label className="switch">
                            <input type="checkbox" checked={checked} onChange={handleChange} />
                            <span className="slider"></span>
                        </label>
                    </div>
        </div>
    </div>
  );
};
export default Login;
