import axios from "axios";
import {
  Box,
  Modal,
  Input,
  Button,
  Checkbox,
  Textarea,
  TextInput,
  FileInput,
  MultiSelect,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { toast } from "react-toastify";

const PostArticles = ({ getDatas }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [speakersId, setSpeakersId] = useState("");
  const [file, setFile] = useState();
  const [formData, setFormData] = useState({});
  const [data, setData] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function getData() {
    try {
      const response = await axios.get("speakers");
      setData(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
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
      city,
      online,
      speakers,
      time,
      field,
    } = e.target.elements;

    const formdataForSubmit = new FormData();
    formdataForSubmit.append("title_en", title_en.value);
    formdataForSubmit.append("title_ru", title_ru.value);
    formdataForSubmit.append("title_uz", title_uz.value);
    formdataForSubmit.append("description_en", description_en.value);
    formdataForSubmit.append("description_ru", description_ru.value);
    formdataForSubmit.append("description_uz", description_uz.value);
    formdataForSubmit.append("file", file.files[0]);
    formdataForSubmit.append("city", city.value);
    formdataForSubmit.append("speakers", speakersId);
    formdataForSubmit.append("time", time.value);
    formdataForSubmit.append("field", field.value);
    formdataForSubmit.append("online", online.checked);

    try {
      const response = await axios.post("webinars", formdataForSubmit);
      if (response.status === 201) {
        toast.success("Events post successful");
        close();
        getDatas();
      }
    } catch (error) {
      toast.error("Error submitting Events post:", error);
    }
  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="Create Events"
        size="calc(70vw - 3rem)"
      >
        <Box maw={840} mx="auto">
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Events title English"
              placeholder="Events title English"
              name="title_en"
              required
              value={formData?.title_en}
              onChange={handleInputChange}
            />
            <TextInput
              mt="sm"
              label="Events title Russian"
              placeholder="Events title Russian"
              name="title_ru"
              value={formData?.title_ru}
              onChange={handleInputChange}
              required
            />
            <TextInput
              mt="sm"
              label="Events title Uzbek"
              placeholder="Events title Uzbek"
              required
              name="title_uz"
              value={formData?.title_uz}
              onChange={handleInputChange}
            />
            <Textarea
              mt="md"
              label="Events Description English"
              placeholder="news description English"
              value={formData?.description_en}
              name="description_en"
              onChange={handleInputChange}
              required
            />
            <Textarea
              mt="md"
              label="Events Description Russian"
              placeholder="news description Russian"
              value={formData?.description_ru}
              onChange={handleInputChange}
              required
              name="description_ru"
            />
            <Textarea
              mt="md"
              label="Events Description Uzbek"
              placeholder="news description Uzbek"
              value={formData?.description_uz}
              onChange={handleInputChange}
              required
              name="description_uz"
            />
            <TextInput
              mt="md"
              label="City "
              placeholder="city"
              value={formData?.city}
              onChange={handleInputChange}
              required
              name="city"
            />
            <MultiSelect
              label="Choose speakers"
              placeholder="Pick value"
              data={data?.map?.((item) => ({
                value: String(item?.id),
                label: item?.fullName,
              }))}
              clearable
              name="speakers"
              onChange={(selectedOption) => setSpeakersId(selectedOption)}
            />
            <label htmlFor="" className="my-5">
              Choose your webinar date
              <Input
                type="datetime-local"
                placeholder="Pick date and time"
                name="time"
              />
            </label>
            <TextInput
              mt="md"
              label="Field "
              placeholder="field"
              value={formData?.field}
              onChange={handleInputChange}
              required
              name="field"
            />
            <Checkbox
              label="Is online"
              className="py-5"
              onChange={(e) => {
                setFormData((old) => ({ ...old, online: e.target.checked }));
              }}
              name="online"
            />

            <label className="">
              Choose Image file
              <br />
              <FileInput
                placeholder="choose your file"
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
        + Add Events
      </Button>
    </div>
  );
};

export default PostArticles;
