import React from "react"
import "bootstrap/dist/css/bootstrap.css";
import data from './data.js' 


const Search = () =>{
    return(
        <div className="col-12 nav justify-content-center" style={{marginTop:"40px"}}>
            <input type="text" id="search"/>
            <input type="submit"value="Search" id="button"/>
            <div id="box"></div>
        </div>
    );
};
export default Search;