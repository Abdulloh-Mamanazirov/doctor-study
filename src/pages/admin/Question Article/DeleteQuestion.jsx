import { Box, Button, Popover, Text } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const DeleteArticles = ({ getData, item }) => {
  async function handleDelete() {
    try {
      const res = await axios.delete(`/quizzes/${item.id}`);
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
          <span className="fa-solid fa-trash text-xl text-red-500 cursor-pointer pr-2" />
        </Popover.Target>
        <Popover.Dropdown className="flex items-center">
          <Box mx="lg">
            <Text>Do this test</Text>
            <Button
              fullWidth
              variant="outline"
              color="red"
              size="xs"
              onClick={confirm}
            >
              yes
            </Button>
          </Box>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default DeleteArticles;
