import React from "react";
import { ShowcaseBg } from "../../../../../assets";

const Card = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <h4 className="text-4xl font-extrabold text-white">110+</h4>
        <p className="text-xl font-bold text-white">lorem to lorem</p>
        <p className="mt-7 text-white font-semibold">
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
    <div
      className={`relative w-full bg-center`}
      style={{ backgroundImage: `url(${ShowcaseBg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative pt-7 pb-3">
        <h1 className="text-center text-5xl text-white font-bold leading-tight">
          Medical educational portal <br />{" "}
          <span className="font-extrabold">"DOCTOR-STUDY"</span>
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
