// import { Button, FileInput } from "@mantine/core";
// import axios from "axios";
// import React, { useState } from "react";
// import { Form } from "react-router-dom";
// import { toast } from "react-toastify";

// const index = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (files) => {
//     setFile(files[0]);
//   };

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const response = await axios.post("YOUR_API_ENDPOINT", formData);

//       toast.log("File uploaded successfully", response.data);
//     } catch (error) {
//       toast.error("Error uploading file", error);
//     }
//   };

//   return (
//     <Form>
//       <FileInput
//         label="Select a book file"
//         accept=".pdf,.epub,.mobi"
//         onChange={handleFileChange}
//       />
//       <Button onClick={handleSubmit}>Submit</Button>
//     </Form>
//   );
// };

// export default index;

import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index