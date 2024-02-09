import { Box, Modal, Table } from "@mantine/core";
import React, { useState } from "react";

const SeeAll = ({ item }) => {
  const [opened, setOpen] = useState(false);

  return (
    <div>
      <div>
        <Modal
          opened={opened}
          onClose={() => {
            setOpen(false);
          }}
          title="see material"
          size="calc(70vw - 3rem)"
          className="z-50"
        >
          <Box maw={840} mx="auto">
            <Table striped highlightOnHover withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Description_en</Table.Th>
                  <Table.Td>{item.description_en}</Table.Td>
                  <Table.Tr />
                </Table.Tr>
                <Table.Tr>
                  <Table.Th>Description_ru</Table.Th>
                  <Table.Td>{item.description_ru}</Table.Td>
                  <Table.Tr />
                </Table.Tr>
                <Table.Tr>
                  <Table.Th>Description_uz</Table.Th>
                  <Table.Td>{item.description_uz}</Table.Td>
                  <Table.Tr />
                </Table.Tr>
                <Table.Tr>
                  <Table.Th>Title_en</Table.Th>
                  <Table.Td>{item.title_en}</Table.Td>
                  <Table.Tr />
                </Table.Tr>
                <Table.Tr>
                  <Table.Th>Title_ru</Table.Th>
                  <Table.Td>{item.title_ru}</Table.Td>
                  <Table.Tr />
                </Table.Tr>
                <Table.Tr>
                  <Table.Th>Title_uz</Table.Th>
                  <Table.Td>{item.title_uz}</Table.Td>
                  <Table.Tr />
                </Table.Tr>
                <Table.Tr>
                  <Table.Th>Created At</Table.Th>
                  <Table.Td>{item.createdDate?.slice?.(0, 10)}</Table.Td>
                  <Table.Tr />
                </Table.Tr>
              </Table.Thead>
            </Table>
          </Box>
        </Modal>

        <span
          onClick={() => {
            setOpen(true);
          }}
          className="fa-solid fa-eye text-xl text-cyan-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SeeAll;
