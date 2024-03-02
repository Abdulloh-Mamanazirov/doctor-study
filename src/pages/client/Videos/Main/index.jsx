import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { loadingIcon } from "../../../../assets";

const VideoCard = (props) => {
  let img = props?.video?.split("?")[0].split("/")[3];
  return (
    <Link
      to={`/video-materials/${props?.id}`}
      state={props?.data}
      className="border border-gray-300 rounded-md"
    >
      <div className="w-full">
        <img
          src={`https://i.ytimg.com/vi/${img}/maxresdefault.jpg`}
          alt="video image"
          className="w-full h-full"
        />
      </div>
      <div className="p-1">
        <h3 className="text-xl font-bold text-primary-tite mt-3 line-clamp-2">
          {props?.title}
        </h3>
        <p className="text-sm line-clamp-3">{props?.desc}</p>
        <p className="text-sm font-extrabold text-gray-500 mt-5">
          {props?.date}
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
    const res = await axios.get("/materials").finally(() => setLoading(false));
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
    <div className="max-w-6xl px-4 py-4 mx-auto">
      <div className="py-10 flex items-center justify-between gap-2">
        <h1 className="text-3xl md:text-4xl text-primary-tite font-bold capitalize">
          {t("videos")}
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
      <div className="text-left lg:py-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {data
          ?.filter(
            (item) =>
              item?.description_uz?.toLowerCase()?.includes(q) ||
              item?.description_ru?.toLowerCase()?.includes(q) ||
              item?.description_en?.toLowerCase()?.includes(q)
          )
          ?.map((item) => (
            <VideoCard
              key={item?.id}
              id={item?.id}
              data={item}
              video={item?.link}
              title={item?.[`title_${lang}`]}
              desc={item?.[`description_${lang}`]}
              date={new Date(item?.createdDate).toLocaleDateString()}
            />
          ))}
      </div>
    </div>
  );
};

export default index;
