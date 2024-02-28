import {
  Box,
  Button,
  Drawer,
  Group,
  Modal,
  Radio,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useState } from "react";

// Define the PostQuestion component
const PostQuestion = () => {
  // State variables
  const [trueVariant, setTrueVariant] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [formData, setFormData] = useState({
    question: "What is the capital of Canada?",
    option1: "Toronto",
    option2: "Vancouver",
    option3: "Ottawa",
    option4: "Montreal",
    favoriteFramework: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (trueVariant === "") {
      console.log("Please select a true variant");
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
      correct: trueVariant,
      material: 1,
    };

    try {
      const response = await axios.post("/api/your-api-endpoint", postData);

      console.log(response.data);

      console.log("Test created successfully!");
      setFormData({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
      });
      setTrueVariant("");
    } catch (error) {
      console.error("Failed to create test:", error.message);
    }
  };
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
          label="Test title English"
          placeholder="Test title English"
          name="question"
          className="w-full"
          value={formData.question}
          onChange={handleInputChange}
          required
        />

        <TextInput
          mt="sm"
          label="Test Variant 1"
          placeholder="Test Variant 1"
          name="option1"
          value={formData.option1}
          onChange={handleInputChange}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 2"
          placeholder="Test Variant 2"
          name="option2"
          value={formData.option2}
          onChange={handleInputChange}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 3"
          placeholder="Test Variant 3"
          name="option3"
          value={formData.option3}
          onChange={handleInputChange}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 4"
          placeholder="Test Variant 4"
          name="option4"
          value={formData.option4}
          onChange={handleInputChange}
          required
        />

        <Radio.Group
          name="trueVariant"
          value={trueVariant}
          onChange={setTrueVariant}
        >
          <Group mt="xs">
            <Radio value="option1" label="Variant 1" />
            <Radio value="option2" label="Variant 2" />
            <Radio value="option3" label="Variant 3" />
            <Radio value="option4" label="Variant 4" />
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
      <Button color="cyan" onClick={open}>
        + Create New Test
      </Button>
    </div>
  );
};

export default PostQuestion;
