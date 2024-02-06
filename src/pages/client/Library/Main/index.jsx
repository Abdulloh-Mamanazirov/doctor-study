import { Button, Input } from "@mantine/core";
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
  function handleSearch(e) {
    e.preventDefault();
    const q = e.target.q.value;
    console.log(q);
  }

  return (
    <div className="max-w-6xl px-4 py-4 mx-auto">
      <div className="py-10 flex items-center justify-between gap-2">
        <h1 className="text-3xl md:text-4xl text-primary-tite font-bold capitalize">
          Library
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
    </div>
  );
};

export default index;
