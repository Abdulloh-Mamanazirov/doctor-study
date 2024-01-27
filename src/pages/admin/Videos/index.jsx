
// // VideoUpload.js
// import { Button, FileInput, Notification } from "@mantine/core";
// import React, { useState } from "react";
// import { uploadVideo } from "./apiService";

// const VideoUpload = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [notification, setNotification] = useState({
//     show: false,
//     message: "",
//     type: "info",
//   });

//   const handleFileChange = (files) => {
//     setVideoFile(files[0]);
//   };

//   const handleSubmit = async () => {
//     try {
//       if (!videoFile) {
//         throw new Error("Please select a video file");
//       }

//       const formData = new FormData();
//       formData.append("video", videoFile);

//       // You can add other form data if needed

//       await uploadVideo(formData);

//       setNotification({
//         show: true,
//         message: "Video uploaded successfully",
//         type: "success",
//       });
//     } catch (error) {
//       console.error("Error uploading video", error);
//       setNotification({
//         show: true,
//         message: "Error uploading video",
//         type: "error",
//       });
//     }
//   };

//   return (
//     <div>
//       <h1>Video Upload</h1>
//       <FileInput onChange={handleFileChange} accept="video/*" />
//       <Button onClick={handleSubmit}>Upload Video</Button>

//       {notification.show && (
//         <Notification
//           title={notification.type === "success" ? "Success" : "Error"}
//           type={notification.type}
//           onClose={() =>
//             setNotification({ show: false, message: "", type: "info" })
//           }
//         >
//           {notification.message}
//         </Notification>
//       )}
//     </div>
//   );
// };

// export default VideoUpload;

import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index