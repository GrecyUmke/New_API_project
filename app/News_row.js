import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import News_article from "./News_article";
import data from "./data.js";

const News_row = ({index}) =>{
    return(
        <div className="container">
            <div className="row news-box">
                <News_article index={index[0]}/>
                <News_article index={index[1]}/>
                <News_article index={index[2]}/>
                <News_article index={index[3]}/>
                <News_article index={index[4]}/>
                <News_article index={index[5]}/>
                <News_article index={index[6]}/>
                <News_article index={index[7]}/>
                <News_article index={index[8]}/>
            </div>
        </div>
    )
}

export default News_row;