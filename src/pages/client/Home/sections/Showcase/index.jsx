import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <h4 className="text-4xl font-bold text-primary-tite">110+</h4>
        <p className="text-xl font-semibold text-primary-desc">
          lorem to lorem
        </p>
        <p className="mt-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          quam.
        </p>
      </div>
      <div className="w-full">
        <img
          src="https://thumb.tildacdn.com/tild3733-6263-4162-b536-653333653866/-/resize/300x/-/format/webp/-1-06.png"
          alt="doctor s icon"
          className="w-full"
        />
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div className="w-full bg-gradient-to-b from-red-800/50">
      <div className="pt-16">
        <h1 className="text-center text-5xl text-white font-bold leading-tight">
          Medical educational portal <br /> "DOCTOR-STUDY"
        </h1>
        <div className="w-11/12 md:w-9/12 mx-auto mt-10 grid md:grid-cols-2 gap-10">
          {new Array(4).fill(null).map((_, ind) => (
            <Card key={ind} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
