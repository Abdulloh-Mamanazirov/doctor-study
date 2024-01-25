import React from "react";
import {
  book,
  event,
  video,
  group,
  megaphone,
  news,
  text,
  user,
} from "../../../assets/stats_image/index";

const index = () => {
  return (
    <div className="mx-auto  flex min-h-[840px] min-w-full max-w-screen-lg flex-col gap-8 rounded-lg bg-white shadow-2xl md:container ">
      <div className="grid grid-cols-1 md-lg:grid-cols-1 lg:grid-cols-2 gap-2 mt-5">
        {new Array(8).fill("").map((item, index) => {
          return (
            <div
              key={index}
              className="border rounded-xl p-2 bg-white shadow-md shadow-black/30 grid grid-cols-3 transition-all hover:scale-[1.03]"
            >
              <div className="col-span-2 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-black/60 whitespace-nowrap">
                  your title
                </h3>
                <p className="text-2xl">your value</p>
              </div>
              <div className="max-w-full ml-auto">
                <img src={book} alt="Icon" className="max-w-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
