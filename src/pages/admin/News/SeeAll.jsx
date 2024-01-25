import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput } from "@mantine/core";

function Index() {
  const { opened, open, close } = useDisclosure();

  return (
    <>
      <div>
        <Modal opened={opened} onClose={close} title="Focus demo">
          <TextInput label="First input" placeholder="First input" />
          <TextInput
            data-autofocus
            label="Input with initial focus"
            placeholder="It has data-autofocus attribute"
            mt="md"
          />
        </Modal>
        <div>
          <button onClick={open}>Open modal</button>
        </div>
      </div>
    </>
  );
}

export default Index;
