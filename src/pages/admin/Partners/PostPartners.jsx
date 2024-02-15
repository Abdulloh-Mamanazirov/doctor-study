import { Box, Button, Modal, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const PostPartners = ({ getData }) => {
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

    const { title_en, title_ru, title_uz, url, file } = e.target;

    const formdataForSubmit = new FormData();
    formdataForSubmit.append("title_en", title_en.value);
    formdataForSubmit.append("title_ru", title_ru.value);
    formdataForSubmit.append("title_uz", title_uz.value);
    formdataForSubmit.append("url", url.value);
    formdataForSubmit.append("file  ", file.files[0]);

    try {
      const response = await axios.post("partners", formdataForSubmit);
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
        title="Create Partners"
        size="calc(70vw - 3rem)"
      >
        <Box maw={840} mx="auto">
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Partners title English"
              placeholder="Partners title English"
              name="title_en"
              required
              value={formData.title_en}
              onChange={handleInputChange}
            />
            <TextInput
              mt="sm"
              label="Partners title Russian"
              placeholder="Partners title Russian"
              name="title_ru"
              value={formData.title_ru}
              onChange={handleInputChange}
              required
            />
            <TextInput
              mt="sm"
              label="Partners title Uzbek"
              placeholder="Partners title Uzbek"
              required
              name="title_uz"
              value={formData.title_uz}
              onChange={handleInputChange}
            />

            <TextInput
              mt="md"
              label="Partners Url"
              placeholder="partner url"
              value={formData.url}
              onChange={handleInputChange}
              required
              name="url"
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
        + Add Partners
      </Button>
    </div>
  );
};

export default PostPartners;
