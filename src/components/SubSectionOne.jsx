import React from "react";

const SubSectionOne = () => {
  const leftImage =
    "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80";

  const rightImage = "https://images.unsplash.com/photo-1583568671741-c75e1e2e4389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"

  return (
    <div class="mt-20 mb-20 flex justify-center items-center">
      <div id="yellow-container" className="ml-[850px] mr-96 flex absolute bg-yellowLight w-3/6 z-0 h-2/4  justify-center items-center">
        <div id="yellow-container-image">
          <div className="absolute inset-0 flex justify-center items-center z-10 ml-96 ">
            <img src={ rightImage } alt="Ableton push" className="w-500 h-400 flex-shrink-0 object-cover"/>
          </div>
        </div>
      </div>
      <div id="image-container-one" className="w-600 h-600 relative">
        <div className="absolute inset-0 flex justify-center items-center z-10 -ml-[600px]">
          <img src={ leftImage } alt="Midi recording setup" className="w-700" />
        </div>
      </div>
    </div>
  );
};

export default SubSectionOne;
