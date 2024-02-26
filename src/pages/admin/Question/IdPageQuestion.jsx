import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const IdPageQuestion = ({}) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  async function getData() {
    await axios
      .get(`test${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        toast.error("error during get data");
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return <div>IdPageQuestion</div>;
};

export default IdPageQuestion;
