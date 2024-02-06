import { Button, Input } from "@mantine/core";
import { data } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = (props) => {
  let img = props?.video.split("?")[0].split("/")[3];
  return (
    <Link
      to={`/video-materials/${props?.id}`}
      state={props}
      className="border border-gray-300 rounded-md"
    >
      <div className="w-full">
        <img
          src={`https://i.ytimg.com/vi/${img}/maxresdefault.jpg`}
          alt="video image"
          className="w-full h-full"
        />
      </div>
      <div className="p-1">
        <h3 className="text-xl font-bold text-primary-tite mt-3 line-clamp-2">
          {props?.title}
        </h3>
        <p className="text-sm line-clamp-3">{props?.desc}</p>
        <p className="text-sm font-extrabold text-gray-500 mt-5">
          {props?.date}
        </p>
      </div>
    </Link>
  );
};

const index = () => {
  function handleSearch(e) {
    e.preventDefault();
    const q = e.target.q.value;
    console.log(q);
  }

  return (
    <div className="max-w-6xl px-4 py-4 mx-auto">
      <div className="py-10 flex items-center justify-between gap-2">
        <h1 className="text-3xl md:text-4xl text-primary-tite font-bold capitalize">
          Videos
        </h1>
        <form onSubmit={handleSearch} className="flex items-center">
          <Input name="q" type={"search"} />
          <Button type="submit" variant={"light"}>
            <span role={"button"} className="fa-solid fa-search" />
          </Button>
        </form>
      </div>
      <div className="text-left lg:py-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {new Array(7).fill(null).map((_, ind) => (
          <VideoCard
            key={ind}
            id={ind}
            video={
              ind % 2 === 0
                ? "https://youtu.be/a6IIhwZv4ls?si=073d7TXqwpKHA0zI"
                : "https://youtu.be/8xI10SFgzQ8?si=rltzXwPjWopF8ge_"
            }
            title={"Video title goes here"}
            desc={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione consequatur, ellat unde expedita incidunt quas nulla iste accusantium!"
            }
            date={"25-01-2024"}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
