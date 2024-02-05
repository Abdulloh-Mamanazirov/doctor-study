import React from "react";
import { useTranslation } from "react-i18next";
import {
  ShowcaseBg,
  articleIcon,
  booksIcon,
  videoIcon,
  eventsIcon,
} from "../../../../../assets";

const Card = ({ value, title, desc, img }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="w-full p-7">
        <img src={img} alt="doctor s icon" className="w-full" />
      </div>
      <div className="col-span-2">
        <h4 className="text-4xl font-extrabold text-white">{value}</h4>
        <p className="text-xl font-bold text-white">{title}</p>
        <p className="mt-7 text-white font-semibold">{desc}</p>
      </div>
    </div>
  );
};

const index = () => {
  const { t } = useTranslation();
  return (
    <div
      className={`relative w-full bg-center`}
      style={{ backgroundImage: `url(${ShowcaseBg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative pt-7 pb-3">
        <h1 className="text-center text-5xl text-white font-bold leading-tight">
          {t("home.title")} <br />{" "}
          <span className="font-extrabold">"DOCTOR-STUDY"</span>
        </h1>
        <div className="w-11/12 md:w-9/12 mx-auto mt-10 grid md:grid-cols-2 gap-10">
          <Card
            value={"120+"}
            title={t("home.videos.title")}
            img={videoIcon}
            desc={
              "Eveniet consectetur expedita, nulla laborum dicta nesciunt culpa officia magni neque voluptatibus ducimus, et sapiente."
            }
          />
          <Card
            value={"10+"}
            title={t("home.events.title")}
            img={eventsIcon}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur iure at. Quisquam ex ."
            }
          />
          <Card
            value={"50+"}
            title={t("home.articles.title")}
            img={articleIcon}
            desc={
              "Nulla laborum dicta nesciunt culpa officia magni neque  sapiente. Adipisicing elit. Possimus aspernatur iure at. Quisquam ex."
            }
          />
          <Card
            value={"30+"}
            title={t("home.resources.title")}
            img={booksIcon}
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
