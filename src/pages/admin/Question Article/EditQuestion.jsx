import axios from "axios";
import { useState } from "react";
import { Button, Group, Modal, Radio, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { toast } from "react-toastify";

const EditQuestion = ({ getData, item }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [trueVariant, setTrueVariant] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    (prevItem) => ({
      ...prevItem,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (trueVariant === "") {
      toast.info("Please select a true variant");
      return;
    }

    const Editdata = {
      question: item.question,
      options: [item.option1, item.option2, item.option3, item.option4],
    };

    Editdata.correct = Editdata.options[+trueVariant];

    try {
      await axios.patch(`quizzes/${item.id}`, Editdata);

      setItem({
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
          onChange={handleInputChange}
          defaultValue={item.question}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 1"
          placeholder="Test Variant 1"
          name="option1"
          value={item.option1}
          onChange={handleInputChange}
          defaultValue={item.options[0]}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 2"
          placeholder="Test Variant 2"
          name="option2"
          value={item.option2}
          onChange={handleInputChange}
          defaultValue={item.options[1]}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 3"
          placeholder="Test Variant 3"
          name="option3"
          value={item.option3}
          onChange={handleInputChange}
          defaultValue={item.options[2]}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 4"
          placeholder="Test Variant 4"
          name="option4"
          value={item.option4}
          onChange={handleInputChange}
          defaultValue={item.options[3]}
          required
        />

        <Radio.Group
          name="trueVariant"
          value={trueVariant}
          onChange={setTrueVariant}
        >
          <Group mt="xs">
            <Radio value="0" label="Variant 1" />
            <Radio value="1" label="Variant 2" />
            <Radio value="2" label="Variant 3" />
            <Radio value="3" label="Variant 4" />
          </Group>
        </Radio.Group>

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
