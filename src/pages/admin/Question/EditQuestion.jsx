import { Box, Button, Modal, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditQuestion = ({ getData, item }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleSubmit = async (values) => {
    values.preventDefault();

    const dataForSubmit = {
      title_en: values.target.title_en.value ?? item?.title_en,
      title_ru: values.target.title_ru.value ?? item?.title_ru,
      title_uz: values.target.title_uz.value ?? item?.title_uz,
      variant1: values.target.variant1.value ?? item?.variant1,
      variant2: values.target.variant2.value ?? item?.variant2,
      variant3: values.target.variant3.value ?? item?.variant3,
      variant4: values.target.variant4.value ?? item?.variant3,
      TreuVariant: values.target.TreuVariant.value ?? item?.TreuVariant,
    };

    try {
      const response = await axios.patch(`materials/${item.id}`, dataForSubmit);

      if (response.status === 200) {
        toast.success("Edited Successfully!");
        close();
        getData();
      }
    } catch (error) {
      toast.error("Error submitting Test patch:");
    }
  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="Create Test"
        size="calc(70vw - 3rem)"
      >
        <Box maw={840} mx="auto">
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Test title English"
              placeholder="Test title English"
              defaultValue={item.title_en}
              name="title_en"
            />
            <TextInput
              mt="sm"
              label="Test title Russian"
              placeholder="Test title Russian"
              defaultValue={item.title_ru}
              name="title_ru"
            />
            <TextInput
              mt="sm"
              label="Test title Uzbek"
              placeholder="Test title Uzbek"
              defaultValue={item.title_uz}
              name="title_uz"
            />
            <TextInput
              mt="md"
              label="Test Variant 1"
              placeholder="Test Variant 1"
              defaultValue={item.variant1}
              name="variant1"
            />
            <TextInput
              mt="md"
              label="Test Variant 2"
              placeholder="Test Variant 2"
              defaultValue={item.variant2}
              name="variant2"
            />
            <TextInput
              mt="md"
              label="Test Variant 3"
              placeholder="Test Variant 3"
              defaultValue={item.variant3}
              name="variant3"
            />
            <TextInput
              mt="md"
              label="Test Variant 4"
              placeholder="Test Variant 4"
              defaultValue={item.variant4}
              name="variant4"
            />
            <TextInput
              mt="md"
              label="Test TreuVariant"
              placeholder="Test TreuVariant"
              defaultValue={item.TreuVariant}
              name="TreuVariant"
            />

            <Button type="submit" color="cyan" mt="sm" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <div>
        <span
          onClick={open}
          className="fa-solid fa-edit text-xl text-blue-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default EditQuestion;
