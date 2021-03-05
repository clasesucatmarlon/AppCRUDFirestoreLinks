import React from "react";
import "./header.css";

import Logo from "../images/logoMarlonGarcia_02.png";

const Header = () => {
    return (
        <div className="container-fluid mt-0 line d-flex flex-column  mb-5">
            
            <img className="logo ml-auto mr-auto" src={Logo} alt="Logo Marlon García"></img>
            <h3 className="text-second ml-auto mr-auto text-center">Link administration</h3>
        </div>
    );
};

export default Header;
