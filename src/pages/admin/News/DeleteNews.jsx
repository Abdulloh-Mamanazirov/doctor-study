import { Button, Popover, Text } from "@mantine/core";
import React from "react";

const DeleteNews = () => {
  return (
    <div>
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <p>delete</p>
        </Popover.Target>
        <Popover.Dropdown className="flex items-center">
          
          <Button
            w={90}
            color="red"
            rightSection={<span className="fa-solid fa-trash" />}
          >
            yes
          </Button>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default DeleteNews;
