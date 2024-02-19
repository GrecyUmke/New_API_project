import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const News_article = ({index}) =>{
    return(
        <div className="col-12 col-md-4 headline-box">
            <img className="cricket-image" src={index.image}/>
            <div className="article-heading">
                {index.Heading}
            </div>  
            <div className="article-news">
                {index.Description}
            </div>
            <span className="read-more">Read full article</span>
            <img src="arrow.png" className="arrow-image"></img>
        </div>
    )
}

export default News_article;