import { useEffect, useLayoutEffect, useState } from "react";
import { Provider } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";
import { Admin, Client } from "./router";
import { AdminLogin } from "./pages";

function App() {
  const { pathname } = useLocation();
  const admin_token = sessionStorage.getItem("doctors-admin-token");
  const [routes, setRoutes] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  useEffect(() => {
    if (pathname.startsWith("/admin") && admin_token) {
      setRoutes(<Admin />);
    } else if (pathname.startsWith("/admin") && !admin_token) {
      sessionStorage.clear();
      return setIsLoggedIn(false);
    } else {
      setRoutes(<Client />);
    }
  }, [pathname, admin_token]);

  useLayoutEffect(() => {
    window.scroll({ left: 0, top: 0 });
  }, [pathname]);

  if (!isLoggedIn) {
      return <AdminLogin />;
  }
  return (
    <>
      <Provider store={store}>{routes}</Provider>
      <ToastContainer />
    </>
  );
}

export default App;
