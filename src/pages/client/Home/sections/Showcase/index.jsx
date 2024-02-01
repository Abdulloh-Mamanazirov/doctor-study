import React from "react";
import { ShowcaseBg } from "../../../../../assets";

const Card = ({ value, title, desc, img }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <h4 className="text-4xl font-extrabold text-white">{value}</h4>
        <p className="text-xl font-bold text-white">{title}</p>
        <p className="mt-7 text-white font-semibold">{desc}</p>
      </div>
      <div className="w-full">
        <img src={img} alt="doctor s icon" className="w-full" />
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div
      className={`relative w-full bg-center`}
      style={{ backgroundImage: `url(${ShowcaseBg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative pt-7 pb-3">
        <h1 className="text-center text-5xl text-white font-bold leading-tight">
          Medical educational portal <br />{" "}
          <span className="font-extrabold">"DOCTOR-STUDY"</span>
        </h1>
        <div className="w-11/12 md:w-9/12 mx-auto mt-10 grid md:grid-cols-2 gap-10">
          <Card
            value={"120+"}
            title={"Video materials available"}
            img={
              "https://thumb.tildacdn.com/tild3935-3431-4532-a363-393365653636/-/resize/300x/-/format/webp/-1-05.png"
            }
            desc={
              "Eveniet consectetur expedita, nulla laborum dicta nesciunt culpa officia magni neque voluptatibus ducimus, et sapiente."
            }
          />
          <Card
            value={"10+"}
            title={"Events every month"}
            img={
              "https://thumb.tildacdn.com/tild3733-6263-4162-b536-653333653866/-/resize/300x/-/format/webp/-1-06.png"
            }
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur iure at. Quisquam ex ."
            }
          />
          <Card
            value={"50+"}
            title={"Online articles available"}
            img={
              "https://thumb.tildacdn.com/tild3734-6136-4534-b835-653030623031/-/resize/300x/-/format/webp/-1-03.png"
            }
            desc={
              "Nulla laborum dicta nesciunt culpa officia magni neque  sapiente. Adipisicing elit. Possimus aspernatur iure at. Quisquam ex."
            }
          />
          <Card
            value={"30+"}
            title={"Useful resources"}
            img={
              "https://thumb.tildacdn.com/tild3530-6662-4364-b939-306633633936/-/resize/300x/-/format/webp/-1-02.png"
            }
            desc={
              "Culpa officia magni neque voluptatibus ducimus, et sapiente.consectetur adipisicing elit. Possimus aspernatur iure at. Quisquam ex."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default index;
