import { Button } from "@mantine/core";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Logo_text } from "../assets/images";
import { ADMIN } from "../constants";
import { useLocation } from "react-router-dom";

const Admin = () => {
  let open = true;
  const location = useLocation();

  const isMenuItemActive = (path) => {
    return location.pathname === path;
  };

  const LogoutComponent = () => {
    const token = sessionStorage.clear("doctors-admin-token");
    const navigate = useNavigate();

    if (!token) {
      navigate("/login");
      window.location.reload();
    }
  };

  return (
    <div className="flex">
      <div className={`w-72 border-r h-screen pt-8 `}>
        <div className="flex gap-x-4 items-center">
          <img src={Logo_text} className={`cursor-pointer w-fit `} />
        </div>
        <ul className="pt-6">
          {ADMIN.map((Menu, index) => (
            <NavLink
              to={Menu.path}
              key={index}
              className={`flex rounded-md p-2 cursor-pointer items-center ${
                isMenuItemActive(Menu.path) ? "activeButton" : ""
              }`}
            >
              <Button fullWidth variant="default">
                <span className="text-xl">{Menu.icon}</span>
                <p className="text-xl font-semibold pl-4">{Menu.title}</p>
              </Button>
            </NavLink>
          ))}
        </ul>
        <Button
          fullWidth
          color="red"
          className="hidden items-center  bg-red-500 my-5 text-white xl:flex"
          onClick={LogoutComponent}
        >
          <i className="fa-solid fa-arrow-left  items-center text-xl text-white" />
          <p className="pl-5 text-xl  font-semibold"> Log out</p>
        </Button>
      </div>
      <div className="h-screen flex-1 p-7">
        <Routes>
          {ADMIN?.map((route, ind) => (
            <Route key={ind} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
