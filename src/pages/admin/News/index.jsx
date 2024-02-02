import {
  ActionIcon,
  Card,
  Group,
  Image,
  Menu,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { useEffect, useState } from "react";
import PostNews from "./PostNews";
import SeeAll from "./SeeAll";
import EditNews from "./EditNews";
import DeleteNews from "./DeleteNews";
import axios from "axios";
import { toast } from "react-toastify";

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
        toast.error(error.message);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  console.log(data, "test");

  return (
    <div>
      <PostNews getData={getData} />
      <div className="md:mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {data?.length > 0 ? (
          data.map((item) => {
            return (
              <Card withBorder shadow="sm" radius="md" key={item.id}>
                <Card.Section withBorder inheritPadding py="xs">
                  <Group justify="space-between">
                    <Text fw={500} className="line-clamp-1">
                      {item.title_en}
                    </Text>
                    <Menu
                      zIndex={10}
                      opened={open}
                      position="bottom-end"
                      shadow="sm"
                    >
                      <Menu.Target>
                        <ActionIcon
                          onClick={() => {
                            setOpen((prevOpen) => !prevOpen);
                          }}
                          variant="subtle"
                          color="gray"
                        >
                          <span
                            className="fa-solid fa-ellipsis-vertical"
                            style={{ width: rem(16), height: rem(16) }}
                          />
                        </ActionIcon>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item
                          leftSection={
                            <span
                              className="fa-solid fa-eye"
                              style={{ width: rem(14), height: rem(14) }}
                            />
                          }
                          color="gray"
                        >
                          <SeeAll getData={getData} item={item} />
                        </Menu.Item>

                        <Menu.Item
                          leftSection={
                            <span
                              className="fa-solid fa-edit"
                              style={{ width: rem(14), height: rem(14) }}
                            />
                          }
                          color="blue"
                        >
                          <EditNews getData={getData} item={item} />
                        </Menu.Item>
                        <Menu.Item
                          leftSection={
                            <span
                              className="fa-solid fa-trash"
                              style={{ width: rem(14), height: rem(14) }}
                            />
                          }
                          color="red"
                        >
                          <DeleteNews getData={getData} item={item} />
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                </Card.Section>
                <Text mt="sm" c="dimmed" size="sm">
                  {item.description_en}
                </Text>
                <Card.Section mt="sm">
                  <Image
                    src={`http://192.168.137.67:8081/api/images/${item.link}`}
                  />
                </Card.Section>
              </Card>
            );
          })
        ) : (
          <div>
            <>
              <div className="flex flex-col items-center gap-3">
                <img src="/empty.png" alt="no data" width={100} />
                <p className="text-gray-500">No data available.</p>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
