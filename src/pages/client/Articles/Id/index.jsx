import React from "react";
import { useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();

  return (
    <div>
      article with id {id}
    </div>
  );
};

export default index;
