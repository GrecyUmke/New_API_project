import React from "react";
import Header from "./Header";
import Search from "./Search";
import Headlines from "./Headlines";
import Footer from "./Footer";
import News_row from "./News_row";

const Page = () =>{
  return(
    <>
      <Header/>
      <Search/>
      <Headlines/>
      <News_row/>
      <News_row/>
      <News_row/>
      <Footer/>
    </>
  )
}
export default Page;