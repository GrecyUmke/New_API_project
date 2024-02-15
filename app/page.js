import React from "react";
import Header from "./Header";
import Search from "./Search";
import Headlines from "./Headlines";
import Footer from "./Footer";
import News_article_row from "./News_article_row";

const Page = () =>{
  return(
    <>
      <Header/>
      <Search/>
      <Headlines/>
      <News_article_row/>
      <News_article_row/>
      <News_article_row/>
      <Footer/>
    </>
  )
}
export default Page;