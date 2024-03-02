import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { News } from "../../../../assets";
import { image_url } from "../../../../constants";

const index = () => {
  const { state } = useLocation();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-10 ">
      <img
        src={state?.link ? image_url + state?.link : News}
        alt="doctor-s news image"
        className="w-full h-[500px] object-cover"
      />
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
