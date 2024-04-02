import { Button, Group, Modal, Radio, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const EditQuestion = ({ getData, item }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [trueVariant, setTrueVariant] = useState("");

  const handleSubmit = async () => {
    if (trueVariant === "") {
      toast.info("Please select a true variant");
      return;
    }

    const postData = {
      question: item.question,
      options: [
        item.option1 ? item.option1[0] : "",
        item.option2 ? item.option2[1] : "",
        item.option3 ? item.option3[2] : "",
        item.option4 ? item.option4[3] : "",
      ],
    };

    postData.correct = postData.options[+trueVariant];

    try {
      await axios.put(`/tests/${item.id}`, postData);

      item({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
      });

      setTrueVariant("");
      close();
      getData();
    } catch (error) {
      return;
    }
  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="Edit Test"
        size="calc(60vw - 3rem)"
      >
        <TextInput
          mt="sm"
          label="Question"
          placeholder="Test title English"
          name="question"
          className="w-full"
          value={item.question}
          defaultValue={item.question}
          required
        />
        <TextInput
          mt="sm"
          name="option1"
          label="Test Variant 1"
          placeholder="Test Variant 1"
          defaultValue={item.options[0]}
          required
        />
        <TextInput
          mt="sm"
          name="option2"
          label="Test Variant 2"
          placeholder="Test Variant 2"
          defaultValue={item.options[1]}
          required
        />
        <TextInput
          mt="sm"
          name="option3"
          label="Test Variant 3"
          placeholder="Test Variant 3"
          defaultValue={item.options[2]}
          required
        />
        <TextInput
          mt="sm"
          name="option4"
          label="Test Variant 4"
          placeholder="Test Variant 4"
          defaultValue={item.options[3]}
          required
        />

        <Group mt="xs">
          <Radio
            name="trueVariant"
            value="0"
            label="Variant 1"
            checked={trueVariant === "0"}
            onChange={() => setTrueVariant("0")}
          />
          <Radio
            name="trueVariant"
            value="1"
            label="Variant 2"
            checked={trueVariant === "1"}
            onChange={() => setTrueVariant("1")}
          />
          <Radio
            name="trueVariant"
            value="2"
            label="Variant 3"
            checked={trueVariant === "2"}
            onChange={() => setTrueVariant("2")}
          />
          <Radio
            name="trueVariant"
            value="3"
            label="Variant 4"
            checked={trueVariant === "3"}
            onChange={() => setTrueVariant("3")}
          />
        </Group>

        <Button
          color="cyan"
          fullWidth
          mt={15}
          onClick={handleSubmit}
          disabled={!trueVariant}
        >
          Create Test
        </Button>
      </Modal>
      <span
        className="fa-solid fa-edit text-blue-500 text-xl cursor-pointer"
        color="cyan"
        onClick={open}
      />
    </div>
  );
};

export default EditQuestion;
