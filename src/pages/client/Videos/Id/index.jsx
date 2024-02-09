import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const index = () => {
  const { state } = useLocation();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  let vid_id = state?.link?.split("?")[0].split("/")[3];

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-5 ">
      <p className="text-center text-gray-500 font-bold mb-3">
        {new Date(state?.createdDate).toLocaleDateString()}
      </p>
      <iframe
        src={`https://www.youtube.com/embed/${vid_id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-2/3 h-[400px] mx-auto"
        allowFullScreen
      ></iframe>
      <h1 className="text-2xl md:text-4xl font-bold text-primary-tite text-center mt-5">
        {state?.[`title_${lang}`]}
      </h1>
      <p className="text-lg text-center mt-5">
        {state?.[`description_${lang}`]}
      </p>
    </div>
  );
};

export default index;
