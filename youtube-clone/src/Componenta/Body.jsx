import React from "react";
import Slidebar from "./Slidebar";
import BodyContainer from "./BodyContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
    
      <Slidebar />
      <BodyContainer />
    </div>
  );
};

export default Body;
