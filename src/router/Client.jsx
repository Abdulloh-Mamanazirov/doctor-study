import { CLIENT } from "../constants";
import { Route, Routes } from "react-router-dom";

const Client = () => {
  return (
    <Routes>
      {CLIENT?.map((route, ind) => (
        <Route key={ind} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Client;
