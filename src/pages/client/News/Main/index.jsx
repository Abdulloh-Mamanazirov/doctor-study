import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { loadingIcon, News } from "../../../../assets";
import { image_url } from "../../../../constants";

const NewsCard = ({ data, id, image, date, title, desc }) => {
  return (
    <Link
      to={`/news/${id}`}
      state={data}
      className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border gap-2"
    >
      <div>
        <img
          src={image ?? News}
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
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  async function fetchData() {
    const res = await axios.get("/news").finally(() => setLoading(false));
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
    <section className="flex items-center py-5 lg:py-10">
      <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-10 ">
        <div className="mb-10 text-center">
          <h1 className="text-2xl md:text-4xl text-primary-tite font-bold capitalize">
            News
          </h1>
        </div>
        {data?.map?.((item) => (
          <NewsCard
            key={item?.id}
            data={item}
            id={item?.id}
            image={image_url + item?.link}
            date={item?.createdDate?.slice(0, 10)}
            title={item[`title_${lang}`]}
            desc={item[`description_${lang}`]}
          />
        ))}
      </div>
    </section>
  );
};

export default index;
