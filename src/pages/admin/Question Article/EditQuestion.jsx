import axios from "axios";
import { useState } from "react";
import { Button, Group, Modal, Radio, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { Button, Group, Modal, Radio, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const PostQuestion = ({ getData, item }) => {
  const { article_id } = useParams();
  const [opened, { open, close }] = useDisclosure(false);
  const [trueVariant, setTrueVariant] = useState(
    item?.options?.findIndex?.((option) => option === item?.correct)
  );
  const [formData, setFormData] = useState({
    question: item?.question,
    option1: item?.options[0],
    option2: item?.options[1],
    option3: item?.options[2],
    option4: item?.options[3],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (trueVariant === "") {
      toast.info("Please select a true variant");
      return;
    }

    const postData = {
      question: formData.question,
      options: [
        formData.option1,
        formData.option2,
        formData.option3,
        formData.option4,
      ],
      article: article_id,
    };

    postData.correct = postData.options[+trueVariant];
    try {
      await axios.put(`quizzes/${item.id}`, postData);
      close();
      getData();
    } catch (error) {
      return;
    }
  };
  console.log(article_id, "article");

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="Create Test"
        size="calc(60vw - 3rem)"
      >
        <TextInput
          mt="sm"
          label="Question"
          placeholder="Test title English"
          name="question"
          className="w-full"
          value={formData.question}
          onChange={handleInputChange}
          // defaultValue={item.question}
          required
        />

        <TextInput
          mt="sm"
          label="Test Variant 1"
          placeholder="Test Variant 1"
          name="option1"
          value={formData.option1}
          onChange={handleInputChange}
          // defaultValue={item.options[0]}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 2"
          placeholder="Test Variant 2"
          name="option2"
          value={formData.option2}
          onChange={handleInputChange}
          // defaultValue={item.options[1]}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 3"
          placeholder="Test Variant 3"
          name="option3"
          value={formData.option3}
          onChange={handleInputChange}
          // defaultValue={item.options[2]}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 4"
          placeholder="Test Variant 4"
          name="option4"
          value={formData.option4}
          onChange={handleInputChange}
          // defaultValue={item.options[3]}
          required
        />

        <Radio.Group
          name="trueVariant"
          value={String(trueVariant)}
          onChange={setTrueVariant}
          // defaultChecked={trueVariant}
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

export default PostQuestion;
