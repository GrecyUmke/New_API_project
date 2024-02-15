import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () =>{
    return(
        <div className="container-fluid">
            <div className="row border border-dark mt-5 footer">
                <div className="col-12 text-center mt-2">
                   <span className="News-text">NewsAPI</span>
                   <img src="symbol.png"/>
                   <span className="News-text">Org</span>
                   <span className="footer-text"> is not responsible for the content of external sites</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;


