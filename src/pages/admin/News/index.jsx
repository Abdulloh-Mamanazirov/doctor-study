import { ActionIcon, Card, Group, Image, Menu, Text, rem } from "@mantine/core";
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
      <PostNews />
      <div className="md:mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        <Card withBorder shadow="sm" radius="md">
          <Card.Section withBorder inheritPadding py="xs">
            <Group justify="space-between">
              <Text fw={500}>News Title</Text>
              <Menu zIndex={10} opened={open} position="bottom-end" shadow="sm">
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
                    <SeeAll />
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
                    <EditNews />
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
                    <DeleteNews />
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Card.Section>
          <Text mt="sm" c="dimmed" size="sm">
            title in desc
          </Text>
          <Card.Section mt="sm">
            <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
          </Card.Section>
        </Card>
      </div>
    </div>
  );
}

export default Index;
