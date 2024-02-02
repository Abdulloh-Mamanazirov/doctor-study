import React from "react";
import { useLocation } from "react-router-dom";

const index = () => {
  const { state } = useLocation();
  let vid_id = state?.video.split("?")[0].split("/")[3];

  return (
    <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-5 ">
      <p className="text-center text-gray-500 font-bold mb-3">{state?.date}</p>
      <iframe
        src={`https://www.youtube.com/embed/${vid_id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-2/3 h-[400px] mx-auto"
        allowfullscreen
      ></iframe>
      <h1 className="text-2xl md:text-4xl font-bold text-primary-tite text-center mt-5">
        {state?.title}
      </h1>
      <p className="text-lg text-center mt-5">{state?.desc}</p>
    </div>
  );
};

export default index;
