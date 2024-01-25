import React from "react";
import {
  Box,
  Button,
  FileInput,
  Modal,
  NumberInput,
  PillsInputField,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const PostNews = () => {
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
              // onChange={(e) => console.log(e.target.value)}
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
            <FileInput
              label="Choose your Image"
              placeholder="Input image"
            />

            <Button type="submit" color="cyan" mt="sm" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <Button type="button" color="cyan" onClick={open}>
        + Add News
      </Button>
    </div>
  );
};

export default PostNews;
