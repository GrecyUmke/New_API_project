import React from "react";
import Header from "./Header";
import Search from "./Search";
import Headlines from "./Headlines";
import Footer from "./Footer";
import News_row from "./News_row";
import data from "./data.js";

const Page = () =>{
  return(
    <>
      <Header/>
      <Search/>
      <Headlines/>
      <News_row index={data}/>
      <Footer/>
    </>
  )
}
export default Page;