import { Box, Button, Popover, Text } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const DeleteSpeakers = ({ getData, item }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  async function handleDelete() {
    try {
      const res = await axios.delete(`/news/${item?.id}`);
      if (res.status === 204) {
        getData();
        toast.success("O'chirildi!");
        setPopoverVisible(false);
      }
    } catch (error) {
      toast.error("Nimadadir xatolik ketdi!");
      setPopoverVisible(false);
    }
  }

  const confirm = () => {
    handleDelete();
  };

  return (
    <div>
      <Popover
        position="bottom-end"
        withArrow
        shadow="md"
        opened={popoverVisible}
        onClose={() => setPopoverVisible(false)}
      >
        <p onClick={() => setPopoverVisible(true)}>delete</p>
        <Popover.Dropdown className="flex items-center">
          <Box mx="lg">
            <Text>Do this news</Text>
            <Button variant="outline" color="red" size="xs" onClick={confirm}>
              yes
            </Button>
            <Button
              size="xs"
              variant="outline"
              ml={15}
              onClick={() => setPopoverVisible(false)}
            >
              no
            </Button>
          </Box>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default DeleteSpeakers;
