import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import News_article from "./News_article";

const News_row = () =>{
    return(
        <div className="container">
            <div className="row news-box">
                <News_article/>
                <News_article/>
                <News_article/>
            </div>
              
        </div>
    )
}

export default News_row;