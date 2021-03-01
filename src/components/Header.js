import React from "react";
import "./header.css";

import Logo from "../images/logoMarlonGarcia_02.png";

const Header = () => {
    return (
        <div className="container-fluid mt-0 line d-flex justify-content-between align-items-end mb-5">
            
            <img className="logo" src={Logo} alt="Logo Marlon García"></img>
            <h3 className="text-second">Web administration link</h3>
        </div>
    );
};

export default Header;
