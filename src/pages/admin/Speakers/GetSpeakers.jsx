import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import { toast } from "react-toastify";

import { image_url } from "../../../constants";
import SeeAll from "./SeeAll";
import EditSpeakers from "./EditSpeakers";
import DeleteSpeakers from "./DeleteSpeakers";

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
          {data?.length > 0 ? (
            data?.map((item, index) => {
              return (
                <Table.Tr key={item?.id}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>{item.fullName}</Table.Td>
                  <Table.Td className="border p-3">
                    {item?.description_en}
                    <hr className="my-2" />
                    {item?.description_ru}
                    <hr className="my-2" />
                    {item?.description_uz}
                  </Table.Td>
                  <Table.Td>
                    <img
                      className="aspect-square w-11 rounded-full"
                      src={image_url + item?.link}
                      alt=""
                    />
                  </Table.Td>
                  <Table.Td className="flex justify-normal">
                    <DeleteSpeakers getData={getData} item={item} />
                    <EditSpeakers getData={getData} item={item} />
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

export default GetSpeakers;
