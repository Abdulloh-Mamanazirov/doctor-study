import { Box, Button, Modal, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditEvents = ({ getData, item }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleSubmit = async (values) => {
    values.preventDefault();

    const dataForSubmit = {
      title_en: values.target.title_en.value ?? item?.title_en,
      title_ru: values.target.title_ru.value ?? item?.title_ru,
      title_uz: values.target.title_uz.value ?? item?.title_uz,
      description_en:
        values.target.description_en.value ?? item?.description_en,
      description_ru:
        values.target.description_ru.value ?? item?.description_ru,
      description_uz:
        values.target.description_uz.value ?? item?.description_uz,
      link: values.target.link.value ?? item?.link,
    };

    try {
      const response = await axios.patch(`materials/${item.id}`, dataForSubmit);

      if (response.status === 200) {
        toast.success("Edited Successfully!");
        close();
        getData();
      }
    } catch (error) {
      toast.error("Error submitting news patch:");
    }
  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="Create Material"
        size="calc(70vw - 3rem)"
      >
        <Box maw={840} mx="auto">
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Material title English"
              placeholder="Material title English"
              defaultValue={item.title_en}
              name="title_en"
            />
            <TextInput
              mt="sm"
              label="Material title Russian"
              placeholder="Material title Russian"
              defaultValue={item.title_ru}
              name="title_ru"
            />
            <TextInput
              mt="sm"
              label="Material title Uzbek"
              placeholder="Material title Uzbek"
              defaultValue={item.title_uz}
              name="title_uz"
            />
            <Textarea
              mt="md"
              label="Material Description English"
              placeholder="Material description English"
              defaultValue={item.description_en}
              name="description_en"
            />
            <Textarea
              mt="md"
              label="Material Description Russian"
              placeholder="news description Russian"
              defaultValue={item.description_ru}
              name="description_ru"
            />
            <Textarea
              mt="md"
              label="Article Description Uzbek"
              placeholder="news description Uzbek"
              defaultValue={item.description_uz}
              name="description_uz"
            />

            <TextInput
              mt="sm"
              label="Material link"
              placeholder="Material link"
              defaultValue={item.link}
              name="link"
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

export default EditEvents;
