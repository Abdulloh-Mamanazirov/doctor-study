import { Box, Grid, Image, Modal, Table } from "@mantine/core";
import React, { useState } from "react";
import { image_url } from "../../../constants/url";
import { File } from "../../../assets";

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
          title="See Article"
          size="calc(70vw - 3rem)"
          className="z-50"
        >
          <Box maw={840} mx="auto">
            <Grid justify="space-between">
              <Grid.Col span="auto">
                <Image
                  className="max-h-full max-w-full"
                  src={image_url + item?.link}
                  onError={(e) => {
                    e.target.src = File;
                  }}
                />
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
                      <Table.Td>{item.createdDate.slice(0, 10)}</Table.Td>
                      <Table.Tr />
                    </Table.Tr>
                  </Table.Thead>
                </Table>
              </Grid.Col>
            </Grid>
          </Box>
        </Modal>

        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          See full
        </button>
      </div>
    </div>
  );
};

export default SeeAll;
