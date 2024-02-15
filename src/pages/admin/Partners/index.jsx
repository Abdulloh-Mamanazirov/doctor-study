import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PostPartners from "./PostPartners";
import { Table } from "@mantine/core";
import EditPartners from "./EditPartners";
import DeletePatners from "./DeletePatners";
import { image_url } from "../../../constants";

const index = () => {
  const [data, setData] = useState([]);

  async function getData() {
    await axios
      .get("partners")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        toast.error("erro during get data");
      });
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data, "partners");
  return (
    <div className=" md:mt-10">
      <PostPartners getData={getData} />
      <Table striped highlightOnHover withTableBorder withColumnBorders mt={15}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>title_en</Table.Th>
            <Table.Th>title_ru</Table.Th>
            <Table.Th>title_uz</Table.Th>
            <Table.Th>URL</Table.Th>
            <Table.Th>Link</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.length > 0 ? (
            data?.map((item, index) => {
              return (
                <Table.Tr key={item?.id}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>{item?.title_en}</Table.Td>
                  <Table.Td>{item?.title_ru}</Table.Td>
                  <Table.Td>{item?.title_uz}</Table.Td>
                  <Table.Td>{item?.url}</Table.Td>
                  <Table.Td>
                    <img
                      className="aspect-square w-11 rounded-full"
                      src={image_url + item.link}
                      alt=""
                    />
                  </Table.Td>
                  <Table.Td className="flex justify-normal">
                    <DeletePatners getData={getData} item={item} />
                    <EditPartners getData={getData} item={item} />
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
