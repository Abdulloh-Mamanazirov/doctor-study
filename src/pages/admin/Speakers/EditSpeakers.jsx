import { Button, FileInput, Modal, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditSpeakers = ({ getData, item }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
    console.log(values, "valeu");
    values.preventDefault();
    const formdataForSubmit = new FormData();
    formdataForSubmit.append(
      "fullName",
      values.target.fullName.value ?? item?.fullName
    );
    formdataForSubmit.append(
      "description_uz",
      values.target.description_uz.value ?? item?.description_uz
    );
    formdataForSubmit.append(
      "description_ru",
      values.target.description_ru.value ?? item?.description_ru
    );
    formdataForSubmit.append(
      "description_en",
      values.target.description_en.value ?? item?.description_en
    );
    if (image) {
      formdataForSubmit.append("image", image);
    }
    try {
      const response = await axios.patch(
        `/speakers/${item?.id}`,
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
      <span
        className="fa-solid fa-edit text-blue-500 text-xl cursor-pointer pl-1"
        onClick={open}
      />
      <Modal
        opened={opened}
        onClose={close}
        title={`Edit Speaker ${item.fullName}`}
      >
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Edit Fulname"
            name="fullName"
            defaultValue={item.fullName}
          />
          <Textarea
            label="Edit description_uz"
            name="description_uz"
            defaultValue={item.description_uz}
          />
          <Textarea
            label="Edit description_ru"
            name="description_ru"
            defaultValue={item.description_ru}
          />
          <Textarea
            label="Edit description_en"
            name="description_en"
            defaultValue={item.description_en}
          />
          <input
            type="file"
            name="image"
            className="file:cursor-pointer file:rounded-md file:bg-transparent file:px-5"
            onChange={handleChange}
          />
          <img src={file} className="w-[400px] " />
          <Button color="cyan" type="submit" fullWidth mt={15}>
            Submit
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default EditSpeakers;
