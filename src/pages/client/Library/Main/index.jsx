import React from "react";
import { Link } from "react-router-dom";
import { Pdf } from "../../../../assets";

const LibraryCard = (props) => {
  return (
    <Link
      to={`/library/${props?.id}`}
      state={props}
      className="border border-gray-300 rounded-md flex"
    >
      <div className="w-full">
        <img src={Pdf} alt="video image" className="w-52 aspect-square" />
      </div>
      <div className="p-1">
        <h3 className="text-xl font-bold text-primary-tite line-clamp-2">
          {props?.title}
        </h3>
        <p className="text-sm line-clamp-3">{props?.desc}</p>
      </div>
    </Link>
  );
};

const index = () => {
  return (
    <div className="max-w-6xl px-4 py-4 mx-auto text-left lg:py-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {new Array(7).fill(null).map((_, ind) => (
        <LibraryCard
          key={ind}
          id={ind}
          title={ind + " Book title goes here"}
          desc={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione consequatur, ellat unde expedita incidunt quas nulla iste accusantium!"
          }
        />
      ))}
    </div>
  );
};

export default index;
