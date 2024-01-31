import { Table } from "@mantine/core";
import React, { useEffect, useState } from "react";
import DeleteSpeakers from "../Speakers/DeleteSpeakers";
import axios from "axios";
import { toast } from "react-toastify";
import EditSpeakers from "./EditSpeakers";

const GetSpeakers = () => {
  const [data, setData] = useState();

  async function getData() {
    await axios
      .get("speakers")
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

  return (
    <div>
      {" "}
      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>FullName</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Image</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.map((item, index) => {
            return (
              <Table.Tr key={item?.id}>
                <Table.Td>{index + 1}</Table.Td>
                <Table.Td>{item.fullName}</Table.Td>
                <Table.Td>{item.description}</Table.Td>
                <Table.Td>
                  <img
                    className="aspect-square w-11 rounded-full"
                    src={`http://82.97.242.32:8081/api/${item?.link}`}
                    alt=""
                  />
                </Table.Td>
                <Table.Td className="flex justify-normal">
                  <DeleteSpeakers getData={getData} item={item} />
                  <EditSpeakers getData={getData} item={item} />
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default GetSpeakers;
