import React from "react"
import "bootstrap/dist/css/bootstrap.css";


const Search = () =>{
    return(
        <div className="container">
            <div className="row align-item-center">
                <div className="text-center mt-4">
                    <input type="text" value="Search" id="search" style={{height:"60px", width:"303px" }}/>
                    <input type="submit" value="Go" id="button" style={{height:"61px", width:"61px" ,background:"#E84848"}}/>
                    <div id="box"></div>
                </div>
            </div>
        </div>
    );
};
export default Search;