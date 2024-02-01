import React from "react";
import { useLocation } from "react-router-dom";
import { Pdf } from "../../../../assets";

const index = () => {
  const { state } = useLocation();

  return (
    <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-5 ">
      <div className="flex items-start">
        <div className="w-60">
          <img
            src={Pdf}
            alt="doctor study book"
            className="w-full aspect-square"
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-tite mt-5">
            {state?.title}
          </h1>
          <p className="text-lg mt-5">{state?.desc}</p>
          <a
            href=""
            className="text-blue-600 underline underline-offset-2 hover:text-violet-600"
          >
            Download here
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
