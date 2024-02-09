import axios from "axios";
import { useState } from "react";
import { Box, Button, Modal, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { toast } from "react-toastify";

const PostMaterials = ({ getData }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [formData, setFormData] = useState({
    title_en: "",
    title_ru: "",
    title_uz: "",
    description_en: "",
    description_ru: "",
    description_uz: "",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isValidYouTubeLink = (url) => {
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    return youtubeRegex.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.link && !isValidYouTubeLink(formData.link)) {
      toast.error("Invalid YouTube link. Please enter a valid YouTube URL.");
      return;
    }
    try {
      const response = await axios.post("materials", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        toast.success("Material post successful");
        close();
        getData();
      }
    } catch (error) {
      toast.error("Error submitting material post:", error);
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
              name="title_en"
              required
              value={formData.title_en}
              onChange={handleInputChange}
            />
            <TextInput
              mt="sm"
              label="Material title Russian"
              placeholder="Material title Russian"
              name="title_ru"
              value={formData.title_ru}
              onChange={handleInputChange}
              required
            />
            <TextInput
              mt="sm"
              label="Material title Uzbek"
              placeholder="Material title Uzbek"
              required
              name="title_uz"
              value={formData.title_uz}
              onChange={handleInputChange}
            />
            <Textarea
              mt="md"
              label="Material Description English"
              placeholder="Material description English"
              value={formData.description_en}
              name="description_en"
              onChange={handleInputChange}
              required
            />
            <Textarea
              mt="md"
              label="Material Description Russian"
              placeholder="Material description Russian"
              value={formData.description_ru}
              onChange={handleInputChange}
              required
              name="description_ru"
            />
            <Textarea
              mt="md"
              label="Material Description Uzbek"
              placeholder="Material description Uzbek"
              value={formData.description_uz}
              onChange={handleInputChange}
              required
              name="description_uz"
            />
            <TextInput
              mt="sm"
              label="Material link YouTube link"
              placeholder="Material link"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              required
            />
            <Button type="submit" color="cyan" mt="sm" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <Button type="button" color="cyan" onClick={open}>
        + Add Video Materials
      </Button>
    </div>
  );
};

export default PostMaterials;
