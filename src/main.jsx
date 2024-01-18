import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import App from "./App.jsx";

// css
import "./index.css";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MantineProvider>
      <App />
    </MantineProvider>
  </BrowserRouter>
);
