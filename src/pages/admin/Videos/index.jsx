import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PostMaterails from "./PostMaterails";

const index = () => {
  const [data, setData] = useState([]);
  async function getData() {
    await axios
      .get("materials")
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
  return (
    <div>
      <PostMaterails getData={getData} />
    </div>
  );
};

export default index;
