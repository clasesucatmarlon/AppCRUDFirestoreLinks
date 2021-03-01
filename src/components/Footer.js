import React from "react";

import Logo from "../images/logoMarlonGarcia_02.png";
import './footer.css';

const Footer = () => {
    return (
        <div className="p-3 d-flex flex-column justify-content-center ">

            <div className="d-flex justify-content-center mb-3">
                <img className="logoFooter" src={Logo} alt="Logo" />
            </div>
            <div className="d-flex justify-content-center">
                <p>Marlon García&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Medellín, 2021</p>
            </div>

            <div className="d-flex justify-content-center">
                <spam className="font-weight-bold text-warning">email:&nbsp;&nbsp;&nbsp;&nbsp;</spam> 
                <p>clasesucatmarlon@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;
