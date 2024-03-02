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
      <div className="w-full p-3 sm:p-7">
        <img src={img} alt="doctor s icon" className="w-full rounded-md" />
      </div>
      <div className="col-span-2">
        <h4 className="text-3xl md:text-4xl font-extrabold text-white">
          {value}
        </h4>
        <p className="md:text-xl font-bold text-white">{title}</p>
        <p className="mt-2 md:mt-7 text-white font-semibold">{desc}</p>
      </div>
    </div>
  );
};

const index = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`relative w-full bg-center`}
      style={{ backgroundImage: `url(${ShowcaseBg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative pt-7 pb-3">
        <h2 className="text-center text-xl md:text-2xl text-white font-semibold leading-tight md:max-w-screen-lg mx-auto">
          {t("home.heading")}
        </h2>
        <h1 className="text-center text-3xl md:text-4xl text-white font-bold leading-tight">
          {t("home.title")} <br />{" "}
          <span className="font-extrabold text-3xl md:text-5xl">
            "DOCTOR-STUDY"
          </span>
        </h1>
        <div className="w-11/12 md:w-9/12 mx-auto mt-10 grid md:grid-cols-2 gap-10">
          <Card
            value={data?.material ?? 0}
            title={t("home.videos.title")}
            img={videoIcon}
            desc={t("home.videos.desc")}
          />
          <Card
            value={data?.webinar ?? 0}
            title={t("home.events.title")}
            img={eventsIcon}
            desc={t("home.events.desc")}
          />
          <Card
            value={data?.article ?? 0}
            title={t("home.articles.title")}
            img={articleIcon}
            desc={t("home.articles.desc")}
          />
          <Card
            value={data?.resources ?? 0}
            title={t("home.resources.title")}
            img={booksIcon}
            desc={t("home.resources.desc")}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
