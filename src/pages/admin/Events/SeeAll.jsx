import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Image, Modal, Table } from "@mantine/core";
import { image_url } from "../../../constants";

const SeeAll = ({ item }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="See Webinar"
        size="calc(70vw - 3rem)"
      >
        <div>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Description_en</Table.Th>
                <Table.Td>{item.description_en}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>Description_uz</Table.Th>
                <Table.Td>{item.description_en}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>Description_ru</Table.Th>
                <Table.Td>{item.description_en}</Table.Td>
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
                <Image src={image_url + item?.link} />
                <Table.Tr />
              </Table.Tr>
            </Table.Thead>
          </Table>
        </div>
      </Modal>
      <span
        onClick={open}
        className="fa-solid fa-eye text-xl text-blue-500 cursor-pointer "
      />
    </div>
  );
};

export default SeeAll;
