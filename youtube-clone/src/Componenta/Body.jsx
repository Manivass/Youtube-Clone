import React from "react";
import Slidebar from "./Slidebar";
import VideoContainer from "./VedioContainer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Body = () => {
  return (
    <div >
      <Header />
      <div className="grid grid-flow-col">
        <Slidebar />
        <Outlet className="p-5"/>
      </div>
    </div>
  );
};

export default Body;
