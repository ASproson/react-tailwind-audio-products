import React from "react";

const HeroSection = () => {
  const heroImg =
    "https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80";

  return (
    <div>
      <div className="w-4/4 h-600">
        <img
          src={heroImg}
          alt="Guitar player"
          className="object-cover w-full h-full"
        />
        <h1 className="mx-auto text-center -mt-96 md:text-9xl text-orange font-semibold ssm:text-8xl">
          Ableton
        </h1>
      </div>
      <div className= "mt-20 w-2/4 max-w-2xl mx-auto">
        <h2 className="mb-10 text-2xl font-semibold">
            We make <span className="text-blue">Live</span>, <span className="text-blue">Push</span>, and <span className="text-blue">Link</span> - unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
        </h2>
        <p>
            Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
