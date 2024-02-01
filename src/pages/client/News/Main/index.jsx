import React from "react";
import { Link } from "react-router-dom";
import { News } from "../../../../assets";

const NewsCard = ({ id, image, date, title, desc }) => {
  return (
    <Link
      to={`/news/${id}`}
      className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border gap-2"
    >
      <div>
        <img
          src={
            image ??
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          }
          alt="doctor study news image"
          className="object-cover w-full rounded-md h-96 max-h-96 md:h-full"
        />
      </div>
      <div className="px-4 py-4 lg:px-2 ">
        <p className="text-sm md:text-base font-medium text-gray-600">{date}</p>
        <div className="w-8 pb-1 mb-4 border-b border-gray-600"></div>
        <h2 className="mt-2 mb-4 text-xl md:text-2xl font-semibold text-gray-600 line-clamp-3 md:line-clamp-2">
          {title}
        </h2>
        <p className="mb-4 text-sm md:text-base text-gray-500 line-clamp-3">
          {desc}
        </p>
      </div>
    </Link>
  );
};

const index = () => {
  return (
    <section className="flex items-center py-5 lg:py-10">
      <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-10 ">
        <div className="mb-10 text-center">
          <h1 className="text-2xl md:text-4xl text-primary-tite font-bold capitalize">
            News
          </h1>
        </div>
        {new Array(5).fill(null).map((_, ind) => (
          <NewsCard
            key={ind}
            id={ind}
            image={ind % 2 === 0 ? News : null}
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
