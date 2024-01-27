import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Admin, Client } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { pathname } = useLocation();
  const admin_token = sessionStorage.getItem("doctors-admin-token");
  const [routes, setRoutes] = useState();

  useEffect(() => {
    if (pathname.startsWith("/admin") && admin_token) {
      setRoutes(<Admin />);
    } else if (pathname.startsWith("/admin") && !admin_token) {
      sessionStorage.clear();
      window.location.replace("/login");
    } else {
      setRoutes(<Client />);
    }
  }, [pathname, admin_token]);

  return (
    <>
      {routes}
      <ToastContainer />
    </>
  );
}

export default App;
