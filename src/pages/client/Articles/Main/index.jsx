import { Button, Input } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { News } from "../../../../assets";

const ArticleCard = (props) => {
  return (
    <Link
      to={`/articles/${props?.id}`}
      state={props}
      className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border gap-2"
    >
      <div>
        <img
          src={props?.image}
          alt="doctor study news image"
          className="object-cover w-full rounded-md h-80 max-h-80 md:h-full"
        />
      </div>
      <div className="px-4 py-4 lg:px-2 ">
        <p className="text-sm md:text-base font-medium text-gray-600">
          {props?.date}
        </p>
        <div className="w-8 pb-1 mb-4 border-b border-gray-600"></div>
        <h2 className="mt-2 mb-4 text-xl md:text-2xl font-semibold text-gray-600 line-clamp-3 md:line-clamp-2">
          {props?.title}
        </h2>
        <p className="mb-4 text-sm md:text-base text-gray-500 line-clamp-3">
          {props?.desc}
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
    <section className="flex items-center py-5 lg:pb-10">
      <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:pb-10 ">
        <div className="mb-10 flex items-center justify-between gap-2">
          <h1 className="text-3xl md:text-4xl text-primary-tite font-bold capitalize">
            Articles
          </h1>
          <form onSubmit={handleSearch} className="flex items-center">
            <Input name="q" type={"search"} />
            <Button type="submit" variant={"light"}>
              <span role={"button"} className="fa-solid fa-search" />
            </Button>
          </form>
        </div>
        {new Array(5).fill(null).map((_, ind) => (
          <ArticleCard
            key={ind}
            id={ind}
            image={
              ind % 2 === 0
                ? News
                : "https://blogs.biomedcentral.com/bmcblog/files/2010/09/picture2.gif"
            }
            date={new Date().toLocaleDateString()}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qudeleniti doloribus ratione. Magnam illum sapiente aperiam cumque! Magnam animi minus minima, quisquam sint in?"
            }
          />
        ))}
      </div>
    </section>
  );
};

export default index;
