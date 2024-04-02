import { Box, Button, Modal, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditNews = ({ getData, item }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
    values.preventDefault();
    const formdataForSubmit = new FormData();
    formdataForSubmit.append(
      "description_en",
      values.target.description_en.value ?? item?.description_en
    );
    formdataForSubmit.append(
      "description_ru",
      values.target.description_ru.value ?? item?.description_ru
    );
    formdataForSubmit.append(
      "description_uz",
      values.target.description_uz.value ?? item?.description_uz
    );
    formdataForSubmit.append(
      "title_en",
      values.target.title_en.value ?? item?.title_en
    );
    formdataForSubmit.append(
      "title_ru",
      values.target.title_ru.value ?? item?.title_ru
    );
    formdataForSubmit.append(
      "title_uz",
      values.target.title_uz.value ?? item?.title_uz
    );

    if (file) {
      formdataForSubmit.append("file", file);
    }

    try {
      const response = await axios.patch(`news/${item.id}`, formdataForSubmit);
      if (response.status === 200) {
        toast.success("Edited SucsesFull!");
        close();
        getData();
      }
    } catch (error) {
      return;
    }
  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="Create News"
        size="calc(70vw - 3rem)"
      >
        <Box maw={840} mx="auto">
          <form onSubmit={handleSubmit}>
            <TextInput
              label="News title English"
              placeholder="News title English"
              defaultValue={item.title_en}
              name="title_en"
              required
            />
            <TextInput
              mt="sm"
              label="News title Russian"
              placeholder="News title Russian"
              defaultValue={item.title_ru}
              required
              name="title_ru"
            />
            <TextInput
              mt="sm"
              label="News title Uzbek"
              placeholder="News title Uzbek"
              defaultValue={item.title_uz}
              required
              name="title_uz"
            />
            <Textarea
              mt="md"
              label="News Description English"
              placeholder="news description English"
              defaultValue={item.description_en}
              required
              name="description_en"
            />
            <Textarea
              mt="md"
              label="News Description Russian"
              placeholder="news description Russian"
              defaultValue={item.description_ru}
              required
              name="description_ru"
            />
            <Textarea
              mt="md"
              label="News Description Uzbek"
              placeholder="news description Uzbek"
              defaultValue={item.description_uz}
              required
              name="description_uz"
            />
            <input
              type="file"
              name="image"
              className="file:cursor-pointer file:rounded-md file:bg-transparent file:px-5"
              onChange={handleChange}
            />
            <img src={file} className="w-[400px] " />
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
