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
    values.preventDefault();
    const formdataForSubmit = new FormData();
    formdataForSubmit.append("fullName", values.fullName ?? item?.fullName);
    formdataForSubmit.append(
      "description",
      values.description ?? item?.description
    );
    if (image) {
      formdataForSubmit.append("image", image);
    }
    try {
      const response = await axios.patch(
        `/speakers/${item?.id}`,
        formdataForSubmit
      );
      if (response.status === 204) {
        toast.dark("Edited SucsesFull!");
        close();
        getData();
      }
    } catch (error) {
      toast.error("Error submitting news patch:", error);
    }
  };

  return (
    <div>
      <span
        className="fa-solid fa-edit text-blue-500 text-xl cursor-pointer pl-1"
        onClick={open}
      />
      <Modal opened={opened} onClose={close} title="Authentication">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Edit Fulname"
            name="fullName"
            defaultValue={item.fullName}
          />
          <Textarea
            label="Edit Fulname"
            name="description"
            defaultValue={item.description}
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
