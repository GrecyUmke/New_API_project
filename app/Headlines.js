import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Headlines = () =>{
    return(
        <div className="container">
            <div className="text-danger head-text">
                <span>TOP NEWS FROM INDIA</span>
            </div>
            <div className="row">
                <div className="col-md-4 border border-dark headline-box"></div>  
                <div className="col-md-4 border border-dark headline-box"></div>                 
                <div className="col-md-4 border border-dark headline-box"></div> 
                <div className="col-md-4 border border-dark headline-box"></div>  
                <div className="col-md-4 border border-dark headline-box"></div>                 
                <div className="col-md-4 border border-dark headline-box"></div> 
                <div className="col-md-4 border border-dark headline-box"></div>  
                <div className="col-md-4 border border-dark headline-box"></div>                 
                <div className="col-md-4 border border-dark headline-box"></div> 
            </div>
        </div>
    )
}
export default Headlines; 