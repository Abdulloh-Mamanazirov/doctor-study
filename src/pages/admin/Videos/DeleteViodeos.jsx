import axios from "axios";
import { Box, Button, Popover, Text } from "@mantine/core";
import { toast } from "react-toastify";

const DeleteViodeos = ({ getData, item }) => {
  async function handleDelete() {
    try {
      const res = await axios.delete(`/materials/${item?.id}`);
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
          <span className="fa-solid fa-trash text-xl text-red-500 cursor-pointer" />
        </Popover.Target>
        <Popover.Dropdown className="flex items-center">
          <Box mx="lg">
            <Text>Do this news</Text>
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

export default DeleteViodeos;
