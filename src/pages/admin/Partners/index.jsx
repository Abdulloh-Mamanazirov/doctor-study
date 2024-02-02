import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const index = () => {
  const [data, setData] = useState([]);

  async function getData() {
    await axios
      .get("resources")
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
  console.log(data, "partners");
  return <div className=" md:mt-10">admin partners page</div>;
};

export default index;
