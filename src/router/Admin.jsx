import { Burger, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Logo_text } from "../assets/images";
import { ADMIN } from "../constants";

const Admin = () => {
  const location = useLocation();
  const [opened, { toggle }, close] = useDisclosure();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const isMenuItemActive = (path) => {
    const isActive = location.pathname === path;
    return isActive;
  };

  const LogoutComponent = () => {
    const token = sessionStorage.clear("doctors-admin-token");
    const navigate = useNavigate();

    if (!token) {
      navigate("/login");
      window.location.reload();
    }
  };

  function handleCancel() {
    setBurgerMenuOpen(false);
  }
  return (
    <div className="flex">
      <div className={`w-72 border-r h-screen pt-8 md:block hidden`}>
        <div className="flex gap-x-4 items-center">
          <img src={Logo_text} className={`cursor-pointer w-fit `} />
        </div>
        <ul className="pt-6 ">
          {ADMIN.map((Menu, index) => (
            <NavLink
              to={Menu.path}
              key={index}
              className={`flex rounded-md p-2 cursor-pointer items-center`}
            >
              <Button
                fullWidth
                variant="default"
                style={{
                  backgroundColor: isMenuItemActive(Menu.path)
                    ? "tomato"
                    : "whitesmoke",
                }}
              >
                <span
                  className={`text-xl ${
                    isMenuItemActive(Menu.path) ? "text-white" : "text-black"
                  }`}
                >
                  {Menu.icon}
                </span>
                <p
                  className={`text-xl font-semibold pl-4 ${
                    isMenuItemActive(Menu.path) ? "text-white" : "text-black"
                  }`}
                >
                  {Menu.title}
                </p>
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

      <Burger
        opened={toggle}
        className="md:hidden"
        onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
        aria-label="Toggle navigation"
      />

      {burgerMenuOpen && (
        <div className="bg-gray-800 text-white fixed top-0  w-64 h-screen">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-4 items-center">
              <img src={Logo_text} className={`cursor-pointer w-fit `} />
            </div>
            {/* burger items */}
            <ul className="pt-6 ">
              {ADMIN.map((Menu, index) => (
                <NavLink
                  to={Menu.path}
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer items-center`}
                  onClick={handleCancel} // Add onClick handler here
                >
                  <Button
                    fullWidth
                    variant="default"
                    style={{
                      backgroundColor: isMenuItemActive(Menu.path)
                        ? "tomato"
                        : "whitesmoke",
                    }}
                  >
                    <span
                      className={`text-xl ${
                        isMenuItemActive(Menu.path)
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {Menu.icon}
                    </span>
                    <p
                      className={`text-xl font-semibold pl-4 ${
                        isMenuItemActive(Menu.path)
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {Menu.title}
                    </p>
                  </Button>
                </NavLink>
              ))}

              <Button
                fullWidth
                color="red"
                className="hidden items-center  bg-red-500 my-5 text-white xl:flex"
                onClick={LogoutComponent}
              >
                <i className="fa-solid fa-arrow-left  items-center text-xl text-white" />
                <p className="pl-5 text-xl  font-semibold"> Log out</p>
              </Button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
