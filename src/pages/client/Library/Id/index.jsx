import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { PdfId } from "../../../../assets";
import { image_url } from "../../../../constants";

const index = () => {
  const { state } = useLocation();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-5 ">
      <div className="flex items-start">
        <div className="w-60">
          <img
            src={PdfId}
            alt="doctor study book"
            className="w-full aspect-square"
          />
        </div>
        <div>
          <p className="text-xl mt-5">{state?.[`description_${lang}`]}</p>
          <a
            href={image_url + state?.fileLink}
            target={"_blank"}
            className="text-blue-600 underline underline-offset-2 hover:text-violet-600"
          >
            Download here
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
