import { Box, Grid, Image, Modal, Table } from "@mantine/core";
import React, { useState } from "react";
import { image_url } from "../../../constants";

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
          title={`See speaker ${item?.fullName}`}
          size="calc(70vw - 3rem)"
          className="z-50"
        >
          <Box maw={840} mx="auto">
            <Grid justify="space-between">
              <Grid.Col span="auto">
                <Image src={image_url + item?.link} />
              </Grid.Col>
              <Grid.Col span="auto">
                <Table
                  striped
                  highlightOnHover
                  withTableBorder
                  withColumnBorders
                >
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Description_en</Table.Th>
                      <Table.Td>{item?.description_en}</Table.Td>
                      <Table.Tr />
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Th>Description_ru</Table.Th>
                      <Table.Td>{item?.description_ru}</Table.Td>
                      <Table.Tr />
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Th>Description_uz</Table.Th>
                      <Table.Td>{item?.description_uz}</Table.Td>
                      <Table.Tr />
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Th>Title_en</Table.Th>
                      <Table.Td>{item?.fullName}</Table.Td>
                      <Table.Tr />
                    </Table.Tr>
                  </Table.Thead>
                </Table>
              </Grid.Col>
            </Grid>
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
