import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Header = ()=>{
    return(
        <>
        <div className="container-fluid">
            <div className=" col-12 nav justify-content-center">
                <img src="Header.png"/>
            </div>
            <div className="col-12 border border-dark" style={{height:"10px"}}></div>
        </div>
        </>
        
    )
}
export default Header;
