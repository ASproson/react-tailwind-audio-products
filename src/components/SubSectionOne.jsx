import React from "react";

const leftImage =
  "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80";

const rightImage =
  "https://images.unsplash.com/photo-1583568671741-c75e1e2e4389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const SubSectionOne = () => {
  return (
    <div className="mt-20 mb-20 border-2 border-cyan-600 h-[600px] flex">
      <div className="flex items-center">
        <img src={leftImage} className="absolute z-10 h-[400px] ml-20" />
      </div>

      <div className="h-full w-2/4 mr-0 ml-auto bg-yellowLight z-0 relative flex">
      <div className="flex m-auto">
        <img src={rightImage} className="z-10 h-[300px]" />
      </div>
      </div>
    </div>
  );
};

export default SubSectionOne;
