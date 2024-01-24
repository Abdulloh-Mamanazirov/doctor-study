import { CLIENT } from "../constants";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useEffect, useState } from "react";

const Client = () => {
  const { pathname } = useLocation();
  const [isNavHidden, setIsNavHidden] = useState(false);
  const client_token = sessionStorage.getItem("doctors-token");

  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      setIsNavHidden(true);
    } else if (pathname === "/login") {
      setIsNavHidden(true);
    } else if (pathname === "/register") {
      setIsNavHidden(true);
    } else if (pathname.includes("/video-materials") && !client_token) {
      setIsNavHidden(true);
    } else if (pathname.includes("/articles") && !client_token) {
      setIsNavHidden(true);
    } else if (pathname.includes("/library") && !client_token) {
      setIsNavHidden(true);
    } else {
      setIsNavHidden(false);
    }
  }, [pathname, client_token]);

  return (
    <>
      <div hidden={isNavHidden} className="mb-[123px]">
        <Navbar />
      </div>
      <div>
        <Routes>
          {CLIENT?.map((route, ind) => (
            <Route key={ind} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      <div hidden={isNavHidden}>
        <Footer />
      </div>
    </>
  );
};

export default Client;
