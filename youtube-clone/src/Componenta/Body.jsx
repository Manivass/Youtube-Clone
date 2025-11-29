import React from "react";
import Slidebar from "./Slidebar";
import VideoContainer from "./VedioContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Slidebar />
      <Outlet />
    </div>
  );
};

export default Body;
