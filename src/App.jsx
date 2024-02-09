import { useEffect, useLayoutEffect, useState } from "react";
import { Provider } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store";
import { AdminLogin } from "./pages";
import { Admin, Client } from "./router";

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
