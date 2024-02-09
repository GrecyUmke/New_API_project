import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () =>{
    return(
        <div className="container-fluid">
            <div className="row border border-dark mt-5 footer">
                <div className="col-12 text-center mt-2 foot">
                   NewsAPI
                   <img src="symbol.png"/>
                   Org
                   is not responsible for the content of external sites
                </div>
            </div>
        </div>
    )
}
export default Footer;


