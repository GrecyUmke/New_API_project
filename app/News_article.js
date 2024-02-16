import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const News_article = () =>{
    return(
        <div className="col-12 col-md-4 headline-box">
            <img src="Virat.png" className="cricket-image"/>
            <div className="article-heading">
                <span>Echoes of Defeat:A Personal Reflection on India’s 2023 World Cup Loss</span>
            </div>  
            <div className="article-news">
                <span>The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....</span>
            </div>
            <span className="read-more">Read full article</span>
            <img src="arrow.png" className="arrow-image"></img>
        </div>
    )
}

export default News_article;