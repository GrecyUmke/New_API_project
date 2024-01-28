import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import './globals.css'
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import Search from "./Search";
import YourComponent from "./data";
import Headlines from "./Headlines";

const Page = () =>{
  return(
    <>
      <Header/>
      <Search/>
      <Headlines/>
    </>
  )
}
export default Page;