import React from "react";
import {
  Box,
  Modal,
  Button,
  Textarea,
  TextInput,
  FileInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const EditNews = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="Create News"
        size="calc(70vw - 3rem)"
      >
        <Box maw={840} mx="auto">
          <form>
            <TextInput
              label="News title English"
              placeholder="News title English"
              defaultValue={"news title English"}
              required
            />
            <TextInput
              mt="sm"
              label="News title Russian"
              placeholder="News title Russian"
              defaultValue={"news title Russain"}
              required
            />
            <TextInput
              mt="sm"
              label="News title Uzbek"
              placeholder="News title Uzbek"
              defaultValue={"news title Uzbek"}
              required
            />
            <Textarea
              mt="md"
              label="News Description English"
              placeholder="news description English"
              defaultValue={"news description English"}
              required
            />
            <Textarea
              mt="md"
              label="News Description Russian"
              placeholder="news description Russian"
              defaultValue={"news description Russian"}
              required
            />
            <Textarea
              mt="md"
              label="News Description Uzbek"
              placeholder="news description Uzbek"
              defaultValue={"news description Uzbek"}
              required
            />
            <FileInput label="Choose your Image" placeholder="Input image" />

            <Button type="submit" color="cyan" mt="sm" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <div>
        <button onClick={open}>Edit News</button>
      </div>
    </div>
  );
};

export default EditNews;
