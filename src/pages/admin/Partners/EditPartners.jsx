import { Box, Button, Modal, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditPartners = ({ getData, item }) => {
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
    formdataForSubmit.append("url", values.target.url.value ?? item?.url);

    if (file) {
      formdataForSubmit.append("file", file);
    }

    try {
      const response = await axios.patch(
        `partners/${item.id}`,
        formdataForSubmit
      );
      if (response.status === 200) {
        toast.success("Edited SucsesFull!");
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
        title="Create Partners"
        size="calc(70vw - 3rem)"
      >
        <Box maw={840} mx="auto">
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Partners title English"
              placeholder="Partners title English"
              defaultValue={item.title_en}
              name="title_en"
            />
            <TextInput
              mt="sm"
              label="Partners title Russian"
              placeholder="Partners title Russian"
              defaultValue={item.title_ru}
              name="title_ru"
            />
            <TextInput
              mt="sm"
              label="Partners title Uzbek"
              placeholder="Partners title Uzbek"
              defaultValue={item.title_uz}
              name="title_uz"
            />
            <TextInput
              mt="sm"
              label="Partners title Uzbek"
              placeholder="Partners title Uzbek"
              defaultValue={item.url}
              name="url"
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
        <span
          onClick={open}
          className="fa-solid fa-edit text-xl text-blue-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default EditPartners;
