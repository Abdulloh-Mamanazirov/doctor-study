import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Input,
  TextInput,
  Textarea,
  FileInput,
} from "@mantine/core";
import { toast } from "react-toastify";

const EditSpeakers = ({ getData, item }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (values) => {
    const formdataForSubmit = new FormData();
    formdataForSubmit.append("fullName", values.fullName ?? data?.fullName);
    formdataForSubmit.append(
      "description",
      values.description ?? data?.description
    );
    if (image) {
      formdataForSubmit.append("image", image);
    }
    try {
      const response = await axios.patch(
        `speakers/${item?.id}`,
        formdataForSubmit
      );
      close();
      getData();
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
          <FileInput
            label="Edit Image"
            name="image"
            onChange={handleChange}
            placeholder="edit image"
          />
          <Button color="cyan" type="submit" fullWidth mt={15}>
            Submit
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default EditSpeakers;
