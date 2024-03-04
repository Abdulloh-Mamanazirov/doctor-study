import { Button, Card, Group, Image, Text } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { image_url } from "../../../constants";
import DeleteArticles from "./DeleteArticles";
import PostArticles from "./PostArticles";
import EditArticles from "./EditArticles";
import SeeAll from "./SeeAll";
import { File } from "../../../assets";
import { Link } from "react-router-dom";

function Index() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleBodyClick = () => {
    setOpen(true);
  };
  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  async function getData() {
    await axios
      .get("articles")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        return;
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <PostArticles getData={getData} />
      <div className="md:mt-10 grid lg:grid-cols-3 w-full md:grid-cols-2 gap-3">
        {data?.length > 0 ? (
          data.map((item) => {
            return (
              <Card withBorder shadow="sm" radius="md" key={item?.id}>
                <Card.Section withBorder inheritPadding py="xs">
                  <Group justify="space-between">
                    <Text fw={500} className="line-clamp-1">
                      {item?.title_en}
                    </Text>
                    <Link
                      to={`/admin/test-article/${item?.id}`}
                      className="bg-blue-500 text-white rounded-md shadow-lg px-3 py-1"
                    >
                      Test
                    </Link>
                  </Group>
                </Card.Section>
                <Text mt="sm" c="dimmed" size="sm" h={70} lineClamp={3}>
                  {item?.description_en}
                </Text>
                <Card.Section mt="sm">
                  <Image
                    className="max-h-full max-w-full"
                    src={image_url + item?.link}
                    onError={(e) => {
                      e.target.src = File;
                    }}
                  />
                </Card.Section>
                <div className="flex gap-1">
                  <Button fullWidth>
                    <EditArticles getData={getData} item={item} />
                  </Button>
                  <Button color="cyan" fullWidth>
                    <SeeAll getData={getData} item={item} />
                  </Button>
                  <Button color="red" className="flex" fullWidth>
                    <DeleteArticles getData={getData} item={item} />
                  </Button>
                </div>
              </Card>
            );
          })
        ) : (
          <div className="grid place-content-center col-span-3">
            <div className=" items-center gap-3">
              <img src="/empty.png" alt="no data" width={100} />
              <p className="text-gray-500">No data available.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
