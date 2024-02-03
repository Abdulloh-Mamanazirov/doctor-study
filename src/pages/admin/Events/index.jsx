import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const index = () => {
  const [data, setData] = useState([]);

  async function getData() {
    await axios
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
  console.log(data,"event data");
  return <div className=" md:mt-10">admin events</div>;
};

export default index;
