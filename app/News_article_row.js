import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import News_article_cols from "./News_article_cols";

const News_article_row = () =>{
    return(
        <div className="container">
            <div className="row news-box">
                <News_article_cols/>
                <News_article_cols/>
                <News_article_cols/>
            </div>
              
        </div>
    )
}

export default News_article_row;