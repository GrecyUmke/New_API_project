import React from "react"
import "bootstrap/dist/css/bootstrap.css";


const Search = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="text-center">
                    <input type="text" value="Search" id="search" className="searchbox"/>
                    <input type="submit" value="Go" id="button" className="gobutton"/>
                </div>
            </div>
        </div>
    );
};
export default Search;