import { Box, Button, Modal, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const PostNews = ({ getData }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [file, setFile] = useState();
  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      title_en,
      title_ru,
      title_uz,
      description_en,
      description_ru,
      description_uz,
      file,
    } = e.target;

    const formdataForSubmit = new FormData();
    formdataForSubmit.append("title_en", title_en.value);
    formdataForSubmit.append("title_ru", title_ru.value);
    formdataForSubmit.append("title_uz", title_uz.value);
    formdataForSubmit.append("description_en", description_en.value);
    formdataForSubmit.append("description_ru", description_ru.value);
    formdataForSubmit.append("description_uz", description_uz.value);
    formdataForSubmit.append("file  ", file.files[0]);

    try {
      const response = await axios.post("news", formdataForSubmit);
      if (response.status === 201) {
        toast.success("news post sucsesful");
        close();
        getData();
      }
    } catch (error) {
      toast.error("Error submitting news post:", error);
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
              name="title_en"
              required
              value={formData.title_en}
              onChange={handleInputChange}
            />
            <TextInput
              mt="sm"
              label="News title Russian"
              placeholder="News title Russian"
              name="title_ru"
              value={formData.title_ru}
              onChange={handleInputChange}
              required
            />
            <TextInput
              mt="sm"
              label="News title Uzbek"
              placeholder="News title Uzbek"
              required
              name="title_uz"
              value={formData.title_uz}
              onChange={handleInputChange}
            />
            <Textarea
              mt="md"
              label="News Description English"
              placeholder="news description English"
              value={formData.description_en}
              name="description_en"
              onChange={handleInputChange}
              required
            />
            <Textarea
              mt="md"
              label="News Description Russian"
              placeholder="news description Russian"
              value={formData.description_ru}
              onChange={handleInputChange}
              required
              name="description_ru"
            />
            <Textarea
              mt="md"
              label="News Description Uzbek"
              placeholder="news description Uzbek"
              value={formData.description_uz}
              onChange={handleInputChange}
              required
              name="description_uz"
            />
            <label className="">
              Choose Image file
              <br />
              <input
                type="file"
                name="file"
                className="file:cursor-pointer file:rounded-md file:bg-transparent file:px-5"
                onChange={handleChange}
              />
              <img src={file} className="w-[400px] " />
            </label>

            <Button type="submit" color="cyan" mt="sm" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <Button type="button" color="cyan" onClick={open}>
        + Add News
      </Button>
    </div>
  );
};

export default PostNews;
