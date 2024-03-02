import { Button, FileInput, TextInput, Textarea, Modal } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDisclosure } from "@mantine/hooks";
import GetSpeakers from "./GetSpeakers";

const index = () => {
  const [file, setFile] = useState();
  const [formData, setFormData] = useState({});
  const [data, setData] = useState();
  const [opened, { open, close }] = useDisclosure(false);

  const handleChange = (e) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  async function getData() {
    await axios
      .get("speakers")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        return;
      });
  }
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, description_uz, description_ru, description_en, file } =
      e.target;

    const formdataForSubmit = new FormData();
    formdataForSubmit.append("fullName", fullName.value);
    formdataForSubmit.append("description_uz", description_uz.value);
    formdataForSubmit.append("description_ru", description_ru.value);
    formdataForSubmit.append("description_en", description_en.value);
    formdataForSubmit.append("file", file.files[0]);

    try {
      const response = await axios.post("speakers", formdataForSubmit);

      if (response.status === 201) {
        toast.success("speakers post sucsesful");
        close();
        getData();
      }
    } catch (error) {
      toast.error("Error submitting news post:");
    }
  };

  return (
    <div className=" md:mt-10">
      <Button color="cyan" onClick={open} mb={15}>
        + Add Speakers
      </Button>

      <Modal opened={opened} onClose={close} title="Create Speakers">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Write full name"
            type="text"
            name="fullName"
            placeholder="Write full name"
            value={formData.fullName}
            onChange={handleInputChange}
            size="md"
            required
          />

          <Textarea
            label="Description in Uzbek"
            placeholder="Description in Uzbek"
            type="text"
            name="description_uz"
            value={formData.description_uz}
            onChange={handleInputChange}
            size="md"
            required
            mt={10}
          />
          <Textarea
            label="Description in Russian"
            placeholder="Description in Russian"
            type="text"
            name="description_ru"
            value={formData.description_ru}
            onChange={handleInputChange}
            size="md"
            required
            mt={10}
          />
          <Textarea
            label="Description in English"
            placeholder="Description in English"
            type="text"
            name="description_en"
            value={formData.description_en}
            onChange={handleInputChange}
            size="md"
            required
            mt={10}
          />
          <label htmlFor="file">
            Choose image
            <input
              label="Choose image "
              type="file"
              name="file"
              id="file"
              placeholder="image"
              value={formData.file}
              onChange={handleChange}
              size="md"
              className="block w-full border rounded-md file:cursor-pointer file:rounded-md file:bg-transparent file:px-5"
              required
            />
          </label>
          <img src={file} className="w-[400px] " />

          <Button color="cyan" fullWidth mt={15} type="submit">
            Submit
          </Button>
        </form>
      </Modal>
      <GetSpeakers />
    </div>
  );
};

export default index;
