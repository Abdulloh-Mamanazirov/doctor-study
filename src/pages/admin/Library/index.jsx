import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import PostResurces from "./PostResurces";
import DeleteRoursec from "./DeleteRoursec";
import EditResources from "./EditResources";

const index = () => {
  const [data, setData] = useState([]);

  async function getData() {
    await axios
      .get("resources")
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
      <PostResurces getData={getData} />
      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Description_en</Table.Th>
            <Table.Th>Description_ru</Table.Th>
            <Table.Th>Description_uz</Table.Th>
            <Table.Th>File</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.length > 0 ? (
            data?.map((item, index) => {
              return (
                <Table.Tr key={item?.id}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>{item.description_ru}</Table.Td>
                  <Table.Td>{item?.description_en}</Table.Td>
                  <Table.Td>{item?.description_uz}</Table.Td>
                  <Table.Td>
                    <a href="#" />
                  </Table.Td>
                  <Table.Td className="flex justify-normal">
                    <DeleteRoursec getData={getData} item={item} />
                    <EditResources getData={getData} item={item} />
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
