import { Table } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { image_url } from "../../../constants/url";
import DeleteEvents from "./DeleteEvents";
import EditEvents from "./EditEvents";
import PostEvents from "./PostEvents";
import SeeAll from "./SeeAll";

const index = () => {
  const [data, setData] = useState([]);

  async function getData() {
    await axios
      .get("webinars")
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

  const formattedTime = new Date(data?.time).toLocaleString;
  return (
    <div className="md:mt-10">
      <PostEvents getDatas={getData} />
      <Table striped highlightOnHover withTableBorder withColumnBorders mt={15}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Description eng,rus,uzb</Table.Th>
            <Table.Th>title eng,tus,uzb</Table.Th>
            <Table.Th>City</Table.Th>
            <Table.Th>Field</Table.Th>
            <Table.Th>Time</Table.Th>
            <Table.Th>Speakers</Table.Th>
            <Table.Th>Participants</Table.Th>
            <Table.Th>Online</Table.Th>
            <Table.Th>Image</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.length > 0 ? (
            data?.map((item, index) => {
              return (
                <Table.Tr key={index}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>{item?.description_en}</Table.Td>
                  <Table.Td> {item?.title_en}</Table.Td>
                  <Table.Td>{item?.city}</Table.Td>
                  <Table.Td>{item?.field}</Table.Td>
                  <Table.Td>{new Date(item?.time).toLocaleString()}</Table.Td>
                  <Table.Td>{item?.speakers?.[0].fullName}</Table.Td>
                  <Table.Td>{item?.userDtos?.length}</Table.Td>
                  <Table.Td>
                    {" "}
                    {item?.online ? (
                      <span className="fa-solid fa-check text-xl text-green-500" />
                    ) : (
                      <span className="fa-solid fa-xmark text-xl text-red-500" />
                    )}
                  </Table.Td>
                  <Table.Td>
                    <img
                      className="aspect-square w-11 rounded-full"
                      src={image_url + item.file}
                      alt=""
                    />
                  </Table.Td>
                  <Table.Td className="flex justify-normal gap-2">
                    <DeleteEvents getData={getData} item={item} />
                    <EditEvents getDatas={getData} item={item} />
                    <SeeAll getData={getData} item={item} />
                  </Table.Td>
                </Table.Tr>
              );
            })
          ) : (
            <Table.Td colSpan={11}>
              <div className="flex flex-col items-center gap-3">
                <img src="/empty.png" alt="no data" width={100} />
                <p className="text-gray-500">No data available.</p>
              </div>
            </Table.Td>
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default index;
