import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { File } from "../../../../assets";
import { file_url, image_url } from "../../../../constants";

const index = () => {
  const downloadRef = useRef();
  const { state } = useLocation();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  const placeholderImage = File;

  const handleError = (e) => {
    if (e.target.src !== placeholderImage) {
      e.target.src = placeholderImage;
    }
    if (!downloadRef.current.href.includes("/download/")) {
      downloadRef.current.href = file_url + state?.link;
    }
  };

  return (
    <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-10 ">
      <p className="text-center text-gray-500 font-bold mb-3">{state?.date}</p>
      <img
        src={image_url + state?.link}
        onError={handleError}
        alt="doctor-s news image"
        className="w-full h-[500px] object-contain"
      />
      <div className="text-center">
        <a
          href={image_url + state?.link}
          target={"_blank"}
          ref={downloadRef}
          className="text-sky-600 hover:text-blue-500 hover:underline"
        >
          Download link
        </a>
        <h1 className="text-2xl md:text-4xl font-bold text-primary-tite mt-5">
          {state?.[`title_${lang}`]}
        </h1>
        <p className="text-lg mt-5">{state?.[`description_${lang}`]}</p>
      </div>
    </div>
  );
};

export default index;
