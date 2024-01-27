import {
  Box,
  Grid,
  Image,
  Modal,
  Table
} from "@mantine/core";
import React, { useState } from "react";

const SeeAll = () => {
  const [opened, setOpen] = useState(false);


  return (
    <div>
      <div>
        <Modal
          opened={opened}
          onClose={() => {
            setOpen(false);
          }}
          title="Create News"
          size="calc(70vw - 3rem)"
          className="z-50"
        >
          <Box maw={840} mx="auto">
            <Grid justify="space-between">
              <Grid.Col span="auto">
                <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
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
                      <Table.Th>Element position</Table.Th>
                      <Table.Td>index</Table.Td>
                      <Table.Tr />
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Th>Element position</Table.Th>
                      <Table.Td>index</Table.Td>
                      <Table.Tr />
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Th>Element position</Table.Th>
                      <Table.Td>index</Table.Td>
                      <Table.Tr />
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Th>Element position</Table.Th>
                      <Table.Td>index</Table.Td>
                      <Table.Tr />
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Th>Element position</Table.Th>
                      <Table.Td>index</Table.Td>
                      <Table.Tr />
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Th>Element position</Table.Th>
                      <Table.Td>index</Table.Td>
                      <Table.Tr />
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Th>Element position</Table.Th>
                      <Table.Td>index</Table.Td>
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
          Toliq ko'rish
        </button>
      </div>
    </div>
  );
};

export default SeeAll;
