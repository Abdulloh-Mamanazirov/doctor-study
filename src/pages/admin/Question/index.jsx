import { Card, Group, Table } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteQuestion from "./DeleteQuestion";
import EditQuestion from "./EditQuestion";
import PostQuestion from "./PostQuestion";
import { Link } from "react-router-dom";

const index = () => {
  const [data, setData] = useState([]);
  async function getData() {
    await axios
      .get(`test${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        toast.error("error during get data");
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <PostQuestion getData={getData} />
      <div className="md:mt-10 grid lg:grid-cols-3 w-full md:grid-cols-2 gap-3">
        {/* {data?.length > 0 ? ( */}
        {
          data.map((item) => {
            return (
              <Link to={`${item.id}`}>
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
                      <EditQuestion getData={getData} item={item} />
                    </Button>
                    <Button color="red" className="flex" fullWidth>
                      <DeleteQuestion getData={getData} item={item} />
                    </Button>
                  </div>
                </Card>
              </Link>
            );
          })
          // ) : (
          //   <div className="grid place-content-center col-span-3">
          //     <div className=" items-center gap-3">
          //       <img src="/empty.png" alt="no data" width={100} />
          //       <p className="text-gray-500">No data available.</p>
          //     </div>
          //   </div>
          // )}
        }
      </div>
    </div>
  );
};

export default index;
