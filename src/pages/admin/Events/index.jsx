import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PostEvents from "./PostEvents";

const index = () => {
  const [data, setData] = useState([]);

  async function getData() {
    await axios
      .get("webinars")
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
  console.log(data, "event data");
  return (
    <div className=" md:mt-10">
      <PostEvents />
    </div>
  );
};

export default index;
