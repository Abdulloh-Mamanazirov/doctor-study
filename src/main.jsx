import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import App from "./App.jsx";
import axios from "axios";

// css
import "./index.css";
import "@mantine/core/styles.css";

let global_url = "http://192.168.137.251:8081/api/";
axios.defaults.baseURL = global_url;

let token = sessionStorage.getItem("doctors-admin-token");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MantineProvider>
      <App />
    </MantineProvider>
  </BrowserRouter>
);
