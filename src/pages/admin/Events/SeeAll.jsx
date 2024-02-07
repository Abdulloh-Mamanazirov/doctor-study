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
                <Table.Th w={300}>Description_en</Table.Th>
                <Table.Td>{item?.description_en}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>Description_uz</Table.Th>
                <Table.Td>{item?.description_en}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>Description_ru</Table.Th>
                <Table.Td>{item?.description_en}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>Title_en</Table.Th>
                <Table.Td>{item?.title_en}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>Title_ru</Table.Th>
                <Table.Td>{item?.title_ru}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>Title_uz</Table.Th>
                <Table.Td>{item?.title_uz}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>City</Table.Th>
                <Table.Td>{item?.city}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>Speakers</Table.Th>
                <Table.Td>{item?.speakers?.[0].fullName}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>Field</Table.Th>
                <Table.Td>{item?.field}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>Time</Table.Th>
                <Table.Td>{item?.time.slice(0, 10)}</Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Th>Online</Table.Th>
                <Table.Td>
                  {" "}
                  {item?.online ? (
                    <span className="fa-solid fa-check text-xl text-green-500" />
                  ) : (
                    <span className="fa-solid fa-xmark text-xl text-red-500" />
                  )}
                </Table.Td>
                <Table.Tr />
              </Table.Tr>
              <Table.Tr>
                <Table.Td colSpan={2}>
                  <Image src={image_url + item?.link} />
                </Table.Td>
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
