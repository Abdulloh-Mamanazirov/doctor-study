import { Button, Input } from "@mantine/core";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { loadingIcon, Pdf } from "../../../../assets";

const LibraryCard = (props) => {
  return (
    <Link
      to={`/library/${props?.id}`}
      state={props?.data}
      className="border border-gray-300 rounded-md grid grid-cols-3"
    >
      <div className="w-full">
        <img src={Pdf} alt="video image" className="w-52 aspect-square" />
      </div>
      <div className="p-1 col-span-2">
        <p className="text-sm line-clamp-5">{props?.desc}</p>
      </div>
    </Link>
  );
};

const index = () => {
  const [q, setQ] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  async function fetchData() {
    const res = await axios.get("/resources").finally(() => setLoading(false));
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
          Library
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
            <LibraryCard
              key={item?.id}
              id={item?.id}
              data={item}
              desc={item?.[`description_${lang}`]}
            />
          ))}
      </div>
    </div>
  );
};

export default index;
