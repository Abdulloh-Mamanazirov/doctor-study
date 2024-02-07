import { About, Partners, Showcase, Speakers } from "./sections";
import { Countdown } from "../../../components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const index = () => {
  const [data, setData] = useState();
  const [partners, setPartners] = useState();
  const [events, setEvents] = useState();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  function findClosestDate(array) {
    let closestObj = null;
    let closestDiff = Infinity;

    const now = new Date();

    if (Array.isArray(array)) {
      for (let obj of array) {
        let date = new Date(obj?.time);
        let diff = Math.abs(now - date);

        if (diff < closestDiff) {
          closestDiff = diff;
          closestObj = obj;
        }
      }
    }

    return closestObj;
  }

  async function fetchData() {
    const res = await axios.get("/home");
    setData(res?.data);
    const partners = await axios.get("/partners");
    setPartners(partners?.data);
    const webinar = await axios.get("/webinars");
    setEvents(webinar?.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Showcase data={data} />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Speakers />
      </div>
      <div>
        <Partners data={partners} />
      </div>
      <div className="bg-stone-100 mt-16">
        <Countdown
          startDate={new Date(findClosestDate(events)?.time)}
          title={findClosestDate(events)?.[`title_${lang}`]}
          data={findClosestDate(events)}
        />
      </div>
    </div>
  );
};

export default index;
