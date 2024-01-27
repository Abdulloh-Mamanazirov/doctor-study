import { Table } from "@mantine/core";
import React from "react";
import DeleteUser from "./DeleteUser";

const index = () => {
  return (
    <div className=" md:mt-10">
      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>1</Table.Td>
            <Table.Td>salo,</Table.Td>
            <Table.Td>salo,</Table.Td>
            <Table.Td>salo,</Table.Td>
            <Table.Td>salo,</Table.Td>
            <Table.Td>
              <DeleteUser />
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default index;
