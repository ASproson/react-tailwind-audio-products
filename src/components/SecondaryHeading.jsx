import React from "react";
import playButton from "../assets/play-button.png";

const SecondaryHeading = () => {
  const secondaryHeadingImg =
    "https://images.unsplash.com/photo-1585645823369-872eac766d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

  return (
    <div className="mt-20 mb-20">
      <div className="w-2/4 max-w-2xl mx-auto">
        <h2 className="mb-10 text-2xl font-semibold">
          Making music isn't easy. It takes time, effort, and learning. But when
          you're in the flow, it's incredibly rewarding.
        </h2>
        <p>
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </p>
      </div>
      <div className="mt-20 flex justify-center items-center">
        <img
          src={secondaryHeadingImg}
          alt="Man playing drums"
          className="w-4/6 md:w-3/6 top-0 left-0"
        />
        <img
          src={playButton}
          alt="play button overlay"
          className="absolute h-20 w-20 z-10 md:h-36 md:w-36"
        />
      </div>
        {/* <div className="mt-1">
          <figcaption className="text-sm">
            Why Ableton - Juande Bolivar
          </figcaption>
        </div> */}
    </div>
  );
};

export default SecondaryHeading;
