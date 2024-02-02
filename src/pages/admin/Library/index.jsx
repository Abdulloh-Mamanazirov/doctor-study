import React, { useState } from "react";
import axios from "axios";
import { Button, FileInput, TextInput } from "@mantine/core";
import { toast } from "react-toastify";

const index = () => {
  const [formData, setFormData] = useState({
    description_en: "",
    description_ru: "",
    description_uz: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("description_en", formData.description_en);
      data.append("description_ru", formData.description_ru);
      data.append("description_uz", formData.description_uz);
      data.append("file", formData.file);

      const response = await axios.post("resources", data);

      if (response.status === 201) {
        toast.success("speakers post sucsesful");
        close();
        getData();
      }
    } catch (error) {
      toast.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description (English):
        <TextInput
          type="text"
          name="description_en"
          value={formData.description_en}
          onChange={handleChange}
        />
      </label>

      <label>
        Description (Russian):
        <TextInput
          type="text"
          name="description_ru"
          value={formData.description_ru}
          onChange={handleChange}
        />
      </label>

      <label>
        Description (Uzbek):
        <TextInput
          type="text"
          name="description_uz"
          value={formData.description_uz}
          onChange={handleChange}
        />
      </label>

      <label>
        File:
        <FileInput type="file" name="file" onChange={handleChange} />
      </label>

      <Button color="cyan" mt={15} fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
};

export default index;
