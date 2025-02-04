import React from "react";

const LeftAlign = ({ leftElement, rightElement }) => {
  return (
    <div className="flex side-block">
      <div className="mr-5 ">{leftElement}</div>
      <div className="flex-grow my-0">{rightElement}</div>
    </div>
  );
};

export default LeftAlign;
