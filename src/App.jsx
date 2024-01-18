import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Admin, Client } from "./router";

function App() {
  const { pathname } = useLocation();
  const [routes, setRoutes] = useState();
  const admin_token = sessionStorage.getItem("doctors-admin-token");

  useEffect(() => {
    if (pathname.startsWith("/admin") && admin_token) {
      setRoutes(Admin);
    } else if (pathname.startsWith("/admin") && !admin_token) {
      sessionStorage.clear();
      window.location.replace("/login");
    }

    if (!pathname.startsWith("/admin")) {
      setRoutes(Client);
    }
  }, [pathname]);

  return <>{routes}</>;
}

export default App;
