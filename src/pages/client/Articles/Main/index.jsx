import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Input } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { loadingIcon, File } from "../../../../assets";
import { image_url } from "../../../../constants";

const ArticleCard = (props) => {
  const placeholderImage = File;

  const handleError = (e) => {
    if (e.target.src !== placeholderImage) {
      e.target.src = placeholderImage;
    }
  };

  return (
    <Link
      to={`/articles/${props?.id}`}
      state={props?.data}
      className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border gap-2"
    >
      <div>
        <img
          src={image_url + props?.image}
          onError={handleError}
          alt="doctor study news image"
          className="object-contain w-full rounded-md h-80 max-h-80 md:h-full"
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
  const [q, setQ] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  async function fetchData() {
    const res = await axios.get("/articles").finally(() => setLoading(false));
    setData(res?.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  if (loading) {
    return (
      <div className="w-full grid place-items-center h-[50vh]">
        <img src={loadingIcon} alt="loading" className="max-w-24" />
      </div>
    );
  }

  return (
    <section className="flex items-center py-5 lg:pb-10">
      <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:pb-10 ">
        <div className="mb-10 flex items-center justify-between gap-2">
          <h1 className="text-3xl md:text-4xl text-primary-tite font-bold capitalize">
            {t("articles")}
          </h1>
          <form className="flex items-center">
            <Input
              onChange={(e) => setQ(e.target.value?.toLowerCase())}
              type={"search"}
            />
            <Button type="button" variant={"light"}>
              <span role={"button"} className="fa-solid fa-search" />
            </Button>
          </form>
        </div>
        {data
          ?.filter(
            (item) =>
              item?.title_uz?.toLowerCase()?.includes(q) ||
              item?.title_ru?.toLowerCase()?.includes(q) ||
              item?.title_en?.toLowerCase()?.includes(q)
          )
          ?.map?.((item) => (
            <ArticleCard
              key={item?.id}
              id={item?.id}
              data={item}
              image={item?.link}
              date={new Date(item?.createdDate).toLocaleDateString()}
              title={item?.[`title_${lang}`]}
              desc={item?.[`description_${lang}`]}
            />
          ))}
      </div>
    </section>
  );
};

export default index;
