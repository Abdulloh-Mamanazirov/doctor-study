import { useEffect, useLayoutEffect, useState } from "react";
import { Provider } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";
import { Admin, Client } from "./router";

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

  useLayoutEffect(() => {
    window.scroll({ left: 0, top: 0 });
  }, [pathname]);

  return (
    <>
      <Provider store={store}>{routes}</Provider>
      <ToastContainer />
    </>
  );
}

export default App;
