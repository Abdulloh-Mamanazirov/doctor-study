import { ADMIN } from "../constants";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
  return (
    <Routes>
      {ADMIN?.map((route, ind) => (
        <Route key={ind} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Admin;
