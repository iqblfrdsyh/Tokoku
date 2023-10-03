import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Footer from "./footer";
import Headers from "./navbar/headers";

const MainLayout = () => {
  const location = useLocation();

  const isPath =
    location.pathname !== "/login" && location.pathname !== "/register";

  return (
    <React.Fragment>
      {isPath ? <Headers.NavigationBar /> : <Headers.Header />}
      <main className="mt-28 h-full mb-[50px]">
        {/* {children} */}
        {<Outlet />}
      </main>
      {isPath ? <Footer.Footer2 /> : <Footer.Footer1 />}
    </React.Fragment>
  );
};

export default MainLayout;
