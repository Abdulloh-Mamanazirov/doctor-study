import axios from "axios";
import React, { useEffect, useState } from "react";
import PostMaterails from "./PostMaterails";
import { Table } from "@mantine/core";
import DeleteViodeos from "./DeleteViodeos";
import EditMaterials from "./EditMaterials";
import SeeAll from "./SeeAll";
import { Link } from "react-router-dom";

const index = () => {
  const [data, setData] = useState([]);
  async function getData() {
    await axios
      .get("materials")
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

  return (
    <div>
      <PostMaterails getData={getData} />
      <Table striped highlightOnHover withTableBorder withColumnBorders mt={15}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>File</Table.Th>
            <Table.Th>Test</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.length > 0 ? (
            data?.map((item, index) => {
              return (
                <Table.Tr key={item?.id}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td className="line-clamp-3  ">
                    {item.description_en}
                  </Table.Td>
                  <Table.Td>{item?.title_en}</Table.Td>
                  <Table.Td>{item?.link}</Table.Td>
                  <Table.Td>
                    <Link
                      to={`/admin/test/${item?.id}`}
                      className="bg-blue-500 text-white rounded-md shadow-lg px-3 py-1"
                    >
                      Test
                    </Link>
                  </Table.Td>
                  <Table.Td className="flex items-center gap-3">
                    <DeleteViodeos getData={getData} item={item} />
                    <EditMaterials getData={getData} item={item} />
                    <SeeAll getData={getData} item={item} />
                  </Table.Td>
                </Table.Tr>
              );
            })
          ) : (
            <Table.Td colSpan={11}>
              <div className="flex flex-col justify-center items-center gap-3">
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
