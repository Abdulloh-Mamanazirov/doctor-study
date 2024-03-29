import { Box, Button, Modal, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const PostArticles = ({ getData }) => {
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
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
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
      const response = await axios.post("articles", formdataForSubmit);
      if (response.status === 201) {
        toast.success("news post sucsesful");
        close();
        getData();
      }
    } catch (error) {
      toast.error("Error submitting news post:");
    }
  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="Create Articles"
        size="calc(70vw - 3rem)"
      >
        <Box maw={840} mx="auto">
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Article title English"
              placeholder="Article title English"
              name="title_en"
              required
              value={formData.title_en}
              onChange={handleInputChange}
            />
            <TextInput
              mt="sm"
              label="Article title Russian"
              placeholder="Article title Russian"
              name="title_ru"
              value={formData.title_ru}
              onChange={handleInputChange}
              required
            />
            <TextInput
              mt="sm"
              label="Article title Uzbek"
              placeholder="Article title Uzbek"
              required
              name="title_uz"
              value={formData.title_uz}
              onChange={handleInputChange}
            />
            <Textarea
              mt="md"
              label="Article Description English"
              placeholder="news description English"
              value={formData.description_en}
              name="description_en"
              onChange={handleInputChange}
              required
            />
            <Textarea
              mt="md"
              label="Article Description Russian"
              placeholder="news description Russian"
              value={formData.description_ru}
              onChange={handleInputChange}
              required
              name="description_ru"
            />
            <Textarea
              mt="md"
              label="Article Description Uzbek"
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
                required
                onChange={handleChange}
              />
              {file && (
                <img src={file} className="w-[400px]" alt="File Preview" />
              )}
            </label>

            <Button type="submit" color="cyan" mt="sm" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <Button type="button" color="cyan" onClick={open}>
        + Add Article
      </Button>
    </div>
  );
};

export default PostArticles;
