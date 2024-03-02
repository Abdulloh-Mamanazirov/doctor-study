import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  book,
  event,
  group,
  megaphone,
  news,
  video,
} from "../../../assets/stats_image/index";

const index = () => {
  const [data, setData] = useState([]);

  async function getData() {
    await axios
      .get("home")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        return;
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" ">
      <div className="grid grid-cols-1 md-lg:grid-cols-1 lg:grid-cols-2 gap-2 mt-5">
        <div className="border rounded-xl p-2 bg-white shadow-md shadow-black/30 grid grid-cols-3 transition-all hover:scale-[1.03]">
          <div className="col-span-2 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-black/60 whitespace-nowrap">
              Materilas
            </h3>
            <p className="text-2xl">{data.material}</p>
          </div>
          <div className="max-w-full ml-auto">
            <img src={video} alt="Icon" className="max-w-full" />
          </div>
        </div>
        <div className="border rounded-xl p-2 bg-white shadow-md shadow-black/30 grid grid-cols-3 transition-all hover:scale-[1.03]">
          <div className="col-span-2 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-black/60 whitespace-nowrap">
              News
            </h3>
            <p className="text-2xl">{data.news}</p>
          </div>
          <div className="max-w-full ml-auto">
            <img src={news} alt="Icon" className="max-w-full" />
          </div>
        </div>
        <div className="border rounded-xl p-2 bg-white shadow-md shadow-black/30 grid grid-cols-3 transition-all hover:scale-[1.03]">
          <div className="col-span-2 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-black/60 whitespace-nowrap">
              Partners
            </h3>
            <p className="text-2xl">{data.partners}</p>
          </div>
          <div className="max-w-full ml-auto">
            <img src={group} alt="Icon" className="max-w-full" />
          </div>
        </div>
        <div className="border rounded-xl p-2 bg-white shadow-md shadow-black/30 grid grid-cols-3 transition-all hover:scale-[1.03]">
          <div className="col-span-2 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-black/60 whitespace-nowrap">
              Resources
            </h3>
            <p className="text-2xl">{data.resources}</p>
          </div>
          <div className="max-w-full ml-auto">
            <img src={book} alt="Icon" className="max-w-full" />
          </div>
        </div>
        <div className="border rounded-xl p-2 bg-white shadow-md shadow-black/30 grid grid-cols-3 transition-all hover:scale-[1.03]">
          <div className="col-span-2 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-black/60 whitespace-nowrap">
              Speaker
            </h3>
            <p className="text-2xl">{data.speaker}</p>
          </div>
          <div className="max-w-full ml-auto">
            <img src={megaphone} alt="Icon" className="max-w-full" />
          </div>
        </div>
        <div className="border rounded-xl p-2 bg-white shadow-md shadow-black/30 grid grid-cols-3 transition-all hover:scale-[1.03]">
          <div className="col-span-2 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-black/60 whitespace-nowrap">
              Webinar
            </h3>
            <p className="text-2xl">{data.webinar}</p>
          </div>
          <div className="max-w-full ml-auto">
            <img src={event} alt="Icon" className="max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
