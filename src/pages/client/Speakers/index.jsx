import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { loadingIcon } from "../../../assets";
import { image_url } from "../../../constants";

const SpeakerCard = ({ image, name, job, desc }) => {
  return (
    <div className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] gap-2">
      <div>
        <img
          src={
            image ??
            "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg"
          }
          alt="doctor study speaker image"
          className="object-cover aspect-square rounded-full h-80 max-h-80"
        />
      </div>
      <div className="px-4 py-4 lg:px-2">
        <h3 className="text-xl md:text-2xl font-medium text-gray-600 mb-2">
          {name}
        </h3>
        <p className="text-base md:text-lg text-gray-700">{job}</p>
        <div className="w-24 pb-1 mb-4 border-b border-gray-600"></div>
        <p className="mb-4 text-sm md:text-base text-gray-500 line-clamp-3">
          {desc}
        </p>
      </div>
    </div>
  );
};

const index = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(`description_${i18n.language}`);

  async function fetchData() {
    const res = await axios.get("/speakers").finally(() => setLoading(false));
    setData(res?.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setLang(`description_${i18n.language}`);
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
            {t("speakers_link")}
          </h1>
        </div>
        {data?.map?.((item) => (
          <SpeakerCard
            key={item?.id}
            image={image_url + item?.link}
            name={item?.fullName}
            job={item?.job}
            desc={item[lang]}
          />
        ))}
      </div>
    </section>
  );
};

export default index;
