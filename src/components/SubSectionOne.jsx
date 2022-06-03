import React from "react";

const SubSectionOne = () => {
  const leftImage =
    "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80";

  return (
    <div className="mt-20 flex">
      <div id="left-image" className="h-600 w-600">
          {/* <img src={ leftImage } alt="midi recording setup" /> */}
      </div>
      <div
        id="right container"
        className="bg-yellowLight h-800 w-800 ml-auto mr-72"
      >
        <div id="right-image"></div>
      </div>
    </div>
  );
};

export default SubSectionOne;
