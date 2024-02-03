import { Box, Button, Popover, Text } from "@mantine/core";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const DeleteArticles = ({ getData, item }) => {
  async function handleDelete() {
    try {
      const res = await axios.delete(`/article/${item.id}`);
      if (res.status === 204) {
        getData();
        toast.info("O'chirildi!");
      }
    } catch (error) {
      toast.error("Nimadadir xatolik ketdi!");
    }
  }

  const confirm = () => {
    handleDelete();
  };

  return (
    <div>
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <p>Delete</p>
        </Popover.Target>
        <Popover.Dropdown className="flex items-center">
          <Box mx="lg">
            <Text>Do this news</Text>
            <Button variant="outline" color="red" size="xs" onClick={confirm}>
              yes
            </Button>
            <Button size="xs" variant="outline" ml={15}>
              no
            </Button>
          </Box>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default DeleteArticles;
