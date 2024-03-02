import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import DeleteUser from "./DeleteUser";

const index = () => {
  const [data, setData] = useState([]);
  async function getData() {
    await axios
      .get("users")
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
    <div className=" md:mt-10">
      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Firstname</Table.Th>
            <Table.Th>lastname</Table.Th>
            <Table.Th>role</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Enabled</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.length > 0 ? (
            data?.map((item, index) => {
              return (
                <Table.Tr key={item?.id}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>{item.firstname}</Table.Td>
                  <Table.Td>{item.lastname}</Table.Td>
                  <Table.Td>{item.role}</Table.Td>
                  <Table.Td>{item.email}</Table.Td>
                  <Table.Td>
                    {item.enabled ? (
                      <span className="fa-solid fa-check text-xl text-green-500" />
                    ) : (
                      <span className="fa-solid fa-xmark text-xl text-red-500" />
                    )}
                  </Table.Td>
                  <Table.Td className="flex justify-normal">
                    <DeleteUser getData={getData} item={item} />
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
