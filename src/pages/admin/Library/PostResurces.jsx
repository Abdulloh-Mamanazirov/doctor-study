import React, { useState } from "react";
import axios from "axios";
import { Button, FileInput, TextInput, Modal } from "@mantine/core";
import { toast } from "react-toastify";
import { useDisclosure } from "@mantine/hooks";

const index = ({ getData }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { description_en, description_ru, description_uz, file } = e.target;
    try {
      const data = new FormData();
      data.append("description_en", description_en.value);
      data.append("description_ru", description_ru.value);
      data.append("description_uz", description_uz.value);
      data.append("file", file.files[0]);

      const response = await axios.post("resources", data);

      if (response.status === 201) {
        toast.success("Resouces post sucsesful");
        close();
        getData();
      }
    } catch (error) {
      toast.error("Error:", error);
    }
  };

  return (
    <div>
      <Button onClick={open} color="cyan" mb={15}>
        + Add Resources
      </Button>
      <Modal opened={opened} size="55%" onClose={close} title="create resurces">
        <form onSubmit={handleSubmit}>
          <label>
            Description (English):
            <TextInput
              type="text"
              name="description_en"
              placeholder="description_en"
            />
          </label>

          <label>
            Description (Russian):
            <TextInput
              type="text"
              name="description_ru"
              placeholder="description_ru"
            />
          </label>

          <label>
            Description (Uzbek):
            <TextInput
              type="text"
              name="description_uz"
              placeholder="description_uz"
            />
          </label>

          <label>
            File:
            <FileInput placeholder="choose file" type="file" name="file" />
          </label>

          <Button color="cyan" mt={15} fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default index;
