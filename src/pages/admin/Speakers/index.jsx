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
    setFile(URL.createObjectURL(e.target.files[0]));
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
      .catch((error) => {
        toast.error(error.message);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, description, file } = e.target;

    const formdataForSubmit = new FormData();
    formdataForSubmit.append("fullName", fullName.value);
    formdataForSubmit.append("description", description.value);
    formdataForSubmit.append("file", file.files[0]);

    try {
      const response = await axios.post("speakers", formdataForSubmit);

      if (response.status === 201) {
        toast.success("speakers post sucsesful");
        close();
        getData();
      }
    } catch (error) {
      toast.error("Error submitting news post:", error);

      toast.error("error in created");
    }
  };

  return (
    <div className=" md:mt-10">
      <Button color="cyan" onClick={open} mb={15}>
        + Add speaks
      </Button>

      <Modal opened={opened} onClose={close} title="Create Speakers">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Write full name"
            type="text"
            name="fullName"
            placeholder="write fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            size="md"
            required
          />

          <Textarea
            label="Write full name"
            type="text"
            name="description"
            placeholder="write description"
            value={formData.description}
            onChange={handleInputChange}
            size="md"
            required
            mt={10}
          />

          <FileInput
            label="Choose image "
            type="file"
            name="file"
            placeholder="image"
            value={formData.file}
            onChange={handleChange}
            size="md"
            required
          />
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
