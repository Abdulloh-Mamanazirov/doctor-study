import { Box, Button, Popover, Text } from "@mantine/core";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const DeleteNews = ({ getData, item }) => {
  async function handleDelete() {
    try {
      const res = await axios.delete(`/news/${item?.id}`);
      if (res.status === 204) {
        getData();
        toast.success("O'chirildi!");
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
            <Text className="text-nowrap">Delete this speaker?</Text>
            <Button
              fullWidth
              variant="outline"
              color="red"
              size="xs"
              onClick={confirm}
            >
              yes
            </Button>
            {/* <Button size="xs" variant="outline" ml={15}>
              no
            </Button> */}
          </Box>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default DeleteNews;
