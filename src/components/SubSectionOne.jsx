import React from "react";

const leftImage =
  "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80";


const SubSectionOne = () => {
  return (
    <div className="mt-20 mb-20 lg:h-[800px] md:h-[400px] w-auto flex justify-center mr-20 ml-20">
      <img src={leftImage} alt="Ableton midi setup in the studio"/>
    </div>
  );
};

export default SubSectionOne;
