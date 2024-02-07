import axios from "axios";
import { Checkbox, Input, Radio } from "@mantine/core";
import { Countdown } from "../../../../components";
import { Card, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { loadingIcon } from "../../../../assets";
import { image_url } from "../../../../constants";

function EventCard({ data, id, img, title, desc }) {
  return (
    <Card shadow="sm" padding="xl" component={Link} to={id} state={data}>
      <Card.Section>
        <Image
          src={
            img
              ? image_url + img
              : "https://www.shutterstock.com/image-vector/medical-conference-clinic-group-meeting-260nw-1721618806.jpg"
          }
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md" lineClamp={3}>
        {title}
      </Text>

      <Text mt="xs" c="dimmed" size="sm" lineClamp={6}>
        {desc}
      </Text>
    </Card>
  );
}

const index = () => {
  const [filter, setFilter] = useState({
    cities: [],
    fields: [],
    format: null,
    speakers: [],
  });
  const [data, setData] = useState();
  const [cities, setCities] = useState();
  const [fields, setFields] = useState();
  const [speakers, setSpeakers] = useState();
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  async function fetchData() {
    const res = await axios.get("/webinars").finally(() => setLoading(false));
    setData(res?.data);
    const cities = await axios.get("/webinars/city");
    setCities(cities?.data);
    const fields = await axios.get("/webinars/field");
    setFields(fields?.data);
    const speakers = await axios.get("/speakers");
    setSpeakers(speakers?.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

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

  function filterData(data, filter) {
    return data.filter((item) => {
      // Filter by city
      if (filter.cities.length > 0 && !filter.cities.includes(item.city)) {
        return false;
      }

      // Filter by field
      if (filter.fields.length > 0 && !filter.fields.includes(item.field)) {
        return false;
      }

      // Filter by format
      if (filter.format !== null && filter.format !== item?.online) {
        return false;
      }

      // Filter by speakers
      if (filter.speakers.length > 0) {
        const speakerIds = item.speakers.map((speaker) => speaker.fullName);
        if (!filter.speakers.some((id) => speakerIds.includes(id))) {
          return false;
        }
      }

      return true;
    });
  }

  if (loading) {
    return (
      <div className="w-full grid place-items-center h-[50vh]">
        <img src={loadingIcon} alt="loading" className="max-w-24" />
      </div>
    );
  }

  return (
    <section>
      <Countdown
        startDate={new Date(findClosestDate(data)?.time)}
        title={findClosestDate(data)?.[`title_${lang}`]}
        data={findClosestDate(data)}
      />
      <div className="grid sm:items-start sm:grid-cols-[20%,1fr] pt-3">
        <div className="sm:min-h-screen px-4 mb-5 sm:mb-0">
          {/* cities */}
          <details className="block sm:hidden pb-1 border-b border-gray-400">
            <summary className="text-lg font-bold mb-2">Cities</summary>
            <Checkbox.Group
              className="ml-3"
              onChange={(e) => setFilter((old) => ({ ...old, cities: e }))}
            >
              {cities?.map?.((item, ind) => (
                <Checkbox key={ind} value={item} label={item} mb={5} />
              ))}
            </Checkbox.Group>
          </details>
          <div className="mt-10 hidden sm:block">
            <h4 className="text-lg font-bold mb-2">Cities</h4>
            <Checkbox.Group
              className="ml-3"
              onChange={(e) => setFilter((old) => ({ ...old, cities: e }))}
            >
              {cities?.map?.((item, ind) => (
                <Checkbox key={ind} value={item} label={item} mb={5} />
              ))}
            </Checkbox.Group>
          </div>
          {/* fields */}
          <details className="mt-5 block sm:hidden pb-1 border-b border-gray-400">
            <summary className="text-lg font-bold mb-2">Fields</summary>
            <Checkbox.Group
              className="ml-3"
              onChange={(e) => setFilter((old) => ({ ...old, fields: e }))}
            >
              {fields?.map?.((item, ind) => (
                <Checkbox key={ind} value={item} label={item} mb={5} />
              ))}
            </Checkbox.Group>
          </details>
          <div className="mt-10 hidden sm:block">
            <h4 className="text-lg font-bold mb-2">Fields</h4>
            <Checkbox.Group
              className="ml-3"
              onChange={(e) => setFilter((old) => ({ ...old, fields: e }))}
            >
              {fields?.map?.((item, ind) => (
                <Checkbox key={ind} value={item} label={item} mb={5} />
              ))}
            </Checkbox.Group>
          </div>
          {/* format */}
          <details className="mt-5 block sm:hidden pb-1 border-b border-gray-400">
            <summary className="text-lg font-bold mb-2">Format</summary>
            <Radio.Group
              onChange={(e) =>
                setFilter((old) => ({ ...old, format: e === "true" }))
              }
            >
              <Radio value={"true"} label="Online" mb={5} />
              <Radio value={"false"} label="Hybrid" mb={5} />
            </Radio.Group>
          </details>
          <div className="mt-10 hidden sm:block">
            <h4 className="text-lg font-bold mb-2">Format</h4>
            <Radio.Group
              onChange={(e) =>
                setFilter((old) => ({ ...old, format: e === "true" }))
              }
            >
              <Radio value={"true"} label="Online" mb={5} />
              <Radio value={"false"} label="Hybrid" mb={5} />
            </Radio.Group>
          </div>
          {/* speakers */}
          <details className="mt-5 block sm:hidden pb-1 border-b border-gray-400">
            <summary className="text-lg font-bold mb-2">Speakers</summary>
            <Checkbox.Group
              className="ml-3"
              onChange={(e) => setFilter((old) => ({ ...old, speakers: e }))}
            >
              {speakers?.map?.((item, ind) => (
                <Checkbox
                  key={ind}
                  value={item?.fullName}
                  label={item?.fullName}
                  mb={5}
                />
              ))}
            </Checkbox.Group>
          </details>
          <div className="mt-10 hidden sm:block">
            <h4 className="text-lg font-bold mb-2">Speakers</h4>
            <Checkbox.Group
              className="ml-3"
              onChange={(e) => setFilter((old) => ({ ...old, speakers: e }))}
            >
              {speakers?.map?.((item, ind) => (
                <Checkbox
                  key={ind}
                  value={item?.fullName}
                  label={item?.fullName}
                  mb={5}
                />
              ))}
            </Checkbox.Group>
          </div>
        </div>
        <div className="px-2 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(data) &&
            filterData(data, filter)?.map?.((item, ind) => (
              <EventCard
                key={ind}
                data={item}
                id={String(item?.id)}
                img={item?.file}
                title={item[`title_${lang}`]}
                desc={item[`description_${lang}`]}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default index;
