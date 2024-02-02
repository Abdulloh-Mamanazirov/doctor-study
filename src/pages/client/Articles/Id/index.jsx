import React from "react";
import { useLocation } from "react-router-dom";

const index = () => {
  const { state } = useLocation();

  return (
    <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-10 ">
      <p className="text-center text-gray-500 font-bold mb-3">{state?.date}</p>
      <img
        src={state?.image}
        alt="doctor-s news image"
        className="w-full h-[500px] object-cover"
      />
      <h1 className="text-2xl md:text-4xl font-bold text-primary-tite text-center mt-5">
        {state?.title}
      </h1>
      <p className="text-lg text-center mt-5">{state?.desc}</p>
    </div>
  );
};

export default index;
