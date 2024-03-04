import axios from "axios";
import { Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostQuestion from "./PostQuestion";
import DeleteQuestion from "./DeleteQuestion";
import EditQuestion from "./EditQuestion";

const index = () => {
  const [data, setData] = useState([]);
  const { article_id } = useParams();

  async function getData() {
    await axios
      .get(`quizzes/article/${article_id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        return;
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <PostQuestion getData={getData} />
      <Table striped highlightOnHover withTableBorder withColumnBorders mt={15}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Question</Table.Th>
            {new Array(4).fill(null).map((_, ind) => (
              <Table.Th key={ind}>Variant {ind + 1}</Table.Th>
            ))}
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.length > 0 ? (
            data?.map((item, index) => {
              return (
                <Table.Tr key={item?.id}>
                  <Table.Td className="outline outline-1 outline-slate-400">
                    {index + 1}
                  </Table.Td>
                  <Table.Th className="outline outline-1 outline-slate-400">
                    {item?.question}
                  </Table.Th>
                  {item?.options?.map((option, ind) => (
                    <Table.Td
                      bg={option === item?.correct ? "#b1ffb1" : "#ffcdcd"}
                      key={ind}
                      className="outline outline-1 outline-slate-400"
                    >
                      {option}
                    </Table.Td>
                  ))}
                  <Table.Td className="flex justify-normal">
                    <DeleteQuestion getData={getData} item={item} />
                    <EditQuestion getData={getData} item={item} />
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
