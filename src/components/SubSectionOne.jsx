import React from "react";

const SubSectionOne = () => {
  const leftImage =
    "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80";

  return (
    <div className="mt-20 flex border-2 border-red-400">
      <div id="left-image" className="h-600 w-600 mt-24 absolute ml-72">
          <img src={ leftImage } alt="midi recording setup" className="rounded-lg"/>
          {/* test */}
      </div>
      <div
        id="right container"
        className="bg-yellowLight h-600 w-800 ml-auto mr-72 rounded-lg"
      >
        <div id="right-image">
          test
        </div>
      </div>
    </div>
  );
};

export default SubSectionOne;
