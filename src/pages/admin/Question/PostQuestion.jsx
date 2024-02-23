import { Button, Drawer, Modal, MultiSelect, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useState } from "react";

const PostQuestion = () => {
  const [trueVariant, setTrueVariant] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [formData, setFormData] = useState({
    titleEnglish: "",
    titleRussian: "",
    titleUzbek: "",
    variant1: "",
    variant2: "",
    variant3: "",
    variant4: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectTrueVariant = (variant) => {
    setTrueVariant(variant);
  };

  const handleSubmit = async () => {
    if (trueVariant === "") {
      console.log("Please select a true variant");
      return;
    }

    const postData = {
      titleEnglish: formData.titleEnglish,
      titleRussian: formData.titleRussian,
      titleUzbek: formData.titleUzbek,
      variant1: formData.variant1,
      variant2: formData.variant2,
      variant3: formData.variant3,
      variant4: formData.variant4,
      trueVariant: trueVariant,
    };

    try {
      const response = await axios.post("test", postData);

      console.log(response.data);

      console.log("Test created successfully!");
      setFormData({
        titleEnglish: "",
        titleRussian: "",
        titleUzbek: "",
        variant1: "",
        variant2: "",
        variant3: "",
        variant4: "",
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
        size="calc(50vw - 3rem)"
      >
        <TextInput
          mt="sm"
          label="Test title English"
          placeholder="Test title English"
          name="titleEnglish"
          value={formData.titleEnglish}
          onChange={handleInputChange}
          required
        />
        <TextInput
          mt="sm"
          label="Test title Russian"
          placeholder="Test title Russian"
          name="titleRussian"
          value={formData.titleRussian}
          onChange={handleInputChange}
          required
        />
        <TextInput
          mt="sm"
          label="Test title Uzbek"
          placeholder="Test title Uzbek"
          name="titleUzbek"
          value={formData.titleUzbek}
          onChange={handleInputChange}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 1"
          placeholder="Test Variant 1"
          name="variant1"
          value={formData.variant1}
          onChange={handleInputChange}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 2"
          placeholder="Test Variant 2"
          name="variant2"
          value={formData.variant2}
          onChange={handleInputChange}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 3"
          placeholder="Test Variant 3"
          name="variant3"
          value={formData.variant3}
          onChange={handleInputChange}
          required
        />
        <TextInput
          mt="sm"
          label="Test Variant 4"
          placeholder="Test Variant 4"
          name="variant4"
          value={formData.variant4}
          onChange={handleInputChange}
          required
        />

        <MultiSelect
          label="Choose true variant"
          placeholder="Pick value"
          clearable
          name="trueVariant"
          data={[1, 2, 3, 4].map((variant) => ({
            value: String(variant),
            label: `Variant ${variant}`,
          }))}
          required
          onChange={(selectedOption) => handleSelectTrueVariant(selectedOption)}
        />

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
