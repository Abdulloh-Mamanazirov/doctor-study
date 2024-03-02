import { Button, Card, Group, Image, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import PostNews from "./PostNews";
import SeeAll from "./SeeAll";
import EditNews from "./EditNews";
import DeleteNews from "./DeleteNews";
import axios from "axios";
import { image_url } from "../../../constants";

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
      .get("news")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        return;
      });
  }
  useEffect(() => {
    getData();
  }, []);
  const handleMenuToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log(`Menu opened: ${open}`);
  };
  return (
    <div>
      <PostNews getData={getData} />
      <div className="md:mt-10 grid lg:grid-cols-3 w-full md:grid-cols-2 gap-3">
        {data?.length > 0 ? (
          data.map((item) => {
            return (
              <Card withBorder shadow="sm" radius="md" key={item.id}>
                <Card.Section withBorder inheritPadding py="xs">
                  <Group justify="space-between">
                    <Text fw={500} className="line-clamp-1">
                      {item.title_en}
                    </Text>
                  </Group>
                </Card.Section>
                <Text mt="sm" c="dimmed" size="sm">
                  {item.description_en}
                </Text>
                <Card.Section mt="sm">
                  <Image src={image_url + item.link} />
                </Card.Section>
                <div className="flex gap-1">
                  <Button fullWidth>
                    <EditNews getData={getData} item={item} />
                  </Button>
                  <Button color="cyan" fullWidth>
                    <SeeAll getData={getData} item={item} />
                  </Button>
                  <Button color="red" className="flex" fullWidth>
                    <DeleteNews getData={getData} item={item} />
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
